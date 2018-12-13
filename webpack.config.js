'use strict' // eslint-disable-line
const { resolve } = require('path')
const webpackBase = require('@crystal-ball/webpack-base')
const packageJSON = require('./package.json')

module.exports = () => {
  const { configs } = webpackBase({
    envVars: {
      PACKAGE_VERSION: packageJSON.version,
    },
    paths: {
      // Set the source directory for webpack app to the demo app
      appSrc: resolve('demo'),
      // Include demo and source files in babel transpile
      jsLoaderPaths: [resolve('src'), resolve('demo')],
      // In production use /componentry/ publicPath for Github pages
      publicPath: process.env.NODE_ENV === 'production' ? '/componentry/' : '/',
    },
  })

  // --- 🔮 Markdown loader
  // Turn plain text into a magic experience!
  configs.module.rules.push({
    test: /\.md$/,
    use: [
      // Returned JSX must be transpiled to JS
      { loader: 'babel-loader' },
      // Convert markdown to a component with content as JSX
      { loader: '@inspirescript/magic-markdown-loader' },
    ],
  })

  /*
   * Make any changes to the base webpack configs for your application
   */
  // Default aliases for easy importing of common modules
  configs.resolve.alias.GUIDES = resolve('guides')
  // Add an alias to the /src for use in the demo application
  configs.resolve.alias.componentry = resolve('src')

  return configs
}
