'use strict'

module.exports = {
  framework: {
    name: '@storybook/react-webpack5',

    options: {
      fastRefresh: true,
    },
  },

  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ],
      },
    },
  ],

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },
}
