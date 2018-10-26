'use strict' // eslint-disable-line
const { resolve } = require('path')
const webpackBase = require('@crystal-ball/webpack-base')
const { EnvironmentPlugin } = require('webpack')
const packageJSON = require('./package.json')

module.exports = () => {
  const config = webpackBase({
    paths: {
      // Set the source directory for webpack app to the demo app
      appSrc: resolve('demo'),
      // Include demo and source files in babel transpile
      babelLoaderInclude: [resolve('src'), resolve('demo')],
      // In production use /componentry/ publicPath for Github pages
      publicPath: process.env.NODE_ENV === 'production' ? '/componentry/' : '/',
    },
  })

  // --- 🔮 Markdown loader
  // Turn plain text into a magic experience!
  config.module.rules.push({
    test: /\.md$/,
    use: [
      // Returned JSX must be transpiled to JS
      { loader: 'babel-loader' },
      // Convert markdown to a component with content as JSX
      { loader: '@inspirescript/magic-markdown-loader' },
    ],
  })

  config.plugins.push(new EnvironmentPlugin({ PACKAGE_VERSION: packageJSON.version }))

  /*
   * Make any changes to the base webpack configs for your application
   */
  // Default aliases for easy importing of common modules
  config.resolve.alias.GUIDES = resolve('guides')
  // Add an alias to the /src for use in the demo application
  config.resolve.alias.componentry = resolve('src')

  return config
}
