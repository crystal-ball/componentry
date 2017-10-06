import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import State from './index'

describe('<State />', () => {
  test('should update arias when trigger is activated', () => {
    const wrapper = mount(
      <State>
        <State.Trigger />
        <State.Content />
      </State>
    )

    // Content
    const content = wrapper.find('.state-content')
    const guid = content.prop('id')
    expect(content.length).toEqual(1)
    expect(content.prop('aria-hidden')).toEqual('true')

    // Trigger
    const trigger = wrapper.find('.btn.state-toggle')
    expect(trigger.length).toEqual(1)
    expect(trigger.prop('aria-controls')).toEqual(guid)

    // Simulate a click, arias should update
    trigger.simulate('click')

    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('false')

    // Simulate a click, arias should update
    trigger.simulate('click')

    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('true')
  })

  test('should call user event hooks', () => {
    const onActivate = jest.fn()
    const onActivated = jest.fn()
    const onDeactivate = jest.fn()
    const onDeactivated = jest.fn()
    const wrapper = mount(
      <State
        onActivate={onActivate}
        onActivated={onActivated}
        onDeactivate={onDeactivate}
        onDeactivated={onDeactivated}
      >
        <State.Trigger />
        <State.Content />
      </State>
    )

    const trigger = wrapper.find('.btn.state-toggle')

    trigger.simulate('click')

    expect(onActivate).toHaveBeenCalledTimes(1)
    expect(onActivated).toHaveBeenCalledTimes(1)
    expect(onDeactivate).toHaveBeenCalledTimes(0) // not yet!
    expect(onDeactivated).toHaveBeenCalledTimes(0) // not yet!

    trigger.simulate('click')

    expect(onActivate).toHaveBeenCalledTimes(1) // only once
    expect(onActivated).toHaveBeenCalledTimes(1) // only once
    expect(onDeactivate).toHaveBeenCalledTimes(1)
    expect(onDeactivated).toHaveBeenCalledTimes(1)
  })

  test('should use passed active prop instead of internal active', () => {
    const wrapper = mount(
      <State active>
        <State.Trigger />
        <State.Content />
      </State>
    )

    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('false')

    // Should still be able to use default activate/deactivate hooks
    wrapper.find('.btn.state-toggle').simulate('click')

    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('true')

    // Passing active at any point should again override internal state
    wrapper.setProps({ active: true })

    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('false')
  })

  test('should use passed activate and deactivate functions', () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    const wrapper = mount(
      <State active={false} activate={activate} deactivate={deactivate}>
        <State.Trigger />
        <State.Content />
      </State>
    )

    const trigger = wrapper.find('.btn.state-toggle')

    trigger.simulate('click')

    // We have overridden the activate event so, dropdown should still be closed
    // and clicking trigger should call activate again

    expect(activate).toHaveBeenCalledTimes(1)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('true')

    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('true')

    // Mock controlled component being passed true, click should now ONLY call deactivate
    wrapper.setProps({ active: true })
    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(1)
    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('false')

    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(2)
    expect(wrapper.find('.state-content').prop('aria-hidden')).toEqual('false')
  })
})

// Snapshots
// ---------------------------------------------------------------------------
it('renders correctly', () => {
  const tree = renderer
    .create(
      <State>
        <State.Trigger>Trigger</State.Trigger>
        <State.Content>Content</State.Content>
      </State>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
