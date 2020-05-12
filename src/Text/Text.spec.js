import React from 'react'
import { render } from '@testing-library/react'

import Text from './Text'
import ThemeProvider from '../Theme/Theme'
import elementTests from '../../test/element-tests'

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
      '<section class="✨rad">Componentry</section>',
    )
  })

  test('When inline is truthy, then a span without a variant class is rendered', () => {
    const { container } = render(<Text inline>span content</Text>)
    expect(container.firstChild).toContainHTML('<span class="">span content</span>')
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
