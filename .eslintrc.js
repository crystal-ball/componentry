'use strict'

const eloquence = require('eslint-config-eloquence')

const configs = eloquence({ target: 'react' })

// Package is allowed to access process.env
configs.globals = { process: false }

// Package does not export prop-types at this time
configs.rules['react/prop-types'] = 'off'

module.exports = configs
