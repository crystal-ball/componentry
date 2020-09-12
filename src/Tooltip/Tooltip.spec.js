import React from 'react'
import { render } from '@testing-library/react'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
  // Basic library activation test suite
  activationTests(Tooltip, { name: 'tooltip', testArias: ['describedby'] })
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
