'use strict'

module.exports = {
  root: true,
  extends: '@crystal-ball/eloquence/web',
  rules: {
    // Much of the library props are valid as undefined, allow not setting defaults
    'react/require-default-props': 'off'
  }
}
