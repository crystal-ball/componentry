import React from 'react'
import { render } from '@testing-library/react'

import Header from './Header'
import elementTests from '../../test/element-tests'

describe('<Header/>', () => {
  // Basic library element test suite
  elementTests(Header)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Header /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Header>Header</Header>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
