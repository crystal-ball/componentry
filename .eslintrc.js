'use strict'

module.exports = {
  extends: ['eloquence/react', 'plugin:storybook/recommended'],

  rules: {
    // Link and Button work for either
    'jsx-a11y/anchor-is-valid': 'off',
    // If a prop is defined it's supposed to be there 😁
    'react/no-unused-prop-types': 'off',
    // Using `{}` is helpful for component prop types
    '@typescript-eslint/ban-types': 'off',
    // Componentry uses empty interfaces frequently for module augmentation
    '@typescript-eslint/no-empty-interface': 'off',
  },

  overrides: [
    {
      files: ['src/plugin-babel/**/*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['src/test/**/*', 'src/**/*.spec.js'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jest/max-expects': 'off',
        'jest/no-hooks': 'off',
        'jest/require-hook': 'off',
      },
    },
    {
      files: ['src/**/*.stories.tsx'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['tsconfig.json'],
      },
    },
  ],
}
