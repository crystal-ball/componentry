/* eslint-env node */
'use strict' // eslint-disable-line
const { resolve } = require('path')
const webpackConfigs = require('@inspirescript/webpack-configs')

module.exports = env => {
  const config = webpackConfigs({
    env,
    paths: {
      context: resolve(__dirname),
      // Set the source directory for webpack app to the demo app
      appSrc: resolve('demo'),
      // Include demo and source files in babel transpile
      babelLoaderInclude: [resolve('src'), resolve('demo')],
      // In production use /componentry/ publicPath for Github pages
      publicPath: env === 'production' ? '/componentry/' : '/',
    },
  })

  /*
   * Make any changes to the base webpack configs for your application
   */
  // Default aliases for easy importing of common modules
  config.resolve.alias.GUIDES = resolve('guides')
  // Add an alias to the /src for use in the demo application
  config.resolve.alias.componentry = resolve('src')

  return config
}
