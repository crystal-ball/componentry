import React from 'react'
import { render, screen } from '@testing-library/react'

import { Theme } from '../Theme/Theme'
import { elementTests } from '../test/element-tests'
import { Text } from './Text'

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)
})

describe('Text', () => {
  it('When elementsMap is set in theme, then map is used for Text', () => {
    render(
      <Theme theme={{ Text: { elementsMap: { rad: 'section' } } }}>
        <Text variant='rad'>Componentry</Text>
      </Theme>,
    )

    expect(screen.getByText('Componentry')).toContainHTML(
      '<section class="🅲Text-base 🅲Text-rad">Componentry</section>',
    )
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Text /> snapshots', () => {
  it('renders correctly', () => {
    render(<Text>Componentry</Text>)

    expect(screen.getByText('Componentry')).toMatchSnapshot()
  })
})
