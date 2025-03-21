// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
export default tseslint.config({
    ignores: ['commitlint.config.ts'],
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname
        }
    },
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, tseslint.configs.recommended, eslintConfigPrettier],
    rules: {
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
})

