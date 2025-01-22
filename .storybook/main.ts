import { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',

  stories: ['../src/**/*.mdx', '../src/**/*.stories.tsx', '../docs/**/*.mdx'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
  ],

  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },

  docs: {},
}

export default config
