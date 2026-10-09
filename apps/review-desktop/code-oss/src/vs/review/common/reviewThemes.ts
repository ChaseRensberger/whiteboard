/*---------------------------------------------------------------------------------------------
 *  Copyright (c) dev.fast. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the repository root for license information.
 *--------------------------------------------------------------------------------------------*/

// Data only: safe to use without loading the configuration or theme registries.
export type ReviewThemeFamily = 'whiteboard' | 'gruvbox';
export interface ReviewCuratedTheme {
	id: ReviewThemeFamily;
	label: string;
	variants: Partial<Record<'light' | 'dark', { themeId: string; preview: readonly string[] }>>;
}

export const reviewThemes: readonly ReviewCuratedTheme[] = [
	{ id: 'whiteboard', label: 'Whiteboard', variants: {
		light: { themeId: 'Review Light', preview: ['#ffffff', '#e9ebef', '#2b55e6', '#d8402c'] },
		dark: { themeId: 'Review Dark', preview: ['#0c0f15', '#1a1f29', '#5b7cff', '#f26a55'] },
	} },
	{ id: 'gruvbox', label: 'Gruvbox', variants: {
		light: { themeId: 'Whiteboard Gruvbox Light', preview: ['#fbf1c7', '#ebdbb2', '#af3a03', '#9d0006'] },
		dark: { themeId: 'Whiteboard Gruvbox Dark', preview: ['#282828', '#3c3836', '#d79921', '#fb4934'] },
	} },
];

export function reviewThemeFamily(id: unknown): ReviewCuratedTheme {
	return reviewThemes.find(theme => theme.id === id) ?? reviewThemes[0];
}

export function reviewThemeVariant(theme: ReviewCuratedTheme, mode: 'light' | 'dark') {
	const variant = theme.variants[mode] ?? theme.variants.dark ?? theme.variants.light;
	if (!variant) throw new Error(`Theme ${theme.id} has no variants`);
	return variant;
}

export function reviewThemeFromNativeId(id: unknown): ReviewCuratedTheme | undefined {
	return reviewThemes.find(theme => Object.values(theme.variants).some(variant => variant.themeId === id));
}
