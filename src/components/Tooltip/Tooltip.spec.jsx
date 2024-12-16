import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
  // Basic library activation test suite
  activationTests(Tooltip, { name: 'Tooltip', testArias: ['describedby'] })
  // Basic library element test suite
  elementTests(Tooltip)
  elementTests(Tooltip.Action)
  elementTests(Tooltip.Content, { mounted: 'always' })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Tooltip /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Tooltip data-testid='tooltip'>
        <Tooltip.Action>Action</Tooltip.Action>
        <Tooltip.Content mounted='always'>Content</Tooltip.Content>
      </Tooltip>,
    )

    expect(screen.getByTestId('tooltip')).toMatchSnapshot()
  })
})
