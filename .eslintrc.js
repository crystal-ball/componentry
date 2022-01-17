'use strict'

module.exports = {
  extends: 'eloquence/react',

  rules: {
    // Componentry uses empty interfaces for type configurations
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Props my be defined for documentation purposes
    'react/no-unused-prop-types': 'off',

    // Componentry doesn't use the JSX transform yet
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',

    // It's not private, but __ is a good way to signal something is internal only
    'no-underscore-dangle': 'off',
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
