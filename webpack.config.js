/* eslint-env node */
'use strict' // eslint-disable-line
const { resolve } = require('path')
const webpackConfigs = require('@inspirescript/webpack-configs')

module.exports = env => {
  const config = webpackConfigs({
    env,
    paths: {
      context: resolve(__dirname),
      babelLoaderInclude: [resolve('src'), resolve('lib')],
      publicPath: env === 'production' ? '/componentry/' : '/',
    },
  })

  // Default aliases for easy importing of common modules
  config.resolve.alias.UNIVERSAL = resolve('src', 'components', 'universal')
  config.resolve.alias.GUIDES = resolve('guides')
  // Add an alias to the /lib for use in the documentation application
  config.resolve.alias.componentry = resolve('lib')

  /*
   * Make any changes to the base webpack configs for your application, eg:
   *
   * config.module.rules.push({ custom loader... })
   */

  return config
}
