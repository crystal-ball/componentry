'use strict';

module.exports = {
  root: true,
  extends: '@crystal-ball/eloquence',
  env: {
    mocha: true
  },
  rules: {
    'no-param-reassign': 0, // Very useful for extending/overwriting Component props
    'react/jsx-indent': 0 // Prettier ternary not disabled
  }
};
