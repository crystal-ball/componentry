import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Dropdown from './index'

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
    const trigger = wrapper.find('button.dropdown-toggle')
    const guid = trigger.prop('id')
    expect(trigger.length).toEqual(1)
    expect(trigger.text()).toEqual('Trigger')
    expect(trigger.prop('aria-haspopup')).toEqual('true')
    expect(trigger.prop('aria-expanded')).toEqual('false')
    // Content
    // (labelledby should match the id of the trigger element)
    const content = wrapper.find('.dropdown-content')
    expect(content.length).toEqual(1)
    expect(content.text()).toEqual('Item 1Item 2')
    expect(content.prop('aria-labelledby')).toEqual(guid)
    expect(content.prop('aria-hidden')).toEqual('true')
    expect(wrapper.find('button.dropdown-item').length).toEqual(2)

    // Simulate a click, arias should update
    trigger.simulate('click')

    // Cannot re-use found nodes, the references are stale
    expect(wrapper.find('.btn.dropdown-toggle').prop('aria-expanded')).toEqual(
      'true'
    )
    // expect(wrapper.find('.dropdown-toggle').length).toEqual(1)
    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('false')
  })

  test('should call user event hooks', () => {
    const onActivate = jest.fn()
    const onActivated = jest.fn()
    const onDeactivate = jest.fn()
    const onDeactivated = jest.fn()
    const wrapper = mount(
      <Dropdown
        onActivate={onActivate}
        onActivated={onActivated}
        onDeactivate={onDeactivate}
        onDeactivated={onDeactivated}
      >
        <Dropdown.Trigger />
        <Dropdown.Content />
      </Dropdown>
    )

    const trigger = wrapper.find('.btn.dropdown-toggle')

    trigger.simulate('click')

    expect(onActivate).toHaveBeenCalled()
    expect(onActivated).toHaveBeenCalled()
    expect(onDeactivate).toHaveBeenCalledTimes(0) // not yet!
    expect(onDeactivated).toHaveBeenCalledTimes(0) // not yet!

    trigger.simulate('click')

    expect(onActivate).toHaveBeenCalledTimes(1) // only once
    expect(onActivated).toHaveBeenCalledTimes(1) // only once
    expect(onDeactivate).toHaveBeenCalled()
    expect(onDeactivated).toHaveBeenCalled()
  })

  test('should use passed active prop instead of internal active', () => {
    const wrapper = mount(
      <Dropdown active>
        <Dropdown.Trigger />
        <Dropdown.Content />
      </Dropdown>
    )

    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('false')

    // Should still be able to use default activate/deactivate hooks
    wrapper.find('.btn.dropdown-toggle').simulate('click')

    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('true')

    // Passing active at any point should again override internal state
    wrapper.setProps({ active: true })

    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('false')
  })

  test('should use passed activate and deactivate functions', () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    const wrapper = mount(
      <Dropdown active={false} activate={activate} deactivate={deactivate}>
        <Dropdown.Trigger />
        <Dropdown.Content />
      </Dropdown>
    )

    const trigger = wrapper.find('.btn.dropdown-toggle')

    trigger.simulate('click')

    // We have overridden the activate event so, dropdown should still be closed
    // and clicking trigger should call activate again

    expect(activate).toHaveBeenCalledTimes(1)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('true')

    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('true')

    // Mock controlled component being passed true, click should now ONLY call deactivate
    wrapper.setProps({ active: true })
    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(1)
    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('false')

    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(2)
    expect(wrapper.find('.dropdown-content').prop('aria-hidden')).toEqual('false')
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
