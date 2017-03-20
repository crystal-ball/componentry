'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // This makes the bundle appear split into separate modules in the devtools.
  // We don't use source maps here because they can be confusing:
  // https://github.com/facebookincubator/create-react-app/issues/343#issuecomment-237241875
  // You may want 'cheap-module-source-map' instead if you prefer source maps.
  devtool: 'eval',

  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true // only errors & warns on hot reload
  }
};
