import React from 'react'
import { render } from '@testing-library/react'

import Popover from './Popover'
import activationTestSuite from '../../test/activation-tests'
import elementTests from '../../test/element-tests'

describe('<Popover />', () => {
  // Basic library activation test suite
  activationTestSuite(Popover, { name: 'popover', testArias: ['describedby'] })
  // Basic library element test suite
  elementTests(Popover)
  elementTests(Popover.Trigger)
  elementTests(Popover.Content)
  elementTests(Popover.Heading)
  elementTests(Popover.Body)

  it('renders the correct directional classes using direction', () => {
    const { getByTestId } = render(
      <Popover data-testid='popover' direction='left'>
        <Popover.Trigger>Trigger</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>,
    )
    expect(getByTestId('popover')).toHaveClass('left')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Popover /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Popover>
        <Popover.Trigger>Toggle</Popover.Trigger>
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

    expect(container.firstChild).toMatchSnapshot()
  })
})
