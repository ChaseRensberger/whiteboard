/*---------------------------------------------------------------------------------------------
 *  Copyright (c) dev.fast. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the repository root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ConfigurationTarget, IConfigurationService } from '../../platform/configuration/common/configuration.js';
import { ColorScheme } from '../../platform/theme/common/theme.js';
import { IThemeService } from '../../platform/theme/common/themeService.js';
import type { IWorkbenchThemeService } from '../../workbench/services/themes/common/workbenchThemeService.js';
import { reviewThemeFamily, reviewThemeFromNativeId, reviewThemeVariant, type ReviewThemeFamily } from '../common/reviewThemes.js';

/**
 * The theme choice, shared by the `review.selectTheme` quick pick and the
 * Settings canvas tab. This module registers nothing, so the canvas part can
 * import it without pulling in a contribution.
 */

export type ReviewThemeChoice = 'dark' | 'light' | 'system';

type ReviewThemeService = Pick<IWorkbenchThemeService, 'getColorTheme' | 'getPreferredColorScheme'>;

const preferredThemeSettings: Record<ColorScheme, string> = {
	[ColorScheme.LIGHT]: 'workbench.preferredLightColorTheme',
	[ColorScheme.DARK]: 'workbench.preferredDarkColorTheme',
	[ColorScheme.HIGH_CONTRAST_LIGHT]: 'workbench.preferredHighContrastLightColorTheme',
	[ColorScheme.HIGH_CONTRAST_DARK]: 'workbench.preferredHighContrastColorTheme',
};

export function currentReviewThemeFamily(configurationService: IConfigurationService, themeService: ReviewThemeService): ReviewThemeFamily {
	const preferredScheme = themeService.getPreferredColorScheme();
	const nativeId = configurationService.getValue<boolean>('window.autoDetectColorScheme')
		? configurationService.getValue<string>(preferredThemeSettings[preferredScheme ?? themeService.getColorTheme().type])
		: configurationService.getValue<string>('workbench.colorTheme');
	return (reviewThemeFromNativeId(nativeId) ?? reviewThemeFamily(undefined)).id;
}

export async function applyReviewThemeFamily(configurationService: IConfigurationService, themeService: ReviewThemeService, family: ReviewThemeFamily, choice: ReviewThemeChoice): Promise<void> {
	await applyReviewThemeChoice(configurationService, themeService, choice, family);
}

export function currentReviewThemeChoice(configurationService: IConfigurationService, themeService: IThemeService): ReviewThemeChoice {
	if (configurationService.getValue<boolean>('window.autoDetectColorScheme')) {
		return 'system';
	}

	// The theme service applies a theme change asynchronously, so a read taken
	// right after applyReviewThemeChoice still reports the previous theme. The
	// configured name is authoritative whenever it names a Review theme.
	const configured = configurationService.getValue<string>('workbench.colorTheme');
	const family = reviewThemeFromNativeId(configured);
	if (family && family.variants.light?.themeId === configured) {
		return 'light';
	}
	if (family && family.variants.dark?.themeId === configured) {
		return 'dark';
	}

	const type = themeService.getColorTheme().type;
	return type === ColorScheme.LIGHT || type === ColorScheme.HIGH_CONTRAST_LIGHT ? 'light' : 'dark';
}

export async function applyReviewThemeChoice(configurationService: IConfigurationService, themeService: ReviewThemeService, choice: ReviewThemeChoice, family: ReviewThemeFamily = currentReviewThemeFamily(configurationService, themeService)): Promise<void> {
	const theme = reviewThemeFamily(family);
	await configurationService.updateValue('workbench.preferredDarkColorTheme', reviewThemeVariant(theme, 'dark').themeId, ConfigurationTarget.USER);
	await configurationService.updateValue('workbench.preferredLightColorTheme', reviewThemeVariant(theme, 'light').themeId, ConfigurationTarget.USER);
	switch (choice) {
		case 'dark':
			await configurationService.updateValue('window.autoDetectColorScheme', false, ConfigurationTarget.USER);
			await configurationService.updateValue('workbench.colorTheme', reviewThemeVariant(theme, 'dark').themeId, ConfigurationTarget.USER);
			break;
		case 'light':
			await configurationService.updateValue('window.autoDetectColorScheme', false, ConfigurationTarget.USER);
			await configurationService.updateValue('workbench.colorTheme', reviewThemeVariant(theme, 'light').themeId, ConfigurationTarget.USER);
			break;
		case 'system':
			await configurationService.updateValue('window.autoDetectColorScheme', true, ConfigurationTarget.USER);
			break;
	}
}
