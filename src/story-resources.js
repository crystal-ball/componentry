/* eslint-disable react/no-multi-comp, import/no-extraneous-dependencies */
import React, { createElement } from 'react'
import { MDXProvider } from '@mdx-js/react'

/**
 * Use an MDXProvider to override the Styled Components that the MDX provider uses for standard DOM
 * elements so that we can use Componentry styles classNames.
 */

const components = {
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
}

export function ElementsProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'background',
  'foreground',
]

export const grayscale = [100, 200, 300, 400, 500, 600, 700, 800, 900]

export const sizes = ['sm', 'lg']

export const alignments = [
  'top',
  'middle',
  'bottom',
  'baseline',
  'text-top',
  'text-bottom',
  'super',
  'sub',
]
