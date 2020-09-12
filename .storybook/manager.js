import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

addons.setConfig({
  // --- Customize theme of Storybook to be hecka rad
  theme: create({
    base: 'dark',
    brandTitle: 'Componentry',
    brandImage: null,
  }),
})
