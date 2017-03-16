'use strict';
const eloquence = require('@dhedgecock/eloquence');
const rules = Object.assign({}, eloquence.core, eloquence.react);

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [ 'react' ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  rules: rules
}
