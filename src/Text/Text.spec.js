import React from 'react'
import { render } from '@testing-library/react'

import { Theme } from '../Theme/Theme'
import { elementTests } from '../../test/element-tests'
import { Text } from './Text'

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)
})

describe('Text', () => {
  it('When elementsMap is set in theme, then map is used for Text', () => {
    const { container } = render(
      <Theme theme={{ Text: { elementsMap: { rad: 'section' } } }}>
        <Text variant='rad'>Componentry</Text>
      </Theme>,
    )

    expect(container.firstChild).toContainHTML(
      '<section class="🅲-text rad-variant">Componentry</section>',
    )
  })

  it('When inline is truthy, then a span without a variant class is rendered', () => {
    const { container } = render(<Text inline>span content</Text>)

    expect(container.firstChild).toContainHTML('<span class="🅲-text">span content</span>')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Text /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Text>Componentry</Text>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
