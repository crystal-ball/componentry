import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
  // --- Customize theme of Storybook to be hecka rad
  theme: create({
    base: 'dark',
    brandTitle: 'Componentry',
    brandImage: undefined,

    fontCode: "'Fira Code', monospace",
  }),
})
