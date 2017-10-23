/* eslint-env node */
'use strict' // eslint-disable-line
const { resolve } = require('path')
const configs = require('@inspirescript/webpack-configs')

module.exports = env =>
  configs({
    env,
    paths: {
      context: resolve(__dirname),
      babelLoaderInclude: [resolve('src'), resolve('lib')],
      publicPath: env === 'production' ? '/componentry/' : '/'
    }
  })
