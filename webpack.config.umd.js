/* eslint-disable import/no-extraneous-dependencies */
'use strict' // eslint-disable-line
const { resolve } = require('path')
const MinifyPlugin = require('babel-minify-webpack-plugin')

/**
 * Webpack configs for generating a UMD distributable of library.
 * See https://webpack.js.org/guides/author-libraries/ for basics
 */
module.exports = {
  entry: './lib/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'componentry.js',
    library: 'componentry',
    libraryTarget: 'umd'
  },
  externals: ['react', 'prop-types'],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [new MinifyPlugin()]
}
