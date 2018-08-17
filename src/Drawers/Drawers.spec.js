import React from 'react'
import { render } from 'enzyme'

import { Drawer } from './Drawers'
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
describe('<Drawer /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(
      <Drawer>
        <Drawer.Trigger>Trigger</Drawer.Trigger>
        <Drawer.Content>Content</Drawer.Content>
      </Drawer>,
    )

    expect(tree).toMatchSnapshot()
  })
})
