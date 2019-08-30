import React from 'react'
import { render } from '@testing-library/react'

import Dropdown from './Dropdown'
import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'

describe('<Dropdown />', () => {
  // Basic library activation test suite
  activationTestSuite(Dropdown, {
    name: 'dropdown',
    testArias: ['labelledby', 'expanded'],
  })

  // Basic library element test suite
  elementTests(Dropdown)
  elementTests(Dropdown.Trigger)
  elementTests(Dropdown.Content)
  elementTests(Dropdown.Item)

  it('renders the correct directional classes using direction', () => {
    const { getByTestId, rerender } = render(
      <Dropdown Trigger='Toggle' Content='Testing' data-testid='dropdown' />,
    )

    expect(getByTestId('dropdown')).toHaveClass('dropdown bottom') // default value

    rerender(
      <Dropdown
        Trigger='Toggle'
        Content='Testing'
        data-testid='dropdown'
        direction='top'
      />,
    )

    expect(getByTestId('dropdown')).toHaveClass('dropdown top') // default value
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Dropdown /> snapshots', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
