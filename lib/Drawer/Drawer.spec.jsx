import React from 'react'
import renderer from 'react-test-renderer'

import Drawer from './index'
import activationTestSuite from '../utils-test/activation-tests'

describe('<Drawer />', () => {
  activationTestSuite(Drawer)
})

// Snapshots
// ---------------------------------------------------------------------------
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Drawer>
        <Drawer.Trigger>Trigger</Drawer.Trigger>
        <Drawer.Content>Content</Drawer.Content>
      </Drawer>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
