import React from 'react'
import { mount, render } from 'enzyme'

import Dropdown from './Dropdown'
import dt from '../utils-test/dt'
import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'

const dtContent = dt('dropdown-content')
const dtToggle = dt('dropdown-trigger')

/**
 * TODO: Test keyboard events esc and click outside of element
 */

describe('<Dropdown />', () => {
  // Basic library activation test suite
  activationTestSuite(Dropdown)
  // Basic library element test suite
  elementTests(Dropdown)
  elementTests(Dropdown.Trigger)
  elementTests(Dropdown.Content)
  elementTests(Dropdown.Item)

  test('should render appropriate classes and arias by default', () => {
    const wrapper = mount(
      <Dropdown>
        <Dropdown.Trigger data-test="dropdown-trigger">Trigger</Dropdown.Trigger>
        <Dropdown.Content data-test="dropdown-content">
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )

    // Container
    expect(wrapper.find('.dropdown').length).toEqual(1)
    expect(wrapper.find('.dropdown.bottom').length).toEqual(1)
    // Trigger
    const trigger = wrapper.find(dtToggle).first()
    const guid = trigger.prop('id')
    expect(trigger.text()).toEqual('Trigger')
    expect(wrapper.find('button[aria-haspopup="true"]')).toBeTruthy()
    expect(wrapper.find('button[aria-expanded="false"]')).toBeTruthy()
    // Content
    // (labelledby should match the id of the trigger element)
    const content = wrapper.find(dtContent).first()
    expect(content.text()).toEqual('Item 1Item 2')
    expect(wrapper.find(`.dropdown-content[aria-labelledby="${guid}"]`)).toBeTruthy()
    expect(wrapper.find('.dropdown-content[aria-hidden="true"]')).toBeTruthy()
    expect(wrapper.find('button.dropdown-item').length).toEqual(2)

    // Simulate a click, arias should update
    trigger.simulate('click')

    // Cannot re-use found nodes, the references are stale
    expect(wrapper.find('button[aria-expanded="true"]')).toBeTruthy()
    expect(wrapper.find('.dropdown-content[aria-hidden="false"]')).toBeTruthy()
  })

  it('renders the correct directional classes using direction', () => {
    const wrapper = mount(
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )

    expect(wrapper.find('.dropdown.bottom').length).toEqual(1) // default
    wrapper.setProps({ direction: 'top' })
    expect(wrapper.find('.dropdown.top').length).toEqual(1)
  })
})

// Snapshots
// ---------------------------------------------------------------------------
describe('<Drawer /> snapshots', () => {
  it('renders correctly', () => {
    const tree = render(
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )

    expect(tree).toMatchSnapshot()
  })
})
