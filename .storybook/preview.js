// --- BASE STYLES ---

import './styles-componentry.scss'
import './storybook-styles.css'

// --- STORYBOOK DEFAULTS ---
export const parameters = {
  layout: 'centered',
  viewMode: 'docs',
  options: {
    storySort: {
      order: ['Componentry', 'Components'],
    },
  },
}
