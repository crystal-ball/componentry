'use strict'

module.exports = {
  root: true,
  extends: '@crystal-ball/eloquence/webpack',
  env: { mocha: true },
  rules: {
    'no-param-reassign': 0 // Very useful for extending Component props
  }
}
