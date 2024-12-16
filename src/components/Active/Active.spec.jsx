import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Active } from './Active'

describe('<Active />', () => {
  activationTests(Active, { name: 'Active', testArias: ['controls'] })
  elementTests(Active)
  elementTests(Active.Action)
  elementTests(Active.Content, { mounted: 'always' })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Active /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Active data-testid='active'>
        <Active.Action>Action</Active.Action>
        <Active.Content mounted='always'>Content</Active.Content>
      </Active>,
    )

    expect(screen.getByTestId('active')).toMatchSnapshot()
  })
})
