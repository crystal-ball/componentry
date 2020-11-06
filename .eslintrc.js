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
  },
})

// Package is allowed to access process.env
configs.globals = { process: false }

module.exports = configs
