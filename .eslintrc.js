'use strict'

const eloquence = require('eslint-config-eloquence')

const configs = eloquence({
  enableMDX: true,
  ignorePatterns: ['!.*', 'types/**/*'],
  target: 'react',
  rules: {
    // Package does not export prop-types at this time
    'react/prop-types': 'off',
    // Componentry doesn't use the JSX transform yet
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'error',
    // It's not private, but __ is a good way to signal something is internal only
    'no-underscore-dangle': 'off',
  },
})

// Package is allowed to access process.env
configs.globals = { process: false }

configs.overrides.push({
  // Overrides for plugin test input code
  files: ['src/plugin/**/code.js'],
  rules: {
    // Use modern React imports
    'react/react-in-jsx-scope': 'off',
    // Test imports don't need to be resolved
    'import/no-unresolved': 'off',
  },
})

module.exports = configs
