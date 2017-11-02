import React from 'react'
import renderer from 'react-test-renderer'

import State from './index'

import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'
import setupActiveContext from '../utils-test/setup-active-context'

describe('<State />', () => {
  activationTestSuite(State)
  elementTests(State)
  elementTests(State.Trigger, setupActiveContext())
  elementTests(State.Content, setupActiveContext())
})

// Snapshots
// ---------------------------------------------------------------------------
it('renders correctly', () => {
  const tree = renderer
    .create(
      <State>
        <State.Trigger>Trigger</State.Trigger>
        <State.Content>Content</State.Content>
      </State>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
