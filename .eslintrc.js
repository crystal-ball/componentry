'use strict'

module.exports = {
  root: true,
  extends: '@crystal-ball/eloquence/javascript',
  rules: {
    'no-param-reassign': 0 // Very useful for extending/overwriting Component props
  },
  env: {
    mocha: true
  }
}
