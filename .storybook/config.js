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
    // Show addon panel by default
    showPanel: true,
    // Show addon panel at bottom
    panelPosition: 'bottom',
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

const stories = require.context('../src', true, /.stories.js$/)
function loadStories() {
  // Update app welcome story, which is the last story req'd, to be first displayed
  const orderedStories = stories.keys()
  orderedStories.unshift(orderedStories.pop())
  orderedStories.unshift(orderedStories.pop())
  orderedStories.forEach(filename => stories(filename))
}
configure(loadStories, module)
