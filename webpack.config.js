/* eslint-env node */
'use strict' // eslint-disable-line
const { resolve } = require('path')
const configs = require('@inspirescript/webpack-configs')
const WebpackMonitor = require('webpack-monitor')

module.exports = env => {
  const base = configs({
    env,
    paths: {
      context: resolve(__dirname),
      babelLoaderInclude: [resolve('src'), resolve('lib')],
      publicPath: env === 'production' ? '/componentry/' : '/'
    }
  })

  base.plugins.unshift(
    new WebpackMonitor({
      launch: true
    })
  )

  // https://github.com/webpack/webpack/issues/5931
  if (env === 'production') base.devtool = 'cheap-module-source-map'

  return base
}
