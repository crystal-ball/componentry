import js from '@eslint/js'
import ts from 'typescript-eslint'

import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

export default ts.config(
  {
    ignores: [
      // Babel plugin fixtures aren't fully valid
      'src/plugin-babel/__fixtures__',

      // Deps
      'node_modules',

      // Build/Compile output
      'storybook-static',
      'dist',
      'types',
    ],
  },
  js.configs.recommended,
  ts.configs.recommended,
  ts.configs.recommendedTypeChecked,

  /** Required for type checking */
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // ts.configs.strictTypeChecked,
  // ts.configs.stylisticTypeChecked,

  /** Disable TS rules outside TS context */
  {
    files: ['**/*.js', '**/*.mjs'],
    extends: [ts.configs.disableTypeChecked],
  },

  /** Disable rules related to using any until types don't use any */
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
    },
  },
  {
    rules: {
      // Componentry uses empty interfaces frequently for module augmentation
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
    },
  },

  reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  reactPlugin.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: reactHooksPlugin.configs.recommended.rules,
  },

  jsxA11yPlugin.flatConfigs.recommended,
)
