import React from 'react'
import { render } from 'enzyme'

import Active from './Active'

import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'
import setupActiveContext from '../utils-test/setup-active-context'

describe('<Active />', () => {
  activationTestSuite(Active)
  elementTests(Active)
  elementTests(Active.Trigger, setupActiveContext())
  elementTests(Active.Content, setupActiveContext())
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Active /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(
      <Active>
        <Active.Trigger>Trigger</Active.Trigger>
        <Active.Content>Content</Active.Content>
      </Active>,
    )

    expect(tree).toMatchSnapshot()
  })
})
