import { setupOutlineHandlers } from '../src'

// --- Load Componentry styles ---

import './storybook.scss'

// --- Setup global decorators --

setupOutlineHandlers()

export const parameters = {
  layout: 'centered',
  // --- Options
  options: {
    storySort: {
      order: ['Componentry', 'Components', 'Utility Classes'],
    },
  },
}
