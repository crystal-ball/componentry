// --- BASE STYLES ---

import './styles-componentry.scss'
import './styles-tailwind.css'

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
