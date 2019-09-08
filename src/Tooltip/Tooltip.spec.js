import React from 'react'
import { render } from '@testing-library/react'

import Tooltip from './Tooltip'
import activationTestSuite from '../../test/activation-tests'
import elementTests from '../../test/element-tests'

describe('<Tooltip />', () => {
  // Basic library activation test suite
  activationTestSuite(Tooltip, { name: 'tooltip', testArias: ['describedby'] })
  // Basic library element test suite
  elementTests(Tooltip)
  elementTests(Tooltip.Trigger)
  elementTests(Tooltip.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Tooltip /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Tooltip>
        <Tooltip.Trigger>Trigger</Tooltip.Trigger>
        <Tooltip.Content>Content</Tooltip.Content>
      </Tooltip>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
