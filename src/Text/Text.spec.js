import React from 'react'
import { render } from '@testing-library/react'

import ThemeProvider from '../Theme/Theme'
import elementTests from '../../test/element-tests'
import Text from './Text'

describe('<Text/>', () => {
  // Basic library element test suite
  elementTests(Text)
})

describe('Text', () => {
  test('When variantsElements is set in theme, then variants are used for Text', () => {
    const { container } = render(
      <ThemeProvider theme={{ Text: { variantsElements: { rad: 'section' } } }}>
        <Text variant='rad'>Componentry</Text>
      </ThemeProvider>,
    )
    expect(container.firstChild).toContainHTML(
      '<section class="🅲-text 🅲-rad">Componentry</section>',
    )
  })

  test('When inline is truthy, then a span without a variant class is rendered', () => {
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
