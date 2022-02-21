'use strict'

module.exports = {
  extends: 'eloquence/react',

  rules: {
    // Componentry uses empty interfaces for type configurations
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },

  overrides: [
    {
      files: ['src/plugin-babel/**/*', 'src/test/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
