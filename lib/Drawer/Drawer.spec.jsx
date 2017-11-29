import React from 'react'
import renderer from 'react-test-renderer'

import { Drawer } from './Drawer'
import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'
import setupActiveContext from '../utils-test/setup-active-context'

describe('<Drawer />', () => {
  activationTestSuite(Drawer)
  elementTests(Drawer)
  elementTests(Drawer.Trigger, setupActiveContext())
  elementTests(Drawer.Content, setupActiveContext())
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
