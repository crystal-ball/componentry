/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { mount } from 'enzyme'

import dt from './dt'

/**
 * This set of activation event tests should pass for every element with active
 * state. It's probably not really necessary to run these tests for each element,
 * but this provides a simple high level gut check on if functionality is working
 * as expected for each component.
 *
 * IMPORTANT NOTES
 * - `dt()` is a shorthand method for creating data-test strings. Using data-test
 *   strings lets us reuse shared tests across components
 * - Enzyme `find()` will find **EVERY** instance of a prop. Since we are passing
 *   data-test attributes down here, it will always find more than one. Use
 *   `.last()` to selecte final node.
 */

const findContent = wrapper => wrapper.find(dt('content')).last()
const findTrigger = wrapper => wrapper.find(dt('trigger')).last()

export default TestComponent => {
  /**
   * Test that by default Active.Trigger elements render as button nodes, and
   * when passed an href render anchor nodes.
   */
  test('should render button or anchor tags by default', () => {
    const wrapper = mount(
      <TestComponent>
        <TestComponent.Trigger data-test="btn" />
        <TestComponent.Trigger data-test="anchor" href="http://localhost:3000/">
          Anchor
        </TestComponent.Trigger>
        <TestComponent.Content data-test="content" />
      </TestComponent>,
    )

    const btn = wrapper.find(dt('btn')).last()
    const anchor = wrapper.find(dt('anchor')).last()

    expect(anchor.type()).toEqual('a')
    expect(anchor.prop('type')).toEqual(undefined) // should not have type="button"
    expect(btn.type()).toEqual('button')
    expect(btn.prop('type')).toEqual('button') // should have type="button"
  })

  /**
   * Test that the default uncontrolled state scenario works. The active state should
   * be managed internally if not overriden with props and clicking the trigger should
   * show/hide content.
   */
  test('should update arias when trigger is activated', () => {
    const wrapper = mount(
      <TestComponent>
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>,
    )

    // Content
    const content = findContent(wrapper)
    const guid = content.prop('id')
    expect(content.length).toEqual(1)
    expect(content.prop('aria-hidden')).toEqual('true')

    // Trigger
    const trigger = findTrigger(wrapper)
    expect(trigger.length).toEqual(1)

    // TODO: need to figure out common aria attributes and test only those here
    // eg Popover and tooltip do not have aria-controls attrs
    if (trigger.prop('aria-controls')) expect(trigger.prop('aria-controls')).toEqual(guid)

    // Simulate a click, arias should update
    trigger.simulate('click')

    expect(findContent(wrapper).prop('aria-hidden')).toEqual('false')

    // Simulate a click, arias should update
    trigger.simulate('click')

    expect(findContent(wrapper).prop('aria-hidden')).toEqual('true')
  })

  /**
   * Test that all of the user hooks are being called on activation/deactivation.
   * TODO: update to check that event hooks are called with correct args.
   */
  test('should call user event hooks', () => {
    const onActivate = jest.fn()
    const onActivated = jest.fn()
    const onDeactivate = jest.fn()
    const onDeactivated = jest.fn()
    const wrapper = mount(
      <TestComponent
        onActivate={onActivate}
        onActivated={onActivated}
        onDeactivate={onDeactivate}
        onDeactivated={onDeactivated}
      >
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>,
    )

    const trigger = findTrigger(wrapper)

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

  /**
   * Test setting initial active state using defaultActive prop
   */
  test('state should default to defaultActive when passed', () => {
    const wrapper = mount(
      <TestComponent defaultActive>
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>,
    )

    expect(findContent(wrapper).prop('aria-hidden')).toEqual('false')
  })

  /**
   * State checks if active prop value is different from internal state and updates
   * if that's the case, but this should only happen when passed active is an actual
   * value and not undefined. Check this with an instance with no value, and a
   * forced rerender
   */
  test('should not use active prop when value is undefined', () => {
    const wrapper = mount(
      <TestComponent>
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>,
    )
    expect(findContent(wrapper).prop('aria-hidden')).toEqual('true')
    wrapper.update()
    expect(findContent(wrapper).prop('aria-hidden')).toEqual('true')
  })

  /**
   * Test controlled component for methods `activate` and `deactivate`. Passing these
   * should override internal activate/deactivate meaning that clicking the trigger
   * for an element should only call those passed props.
   */
  test('should use passed activate and deactivate functions', () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    const wrapper = mount(
      <TestComponent activate={activate} deactivate={deactivate}>
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>,
    )

    const trigger = findTrigger(wrapper)

    trigger.simulate('click')

    // We have overridden the activate event so, dropdown should still be closed
    // and clicking trigger should call activate again

    expect(activate).toHaveBeenCalledTimes(1)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(findContent(wrapper).prop('aria-hidden')).toEqual('true')

    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(findContent(wrapper).prop('aria-hidden')).toEqual('true')

    // Mock controlled component being passed true, click should now ONLY call deactivate
    wrapper.setProps({ active: true })
    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(1)
    expect(findContent(wrapper).prop('aria-hidden')).toEqual('false')

    trigger.simulate('click')

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(2)
    expect(findContent(wrapper).prop('aria-hidden')).toEqual('false')
  })

  /**
   * Test that any flavor of the `<Active />` component exposes internal state and
   * state change methods using the FaCC pattern
   */
  test('should expose internals using FaCC pattern', () => {
    const wrapper = mount(
      <TestComponent>
        {({ active, activate, deactivate }) => (
          <div>
            <span data-test="active">{String(active)}</span>
            <button type="button" onClick={activate} data-test="activate" />
            <button type="button" onClick={deactivate} data-test="deactivate" />
          </div>
        )}
      </TestComponent>,
    )

    expect(wrapper.find(dt('active')).text()).toEqual('false')
    wrapper.find(dt('activate')).simulate('click')
    expect(wrapper.find(dt('active')).text()).toEqual('true')
  })
}
