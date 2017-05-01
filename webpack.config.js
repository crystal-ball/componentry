'use strict';
const { resolve } = require('path');
const configs = require('@inspire-script/webpack-configs');

module.exports = env => {
  return configs({
    env,
    paths: {
      appIndexJs: resolve('demo/index.js'),
      babelLoaderInclude: [resolve('src'), resolve('demo')],
    },
  });
};
