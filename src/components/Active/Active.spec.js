import React from 'react'
import { render, screen } from '@testing-library/react'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Active } from './Active'

describe('<Active />', () => {
  activationTests(Active, { name: 'Active', testArias: ['controls'] })
  elementTests(Active)
  elementTests(Active.Action)
  elementTests(Active.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Active /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Active data-testid='active'>
        <Active.Action>Action</Active.Action>
        <Active.Content>Content</Active.Content>
      </Active>,
    )

    expect(screen.getByTestId('active')).toMatchSnapshot()
  })
})
