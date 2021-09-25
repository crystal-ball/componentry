import React from 'react'
import { render, screen } from '@testing-library/react'

import { activationTests } from '../test/activation-tests'
import { elementTests } from '../test/element-tests'
import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
  // Basic library activation test suite
  activationTests(Tooltip, { name: 'tooltip', testArias: ['describedby'] })
  // Basic library element test suite
  elementTests(Tooltip)
  elementTests(Tooltip.Action)
  elementTests(Tooltip.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Tooltip /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Tooltip data-testid='tooltip'>
        <Tooltip.Action>Action</Tooltip.Action>
        <Tooltip.Content>Content</Tooltip.Content>
      </Tooltip>,
    )

    expect(screen.getByTestId('tooltip')).toMatchSnapshot()
  })
})
