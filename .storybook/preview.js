// --- Load Componentry styles ---

import './storybook.scss'

// --- Setup global decorators --

export const parameters = {
  layout: 'centered',
  viewMode: 'docs',
  // --- Options
  options: {
    storySort: {
      order: ['Componentry', 'Components'],
    },
  },
}
