/* eslint-env node */
'use strict' // eslint-disable-line
const { resolve } = require('path')
const configs = require('@inspirescript/webpack-configs')

module.exports = env => {
  const base = configs({
    env,
    paths: {
      context: resolve(__dirname),
      babelLoaderInclude: [resolve('src'), resolve('lib')],
      publicPath: env === 'production' ? '/componentry/' : '/'
    }
  })

  // https://github.com/webpack/webpack/issues/5931
  if (env === 'production') base.devtool = 'none'

  return base
}
