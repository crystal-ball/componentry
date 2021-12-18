'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  reactOptions: {
    fastRefresh: true,
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        // Override postcss version to use v8 for Tailwind
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@geometricpanda/storybook-addon-badges',
  ],
  stories: ['../src/**/*.stories.@(js|mdx)'],

  webpackFinal: async (config) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      exclude: /node_modules/,
    })

    config.plugins.push(new MiniCssExtractPlugin())

    // Return the altered config
    return config
  },
}
