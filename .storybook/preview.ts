import type { Preview } from '@storybook/react'

// --- BASE STYLES ---

import './storybook-styles.css'

// --- STORYBOOK DEFAULTS ---
const preview: Preview = {
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
  },
  // Enable auto-generated documentation for all stories
  tags: ['autodocs'],
}
export default preview
