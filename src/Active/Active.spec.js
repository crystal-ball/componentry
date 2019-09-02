import React from 'react'
import { render } from '@testing-library/react'

import Active from './Active'

import activationTestSuite from '../../test/activation-tests'
import elementTests from '../../test/element-tests'

describe('<Active />', () => {
  activationTestSuite(Active, { name: 'active', testArias: ['controls'] })
  elementTests(Active)
  elementTests(Active.Trigger)
  elementTests(Active.Content)
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Active /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Active>
        <Active.Trigger>Trigger</Active.Trigger>
        <Active.Content>Content</Active.Content>
      </Active>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
