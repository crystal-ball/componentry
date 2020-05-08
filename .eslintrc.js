'use strict'

process.env.ELOQUENCE_PROJECT_TYPE = 'webpack'

module.exports = {
  root: true,
  extends: 'eloquence',
  rules: {
    // ESLint doesn't recognize the props and context merge/spread pattern used
    // throughout the library
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
  },
}
