'use strict'

process.env.ELOQUENCE_PROJECT_TYPE = 'webpack'

module.exports = {
  root: true,
  extends: 'eloquence',
  rules: {
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
}
