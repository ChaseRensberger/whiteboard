/*---------------------------------------------------------------------------------------------
 *  Copyright (c) dev.fast. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the repository root for license information.
 *--------------------------------------------------------------------------------------------*/

import { localize } from '../../nls.js';
import { registerColor } from '../../platform/theme/common/colorRegistry.js';

// Theme-owned colors reserved for a future canvas palette bridge. Null defaults
// leave existing themes unchanged; registering roles does not style the canvas.
for (const role of [
	'accent', 'accentSoft', 'onAccent', 'onWarning', 'well', 'raised', 'tray', 'ghost',
	'agent1', 'agent2', 'grid', 'edgeMuted', 'mapStorageBorder',
	'added', 'removed', 'modified', 'diffAddedBackground', 'diffRemovedBackground', 'diffModifiedBackground',
	'syntaxComment', 'syntaxType', 'syntaxFunction', 'syntaxString', 'syntaxNumber', 'syntaxOperator',
]) {
	registerColor(`review.${role}`, { dark: null, light: null, hcDark: null, hcLight: null },
		localize('review.paletteColor', "Whiteboard canvas palette color: {0}.", role));
}
