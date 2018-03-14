'use strict'

module.exports = {
  root: true,
  extends: '@crystal-ball/eloquence/web',
  rules: {
    // ESLint doesn't recognize the props and context merge/spread pattern used
    // throughout the library
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
  },
}
