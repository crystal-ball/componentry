import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Dropdown from './index'
import dt from '../utils-test/dt'
import {
  testAriasWithInternalState,
  testPassedActivateDeactivateProps,
  testPassedActiveProp,
  testUserEventHooks
} from '../utils-test/activation-tests'

const dtContent = dt('dropdown-content')
const dtToggle = dt('dropdown-toggle')

/**
 * TODO: Test keyboard events esc and click outside of element
 */

describe('<Dropdown />', () => {
  test('should render appropriate classes and arias by default', () => {
    const wrapper = mount(
      <Dropdown>
        <Dropdown.Trigger>Trigger</Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    )

    // Container
    expect(wrapper.find('.dropdown').length).toEqual(1)
    // Trigger
    const trigger = wrapper.find(dtToggle).first()
    const guid = trigger.prop('id')
    expect(trigger.length).toEqual(1)
    expect(trigger.text()).toEqual('Trigger')
    expect(trigger.prop('aria-haspopup')).toEqual('true')
    expect(trigger.prop('aria-expanded')).toEqual('false')
    // Content
    // (labelledby should match the id of the trigger element)
    const content = wrapper.find(dtContent)
    expect(content.length).toEqual(1)
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
        .prop('aria-expanded')
    ).toEqual('true')
    expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('false')
  })

  test('should update arias when trigger is activated', () => {
    testAriasWithInternalState(
      <Dropdown>
        <Dropdown.Trigger />
        <Dropdown.Content />
      </Dropdown>,
      { dtContent, dtToggle }
    )
  })

  test('should call user event hooks', () => {
    const onActivate = jest.fn()
    const onActivated = jest.fn()
    const onDeactivate = jest.fn()
    const onDeactivated = jest.fn()
    testUserEventHooks(
      <Dropdown
        onActivate={onActivate}
        onActivated={onActivated}
        onDeactivate={onDeactivate}
        onDeactivated={onDeactivated}
      >
        <Dropdown.Trigger />
        <Dropdown.Content />
      </Dropdown>,
      { dtToggle },
      { onActivate, onActivated, onDeactivate, onDeactivated }
    )
  })

  test('should use passed active prop instead of internal active', () => {
    testPassedActiveProp(
      <Dropdown active>
        <Dropdown.Trigger />
        <Dropdown.Content />
      </Dropdown>,
      { dtContent, dtToggle }
    )
  })

  test('should use passed activate and deactivate functions', () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    testPassedActivateDeactivateProps(
      <Dropdown active={false} activate={activate} deactivate={deactivate}>
        <Dropdown.Trigger />
        <Dropdown.Content />
      </Dropdown>,
      { dtContent, dtToggle },
      { activate, deactivate }
    )
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
      </Dropdown>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
