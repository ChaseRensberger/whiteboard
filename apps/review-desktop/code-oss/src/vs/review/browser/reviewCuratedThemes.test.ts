import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { URI } from '../../base/common/uri.js';
import { ColorThemeData } from '../../workbench/services/themes/common/colorThemeData.js';

for (const mode of ['dark', 'light'] as const) {
	test(`Gruvbox ${mode} resolves specific language scopes using its curated syntax palette`, async () => {
		const theme = ColorThemeData.createUnloadedTheme(mode === 'dark' ? 'vs-dark' : 'vs');
		theme.location = URI.file(fileURLToPath(new URL(`../../../../extensions/review-themes/themes/gruvbox-${mode}.json`, import.meta.url)));
		await theme.ensureLoaded({ readExtensionResource: (uri: URI) => readFile(uri.fsPath, 'utf8') } as never);

		const scopes = [
			['keyword', 'keyword.control.js'],
			['keyword.operator', 'keyword.operator.delete.cpp'],
			['entity.name.type', 'entity.name.namespace.ts'],
			['entity.name.type', 'storage.type.primitive.java'],
			['entity.name.function', 'entity.name.function.js'],
			['variable', 'variable.other.constant.js'],
			['constant.numeric', 'constant.character.escape.js'],
			['string', 'string.regexp.js'],
		] as const;
		for (const [role, scope] of scopes) {
			const expected = theme.resolveScopes([['source.js', role]])?.foreground;
			assert.ok(expected, `The ${role} role must have a curated foreground`);
			assert.equal(theme.resolveScopes([['source.js', scope]])?.foreground?.toString(), expected.toString(), scope);
		}
	});
}
