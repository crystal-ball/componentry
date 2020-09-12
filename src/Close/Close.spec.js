import React from 'react'
import { render } from '@testing-library/react'

import { elementTests } from '../../test/element-tests'
import { Close } from './Close'

describe('<Close />', () => {
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
