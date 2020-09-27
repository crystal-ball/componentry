import { Meta } from '@storybook/addon-docs/blocks'

import { setupOutlineHandlers } from '../src'

// --- Load Componentry styles ---

import './storybook.scss'
import { DocsTitle } from './components/DocsTitle'

// --- Setup global decorators --

setupOutlineHandlers()

export const parameters = {
  docs: {
    components: {
      DocsTitle,
      Meta,
    },
  },
  layout: 'centered',
  // --- Options
  options: {
    storySort: {
      order: ['Componentry', 'Components', 'Utility Classes'],
    },
  },
}
