import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Dropdown from './Dropdown'
import dt from '../utils-test/dt'
import activationTestSuite from '../utils-test/activation-tests'
import elementTests from '../utils-test/element-tests'
import setupActiveContext from '../utils-test/setup-active-context'

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
  elementTests(Dropdown.Trigger, setupActiveContext())
  elementTests(Dropdown.Content, setupActiveContext())
  elementTests(Dropdown.Item, setupActiveContext())

  test('should render appropriate classes and arias by default', () => {
    const wrapper = mount(
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )

    // Container
    expect(wrapper.find('.dropdown').length).toEqual(1)
    // Trigger
    const trigger = wrapper.find(dtToggle).first()
    const guid = trigger.prop('id')
    expect(trigger.text()).toEqual('Trigger')
    expect(trigger.prop('aria-haspopup')).toEqual('true')
    expect(trigger.prop('aria-expanded')).toEqual('false')
    // Content
    // (labelledby should match the id of the trigger element)
    const content = wrapper.find(dtContent).first()
    expect(content.text()).toEqual('Item 1Item 2')
    expect(content.prop('aria-labelledby')).toEqual(guid)
    expect(content.prop('aria-hidden')).toEqual('true')
    expect(wrapper.find('button.dropdown-item').length).toEqual(2)

    // Simulate a click, arias should update
    trigger.simulate('click')

    // Cannot re-use found nodes, the references are stale
    expect(
      wrapper
        .find(dtToggle)
        .first()
        .prop('aria-expanded'),
    ).toEqual('true')
    expect(
      wrapper
        .find(dtContent)
        .first()
        .prop('aria-hidden'),
    ).toEqual('false')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
