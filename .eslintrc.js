'use strict'

module.exports = {
  root: true,
  extends: 'eloquence/webpack',
  rules: {
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
}
