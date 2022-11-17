'use strict'

module.exports = {
  extends: 'eloquence/react',

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
      files: ['src/plugin-babel/**/*', 'src/test/**/*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
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
