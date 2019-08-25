'use strict'

module.exports = {
  root: true,
  extends: 'eloquence/react',

  // Override the webpack resolver from react config to use the node resolver,
  // The src files don't use any aliasing from webpack
  settings: {
    'import/resolver': 'node',
  },

  rules: {
    // Disable no underscore, library uses them for shadowed props
    'no-underscore-dangle': 'off',
    // Disable prop types checking, project has TS typings for components
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
}
