import React from 'react'
import { render } from '@testing-library/react'

import Typography, { setTypographyVariantElements } from './Typography'
import elementTests from '../../test/element-tests'

describe('<Typography/>', () => {
  // Basic library element test suite
  elementTests(Typography)
})

describe('setTypographyVariantElements()', () => {
  test('When used, then variants are used for Typogrpahy', () => {
    setTypographyVariantElements({ rad: 'section' })
    const { container } = render(<Typography variant='rad'>Componentry</Typography>)
    expect(container.firstChild).toContainHTML(
      '<section class="rad">Componentry</section>',
    )
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
