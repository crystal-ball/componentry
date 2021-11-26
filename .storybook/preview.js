// --- Load Componentry styles ---

import './storybook.scss'

// --- Setup global decorators --

export const parameters = {
  layout: 'centered',
  // --- Options
  options: {
    storySort: {
      order: ['Componentry', 'Components'],
    },
  },
}
