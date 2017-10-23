'use strict'

module.exports = {
  root: true,
  extends: '@crystal-ball/eloquence/web',
  rules: {
    // TODO: switch to Flow
    'react/require-default-props': 'off',
    'no-use-before-define': 'off'
  }
}
