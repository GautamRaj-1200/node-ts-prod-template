// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  ignores: ["commitlint.config.ts"],
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    quotes: ["error", "single", { allowTemplateLiterals: true }],
  },
  files: ["**/*.ts"],
  extends: [eslint.configs.recommended, tseslint.configs.recommended],
});
