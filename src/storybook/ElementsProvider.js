/* eslint-disable react/no-multi-comp, import/no-extraneous-dependencies */
import React, { createElement } from 'react'
import { MDXProvider } from '@mdx-js/react'

/**
 * Use an MDXProvider to override the Styled Components that the MDX provider uses for standard DOM
 * elements so that we can use Componentry styles classNames.
 */

const components = {
  h1: props => createElement('h1', props),
  h2: props => createElement('h2', props),
  h3: props => createElement('h3', props),
  h4: props => createElement('h4', props),
  p: props => createElement('p', props),
  hr: props => createElement('hr', props),
  div: props => createElement('div', props),
  a: props => createElement('a', props),
}

export default function ElementsProvider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
