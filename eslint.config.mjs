import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { files: ["**/*.{mjs,ts,tsx}"] },
  { ignores: [".github/", "node_modules/", ".next/"] },
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      import: pluginImport,
      tailwindcss: tailwind,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs["flat/recommended"],
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Custom Rules (Not covered by plugins)
      "spaced-comment": ["error", "always", { exceptions: ["-", "+"] }],
      "key-spacing": ["error", { beforeColon: false, afterColon: true }],
      "no-useless-rename": "error",

      // Import/Export Rules
      "import/no-mutable-exports": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "{next,next/**}",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: [],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/newline-after-import": "error",

      // Whitespace and Punctuation (Style Rules)
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
      "space-before-function-paren": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "computed-property-spacing": ["error", "never"],

      // Naming Conventions
      "no-underscore-dangle": ["error", { allow: ["_id", "__dirname"] }],

      // Unused Variables
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { enforceForJSX: true },
      ],

      "tailwindcss/classnames-order": "error",
    },
  },
];

export default config;
