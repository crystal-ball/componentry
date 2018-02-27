import React from 'react'
import renderer from 'react-test-renderer'

import Tooltip from './Tooltip'
// import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'
import setupActiveContext from '../utils-test/setup-active-context'

describe('<Tooltip />', () => {
  // Basic library activation test suite
  // TODO: Fix me
  // activationTestSuite(Popover)
  // Basic library element test suite
  elementTests(Tooltip)
  elementTests(Tooltip.Trigger, setupActiveContext())
  elementTests(Tooltip.Content, setupActiveContext())
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Drawer /> snapshots', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Tooltip>
          <Tooltip.Trigger>Trigger</Tooltip.Trigger>
          <Tooltip.Content>Content</Tooltip.Content>
        </Tooltip>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
