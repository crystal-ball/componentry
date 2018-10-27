import React from 'react'
import { render } from 'enzyme'

import Tooltip from './Tooltip'
import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'

describe('<Tooltip />', () => {
  // Basic library activation test suite
  // TODO: Fix me
  activationTestSuite(Tooltip, { name: 'tooltip' })
  // Basic library element test suite
  elementTests(Tooltip)
  elementTests(Tooltip.Trigger)
  elementTests(Tooltip.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Drawer /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(
      <Tooltip>
        <Tooltip.Trigger>Trigger</Tooltip.Trigger>
        <Tooltip.Content>Content</Tooltip.Content>
      </Tooltip>,
    )

    expect(tree).toMatchSnapshot()
  })
})
