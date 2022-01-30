import React from 'react'
import { render, screen } from '@testing-library/react'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Dropdown } from './Dropdown'

describe('<Dropdown />', () => {
  // Basic library activation test suite
  activationTests(Dropdown, {
    name: 'Dropdown',
    testArias: ['labelledby', 'expanded'],
  })

  // Basic library element test suite
  elementTests(Dropdown)
  elementTests(Dropdown.Action)
  elementTests(Dropdown.Content, { mounted: 'always' })
  elementTests(Dropdown.Item)

  it('renders the correct directional classes using direction', () => {
    const { rerender } = render(
      <Dropdown data-testid='dropdown' direction='bottom'>
        <Dropdown.Action>Toggle</Dropdown.Action>
        <Dropdown.Content>Testing</Dropdown.Content>
      </Dropdown>,
    )

    expect(screen.getByTestId('dropdown')).toHaveClass('🅲Dropdown-bottom') // default value

    rerender(
      <Dropdown data-testid='dropdown' direction='top'>
        <Dropdown.Action>Toggle</Dropdown.Action>
        <Dropdown.Content>Testing</Dropdown.Content>
      </Dropdown>,
    )

    expect(screen.getByTestId('dropdown')).toHaveClass('🅲Dropdown-top') // default value
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Dropdown /> snapshots', () => {
  it('renders correctly', () => {
    render(
      <Dropdown data-testid='dropdown'>
        <Dropdown.Action>Action</Dropdown.Action>
        <Dropdown.Content mounted='always'>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )

    expect(screen.getByTestId('dropdown')).toMatchSnapshot()
  })
})
