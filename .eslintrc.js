'use strict'

module.exports = {
  extends: 'eloquence/react',

  rules: {
    // Package does not export prop-types at this time
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    // Componentry doesn't use the JSX transform yet
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',
    // It's not private, but __ is a good way to signal something is internal only
    'no-underscore-dangle': 'off',

    // bug: https://github.com/import-js/eslint-plugin-import/issues/2187
    'import/named': 'off',
  },

  overrides: [
    {
      files: ['src/plugin/**/*', 'src/test/**/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['.babelrc.js'],
      parserOptions: {
        sourceType: 'script',
      },

      env: { node: true },
    },
  ],
}
