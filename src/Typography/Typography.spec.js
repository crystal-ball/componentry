import React from 'react'
import { render } from '@testing-library/react'

import Typography from './Typography'
import ThemeProvider from '../Theme/Theme'
import elementTests from '../../test/element-tests'

describe('<Typography/>', () => {
  // Basic library element test suite
  elementTests(Typography)
})

describe('Typography', () => {
  test('When variantsElements is set in theme, then variants are used for Typogrpahy', () => {
    const { container } = render(
      <ThemeProvider theme={{ Typography: { variantsElements: { rad: 'section' } } }}>
        <Typography variant='rad'>Componentry</Typography>
      </ThemeProvider>,
    )
    expect(container.firstChild).toContainHTML(
      '<section class="✨rad">Componentry</section>',
    )
  })

  test('When inline is truthy, then a span without a variant class is rendered', () => {
    const { container } = render(<Typography inline>span content</Typography>)
    expect(container.firstChild).toContainHTML('<span class="">span content</span>')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Typography /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Typography>Componentry</Typography>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
