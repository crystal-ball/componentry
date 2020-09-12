import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

// Customize dispaly of Storybook to be hecka rad
addons.setConfig({
  panelPosition: 'right',
  // Show addon panel by default on right
  showPanel: true,
  // Show all the nav options
  showRoots: true,
  // --- Theme
  theme: create({
    base: 'dark',
    brandTitle: 'Componentry',
    brandImage: null,
  }),
})
