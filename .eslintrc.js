'use strict'

const eloquence = require('eslint-config-eloquence')

const configs = eloquence({
  enableMDX: true,
  ignorePatterns: ['!.*', 'types/**/*'],
  target: 'react',
  rules: {
    // Package does not export prop-types at this time
    'react/prop-types': 'off',
  },
})

// Package is allowed to access process.env
configs.globals = { process: false }

module.exports = configs
