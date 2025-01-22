import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  // --- Customize theme of Storybook to be hecka rad
  theme: create({
    base: 'dark',
    brandTitle: 'Componentry',
    brandImage: undefined,

    fontCode: "'Fira Code', monospace",
  }),
})
