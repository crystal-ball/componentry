import React, { createElement } from 'react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { Meta } from '@storybook/addon-docs/blocks'
import { themes } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'

// --- Load Componentry and Storybook styles ---

import './storybook.scss'
import DocsTitle from './components/DocsTitle'

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

// Override the Styled Components that the MDX provider uses for standard DOM
// elements so that we can use Componentry styles classNames.
addParameters({
  docs: {
    components: {
      DocsTitle,
      Meta,
      div: props => createElement('div', props),
      span: props => createElement('span', props),
      h1: props => createElement('h1', props),
      h2: props => createElement('h2', props),
      h3: props => createElement('h3', props),
      h4: props => createElement('h4', props),
      p: props => createElement('p', props),
      hr: props => createElement('hr', props),
      a: props => createElement('a', props),
      table: props => createElement('table', props),
      thead: props => createElement('thead', props),
      tbody: props => createElement('tbody', props),
      tr: props => createElement('tr', props),
      th: props => createElement('th', props),
      td: props => createElement('td', props),
    },
  },
})

// Enable knobs addon in all stories
addDecorator(withKnobs)

// Wrap all stories in a screen wrapper
addDecorator(storyFn => <div className='storybook-screen'>{storyFn()}</div>)

// --- Require all stories in /src 🎉 --

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
