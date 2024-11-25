import globals from 'globals';
import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { config, configs, plugin } from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

const compat = new FlatCompat();

export default config(
  {
    ignores: ['node_modules', '.cache', 'build', 'public/build', '.env', 'next-env.d.ts', '.next'],
  },
  {
    ...eslint.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ...reactRecommended.languageOptions,
      ...reactJSXRuntime.languageOptions,
    },
    plugins: {
      react: reactPlugin,
    },
    extends: [...compat.config(reactHooksPlugin.configs.recommended)],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
      },
    },
    ...reactRecommended,
    ...reactJSXRuntime,
    rules: {
      ...reactRecommended.rules,
      ...reactJSXRuntime.rules,

      'key-spacing': ['error', { beforeColon: false, afterColon: true }],

      'react/self-closing-comp': ['error', { component: true, html: false }],
      'react/jsx-curly-brace-presence': 'error',
      /* // Custom Rules (Not covered by plugins)
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
      'no-useless-rename': 'error',

      // Whitespace and Punctuation (Style Rules)
      'no-trailing-spaces': 'error',
      'no-multi-spaces': ['error', { exceptions: { ArrayExpression: true } }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      'space-before-function-paren': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'], */
    },
  },
  ...tailwindPlugin.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      ['@typescript-eslint']: plugin,
      import: importPlugin,
      tailwindcss: tailwindPlugin,
    },
    extends: [
      ...configs.recommendedTypeChecked,
      //...configs.stylisticTypeChecked,
      ...compat.config(importPlugin.configs.recommended),
      ...compat.config(importPlugin.configs.typescript),
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/internal-regex': '^@/',
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      // Import/Export Rules
      'import/no-mutable-exports': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{next,next/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '{@/**,./**}',
              group: 'parent',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external', 'object'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/newline-after-import': 'error',
      /* 'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
      ],*/

      'tailwindcss/classnames-order': ['error'],
    },
  },
  {
    files: ['eslint.config.mjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  eslintConfigPrettier,
);

/* const custom = {
  // Custom Rules (Not covered by plugins)
  'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'no-useless-rename': 'error',

  // Whitespace and Punctuation (Style Rules)
  'no-trailing-spaces': 'error',
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
  'space-before-function-paren': ['error', 'never'],
  'space-in-parens': ['error', 'never'],
  'array-bracket-spacing': ['error', 'never'],
  'object-curly-spacing': ['error', 'always'],
  'func-call-spacing': ['error', 'never'],
  'computed-property-spacing': ['error', 'never'],

  // Naming Conventions
  'no-underscore-dangle': ['error', { allow: ['_id', '__dirname'] }],

  // Unused Variables
  //'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': ['warn'],
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { enforceForJSX: true },
  ],

}; */
