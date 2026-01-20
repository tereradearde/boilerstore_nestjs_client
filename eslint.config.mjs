import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/quotes": [
        "error",
        "single",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      "no-trailing-spaces": [2, { skipBlankLines: false }],
      "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 1 }],
      "object-curly-spacing": ["error", "always"],
      "comma-spacing": [2, { before: false, after: true }],
      "arrow-spacing": ["error", { before: true, after: true }],
      "space-infix-ops": ["error", { int32Hint: false }],
      "space-after-keywords": "off",
      "keyword-spacing": [2, { before: true, after: true }],
      "react/jsx-indent": [2, 2, { indentLogicalExpressions: true }],
      "arrow-body-style": ["error", "as-needed"],
      "padded-blocks": ["error", "never"],
      semi: ["error", "never"],
      "max-len": ["error", { code: 120 }],
      indent: ["error", 2],
      "react/self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
