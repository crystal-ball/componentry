import React from 'react'
import renderer from 'react-test-renderer'

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
    const tree = renderer.create(<Close />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
