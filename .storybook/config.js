import React from 'react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'

// --- Load Componentry and Storybook styles ---

import './storybook.scss'

// --- Setup global decorators --

// Customize dispaly of Storybook to be hecka rad
addParameters({
  options: {
    // Show addon panel by default on right
    showPanel: true,
    panelPosition: 'right',
    // Custom theming
    theme: {
      ...themes.light,
      brandTitle: 'Componentry',
      brandImage: null,
    },
  },
})

// Enable knobs addon in all stories
addDecorator(withKnobs)

// Wrap all stories in a screen wrapper
addDecorator(storyFn => <div className='storybook-screen'>{storyFn()}</div>)

// --- Require all stories in /src 🎉 --

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
