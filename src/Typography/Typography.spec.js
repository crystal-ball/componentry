import React from 'react'
import { render } from '@testing-library/react'

import Typography from './Typography'
import elementTests from '../../test/element-tests'

describe('<Typography/>', () => {
  // Basic library element test suite
  elementTests(Typography)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Typography /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Typography>Componentry</Typography>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
