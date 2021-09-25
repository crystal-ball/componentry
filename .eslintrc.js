'use strict'

module.exports = {
  extends: 'eloquence/react',

  rules: {
    // Package does not export prop-types at this time
    'react/prop-types': 'off',
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
      // Overrides for plugin test input code
      files: ['src/plugin/**/code.js'],
      rules: {
        // Use modern React imports
        'react/react-in-jsx-scope': 'off',
        // Test imports don't need to be resolved
        'import/no-unresolved': 'off',
      },
    },
  ],
}
