import React from 'react'
import renderer from 'react-test-renderer'

import State from './index'

import activationTestSuite from '../utils-test/activation-tests'

// State Component Tests
// ---------------------------------------------------------------------------

describe('<State />', () => {
  activationTestSuite(State)
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
