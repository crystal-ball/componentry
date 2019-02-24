import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'

// --- Setup global decorators

// Customize dispaly of Storybook to be hecka rad
addDecorator(
  withOptions({
    name: 'Componentry',
  }),
)

// Enable knobs addon in all stories
addDecorator(withKnobs)

// --- Require all stories in /src 🎉
const stories = require.context('../src', true, /.stories.js$/)
function loadStories() {
  const orderedStories = stories.keys()
  orderedStories.unshift(orderedStories.pop())
  orderedStories.forEach(filename => stories(filename))
}
configure(loadStories, module)
