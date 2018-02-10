import React from 'react'
import renderer from 'react-test-renderer'

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
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Active>
        <Active.Trigger>Trigger</Active.Trigger>
        <Active.Content>Content</Active.Content>
      </Active>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
