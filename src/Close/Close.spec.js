import React from 'react'
import { cleanup, render } from '@testing-library/react'

import Close from './Close'
import elementTests from '../utils-test/element-tests'

describe('<Close />', () => {
  afterEach(cleanup)

  // Basic library element test suite
  elementTests(Close)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Close /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<Close />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
