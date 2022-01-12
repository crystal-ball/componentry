import React from 'react'
import { render, screen } from '@testing-library/react'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Popover } from './Popover'

describe('<Popover />', () => {
  // Basic library activation test suite
  activationTests(Popover, { name: 'popover', testArias: ['describedby'] })
  // Basic library element test suite
  elementTests(Popover)
  elementTests(Popover.Action)
  elementTests(Popover.Content)
  elementTests(Popover.Heading)
  elementTests(Popover.Body)

  it('renders the correct directional classes using direction', () => {
    render(
      <Popover data-testid='popover' direction='left'>
        <Popover.Action>Action</Popover.Action>
        <Popover.Content>Content</Popover.Content>
      </Popover>,
    )

    expect(screen.getByTestId('popover')).toHaveClass('left')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Popover /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Popover data-testid='popover'>
        <Popover.Action>Toggle</Popover.Action>
        <Popover.Content>
          <Popover.Heading>Fun Fact!</Popover.Heading>
          <Popover.Body>
            <span>
              The new Texas Instrument calculators have ABC keyboards because if they had
              QWERTY keyboards, they would be considered computers and wouldn’t be allowed
              for standardized test taking.
            </span>
          </Popover.Body>
        </Popover.Content>
      </Popover>,
    )

    expect(screen.getByTestId('popover')).toMatchSnapshot()
  })
})
