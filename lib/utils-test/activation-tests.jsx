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
   * Test that the default uncontrolled state scenario works. The active state should
   * be managed internally if not overriden with props and clicking the trigger should
   * show/hide content.
   */
  test('should update arias when trigger is activated', () => {
    const wrapper = mount(
      <TestComponent>
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>
    )

    // Content
    const content = findContent(wrapper)
    const guid = content.prop('id')
    expect(content.length).toEqual(1)
    expect(content.prop('aria-hidden')).toEqual('true')

    // Trigger
    const trigger = findTrigger(wrapper)
    expect(trigger.length).toEqual(1)
    expect(trigger.prop('aria-controls')).toEqual(guid)

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
      </TestComponent>
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
   * Test controlled component for `active` prop. Passing active at any point in
   * component life should override current active state. Default activate/deactivate
   * methods should still update that state.
   */
  test('should use passed active prop instead of internal active', () => {
    const wrapper = mount(
      <TestComponent active>
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>
    )

    expect(findContent(wrapper).prop('aria-hidden')).toEqual('false')

    // Should still be able to use default activate/deactivate hooks
    findTrigger(wrapper).simulate('click')

    expect(findContent(wrapper).prop('aria-hidden')).toEqual('true')

    // Passing active at any point should again override internal state
    wrapper.setProps({ active: true })

    expect(findContent(wrapper).prop('aria-hidden')).toEqual('false')
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
      <TestComponent active={false} activate={activate} deactivate={deactivate}>
        <TestComponent.Trigger data-test="trigger" />
        <TestComponent.Content data-test="content" />
      </TestComponent>
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
}
