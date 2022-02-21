'use strict'

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
  stories: ['../src/**/*.stories.@(js|mdx)', '../docs/**/*.stories.mdx'],
}
