import React from 'react'
import { render, screen } from '@testing-library/react'

import { activationTests } from '../../test/activation-tests'
import { elementTests } from '../../test/element-tests'
import { Dropdown } from './Dropdown'

describe('<Dropdown />', () => {
  // Basic library activation test suite
  activationTests(Dropdown, {
    name: 'dropdown',
    testArias: ['labelledby', 'expanded'],
  })

  // Basic library element test suite
  elementTests(Dropdown)
  elementTests(Dropdown.Action)
  elementTests(Dropdown.Content)
  elementTests(Dropdown.Item)

  it('renders the correct directional classes using direction', () => {
    const { rerender } = render(
      <Dropdown Action='Toggle' Content='Testing' data-testid='dropdown' />,
    )

    expect(screen.getByTestId('dropdown')).toHaveClass('🅲-dropdown bottom') // default value

    rerender(
      <Dropdown
        Action='Toggle'
        Content='Testing'
        data-testid='dropdown'
        direction='top'
      />,
    )

    expect(screen.getByTestId('dropdown')).toHaveClass('🅲-dropdown top') // default value
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Dropdown /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Dropdown>
        <Dropdown.Action>Action</Dropdown.Action>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
