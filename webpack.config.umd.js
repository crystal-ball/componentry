'use strict' // eslint-disable-line
const { resolve } = require('path')

/**
 * Webpack configs for generating a UMD distributable of library.
 * See https://webpack.js.org/guides/author-libraries/ for basics
 */
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'componentry.js',
    library: 'componentry',
    libraryTarget: 'umd',
  },
  externals: ['react', 'prop-types'],
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
}
