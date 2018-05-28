import React from 'react'
import { render } from 'enzyme'

import Close from './Close'
import elementTests from '../utils-test/element-tests'

describe('<Close />', () => {
  // Basic library element test suite
  elementTests(Close)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Close /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(<Close />)
    expect(tree).toMatchSnapshot()
  })
})
