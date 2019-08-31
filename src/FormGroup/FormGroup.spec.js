import React from 'react'
import { render } from '@testing-library/react'

import FormGroup from './FormGroup'
import elementTests from '../../test/element-tests'

describe('<FormGroup />', () => {
  // Basic library element test suite
  elementTests(FormGroup)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<FormGroup /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(<FormGroup />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
