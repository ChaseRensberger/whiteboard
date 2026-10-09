import assert from 'node:assert/strict';
import test from 'node:test';

import { ColorScheme } from '../../platform/theme/common/theme.js';
import { reviewThemeFamily, reviewThemeVariant, type ReviewCuratedTheme } from '../common/reviewThemes.js';
import { applyReviewThemeChoice, applyReviewThemeFamily, currentReviewThemeChoice, currentReviewThemeFamily } from './reviewThemeChoice.js';

function configuration(initial: Record<string, unknown>) {
	const values = { ...initial };
	return {
		values,
		service: {
			getValue: (key: string) => values[key],
			updateValue: async (key: string, value: unknown) => { values[key] = value; },
		} as never,
	};
}

const themeService = { getColorTheme: () => ({ type: ColorScheme.DARK }), getPreferredColorScheme: () => ColorScheme.DARK } as never;

test('existing light, dark, and system choices keep their appearance without migration writes', () => {
	for (const mode of ['light', 'dark', 'system'] as const) {
		const config = configuration({
			'window.autoDetectColorScheme': mode === 'system',
			'workbench.colorTheme': mode === 'light' ? 'Review Light' : 'Review Dark',
			'workbench.preferredDarkColorTheme': 'Review Dark',
		});
		const before = { ...config.values };
		assert.equal(currentReviewThemeFamily(config.service, themeService), 'whiteboard');
		assert.equal(currentReviewThemeChoice(config.service, themeService), mode);
		assert.deepEqual(config.values, before);
	}
});

test('changing family preserves mode and unrelated settings across a restart', async () => {
	const config = configuration({
		'window.autoDetectColorScheme': false,
		'workbench.colorTheme': 'Review Light',
		'editor.fontSize': 22,
		'editor.fontFamily': 'My Font',
		'review.documentWidth': 'wide',
	});
	await applyReviewThemeFamily(config.service, themeService, 'gruvbox', currentReviewThemeChoice(config.service, themeService));
	assert.equal(config.values['workbench.colorTheme'], 'Whiteboard Gruvbox Light');
	assert.equal(config.values['editor.fontSize'], 22);
	assert.equal(config.values['editor.fontFamily'], 'My Font');
	assert.equal(config.values['review.documentWidth'], 'wide');
	const restarted = configuration(config.values);
	assert.equal(currentReviewThemeFamily(restarted.service, themeService), 'gruvbox');
	assert.equal(currentReviewThemeChoice(restarted.service, themeService), 'light');
});

test('switching modes retains the selected family', async () => {
	const config = configuration({ 'workbench.colorTheme': 'Whiteboard Gruvbox Light' });
	await applyReviewThemeChoice(config.service, themeService, 'dark');
	assert.equal(config.values['workbench.colorTheme'], 'Whiteboard Gruvbox Dark');
	assert.equal(currentReviewThemeFamily(config.service, themeService), 'gruvbox');
	assert.equal(currentReviewThemeChoice(config.service, themeService), 'dark');
	await applyReviewThemeChoice(config.service, themeService, 'light');
	assert.equal(config.values['workbench.colorTheme'], 'Whiteboard Gruvbox Light');
});

test('system mode remembers both curated variants, including on reselecting a family', async () => {
	const config = configuration({
		'window.autoDetectColorScheme': true,
		'workbench.preferredDarkColorTheme': 'Review Dark',
		'workbench.colorTheme': 'Review Light',
	});
	await applyReviewThemeFamily(config.service, themeService, 'gruvbox', 'system');
	assert.equal(config.values['window.autoDetectColorScheme'], true);
	assert.equal(config.values['workbench.preferredDarkColorTheme'], 'Whiteboard Gruvbox Dark');
	assert.equal(config.values['workbench.preferredLightColorTheme'], 'Whiteboard Gruvbox Light');
	assert.equal(currentReviewThemeFamily(config.service, themeService), 'gruvbox');
	assert.equal(currentReviewThemeChoice(config.service, themeService), 'system');
});

for (const mode of ['light', 'dark'] as const) {
	test(`system ${mode} retains the active family when the other preference uses a different family`, async () => {
		const scheme = mode === 'light' ? ColorScheme.LIGHT : ColorScheme.DARK;
		const config = configuration({
			'window.autoDetectColorScheme': true,
			'workbench.colorTheme': 'Review Dark',
			'workbench.preferredLightColorTheme': mode === 'light' ? 'Whiteboard Gruvbox Light' : 'Review Light',
			'workbench.preferredDarkColorTheme': mode === 'dark' ? 'Whiteboard Gruvbox Dark' : 'Review Dark',
		});
		// The host scheme must win even while the asynchronously applied theme
		// still reports the opposite mode.
		const nativeThemeService = {
			getPreferredColorScheme: () => scheme,
			getColorTheme: () => ({ type: mode === 'light' ? ColorScheme.DARK : ColorScheme.LIGHT }),
		} as never;
		assert.equal(currentReviewThemeFamily(config.service, nativeThemeService), 'gruvbox');
		await applyReviewThemeChoice(config.service, nativeThemeService, mode);
		assert.equal(config.values['workbench.colorTheme'], `Whiteboard Gruvbox ${mode === 'light' ? 'Light' : 'Dark'}`);
	});
}

test('unknown families fall back to Whiteboard', () => {
	assert.equal(reviewThemeFamily('removed-theme').id, 'whiteboard');
	assert.equal(currentReviewThemeFamily(configuration({ 'workbench.colorTheme': 'removed-theme' }).service, themeService), 'whiteboard');
});

test('a single-mode family resolves to its available palette', () => {
	const darkOnly: ReviewCuratedTheme = {
		id: 'gruvbox', label: 'Dark-only fixture',
		variants: { dark: { themeId: 'Fixture Dark', preview: [] } },
	};
	assert.equal(reviewThemeVariant(darkOnly, 'light').themeId, 'Fixture Dark');
	assert.equal(reviewThemeVariant(darkOnly, 'dark').themeId, 'Fixture Dark');
});

test('configured curated mode is authoritative while the native theme service is still updating', () => {
	const config = configuration({ 'workbench.colorTheme': 'Whiteboard Gruvbox Light' });
	assert.equal(currentReviewThemeChoice(config.service, themeService), 'light');
});

test('an absent configured theme uses the native service rather than falsely matching an absent light variant', () => {
	assert.equal(currentReviewThemeChoice(configuration({}).service, themeService), 'dark');
});
