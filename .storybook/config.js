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
addDecorator(storyFn => <div className="storybook-screen">{storyFn()}</div>)

// --- Require all stories in /src 🎉 --

const req = require.context('../src', true, /.stories.js$/)
function loadStories() {
  require('./welcome')
  req.keys().forEach(file => req(file))
}
configure(loadStories, module)
