'use strict'

module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
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
  ],
  stories: ['../src/**/*.stories.@(tsx|mdx)', '../docs/**/*.stories.mdx'],
}
