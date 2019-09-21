import React from 'react'
import { render } from '@testing-library/react'

import Heading from './Heading'
import elementTests from '../../test/element-tests'

describe('<Heading/>', () => {
  // Basic library element test suite
  elementTests(Heading)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Heading /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Heading>Heading</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
