import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

// Customize dispaly of Storybook to be hecka rad
addons.setConfig({
  // Show addon panel by default on right
  showPanel: true,
  panelPosition: 'right',
  theme: create({
    base: 'dark',
    brandTitle: 'Componentry',
    brandImage: null,
  }),
})
