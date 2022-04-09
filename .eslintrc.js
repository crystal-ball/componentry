'use strict'

module.exports = {
  extends: 'eloquence/react',

  rules: {
    // Componentry uses empty interfaces frequently for module augmentation
    '@typescript-eslint/no-empty-interface': 'off',
  },

  overrides: [
    {
      files: ['src/plugin-babel/**/*', 'src/test/**/*'],
      rules: {
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
