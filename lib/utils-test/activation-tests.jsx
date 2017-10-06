/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme'

/**
 * This set of activation event tests should pass for every element with active
 * state. It's probably not really necessary to run these tests for each element,
 * but this provides a simple high level gut check on if functionality is working
 * as expected for each component.
 *
 * IMPORTANT NOTES
 * - `dt()` is a shorthand method for creating data-test strings. Using data-test
 *   strings lets us reuse shared tests across components
 * - Enzyme `find()` will find **EVERY** instance of a prop, for the trigger this
 *   means it will always find **TWO** triggers because each trigger is actually
 *   a trigger component wrapping a Button component. Use `first()` to select one
 *   for calling simulate.
 */

/**
 * Test that the default uncontrolled state scenario works. The active state should
 * be managed internally if not overriden with props and clicking the trigger should
 * show/hide content.
 */
export const testAriasWithInternalState = (
  testComponent,
  { dtContent, dtToggle }
) => {
  const wrapper = mount(testComponent)

  // Content
  const content = wrapper.find(dtContent)
  const guid = content.prop('id')
  expect(content.length).toEqual(1)
  expect(content.prop('aria-hidden')).toEqual('true')

  // Trigger
  const trigger = wrapper.find(dtToggle).first()
  expect(trigger.length).toEqual(1)
  expect(trigger.prop('aria-controls')).toEqual(guid)

  // Simulate a click, arias should update
  trigger.simulate('click')

  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('false')

  // Simulate a click, arias should update
  trigger.simulate('click')

  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('true')
}

/**
 * Test that all of the user hooks are being called on activation/deactivation.
 * TODO: update to check that event hooks are called with correct args.
 */
export const testUserEventHooks = (
  testComponent,
  { dtToggle },
  { onActivate, onActivated, onDeactivate, onDeactivated }
) => {
  const wrapper = mount(testComponent)

  const trigger = wrapper.find(dtToggle).first()

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
}

/**
 * Test controlled component for `active` prop. Passing active at any point in
 * component life should override current active state. Default activate/deactivate
 * methods should still update that state.
 */
export const testPassedActiveProp = (testComponent, { dtContent, dtToggle }) => {
  const wrapper = mount(testComponent)

  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('false')

  // Should still be able to use default activate/deactivate hooks
  wrapper
    .find(dtToggle)
    .first()
    .simulate('click')

  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('true')

  // Passing active at any point should again override internal state
  wrapper.setProps({ active: true })

  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('false')
}

/**
 * Test controlled component for methods `activate` and `deactivate`. Passing these
 * should override internal activate/deactivate meaning that clicking the trigger
 * for an element should only call those passed props.
 */
export const testPassedActivateDeactivateProps = (
  testComponent,
  { dtContent, dtToggle },
  { activate, deactivate }
) => {
  const wrapper = mount(testComponent)

  const trigger = wrapper.find(dtToggle).first()

  trigger.simulate('click')

  // We have overridden the activate event so, dropdown should still be closed
  // and clicking trigger should call activate again

  expect(activate).toHaveBeenCalledTimes(1)
  expect(deactivate).toHaveBeenCalledTimes(0)
  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('true')

  trigger.simulate('click')

  expect(activate).toHaveBeenCalledTimes(2)
  expect(deactivate).toHaveBeenCalledTimes(0)
  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('true')

  // Mock controlled component being passed true, click should now ONLY call deactivate
  wrapper.setProps({ active: true })
  trigger.simulate('click')

  expect(activate).toHaveBeenCalledTimes(2)
  expect(deactivate).toHaveBeenCalledTimes(1)
  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('false')

  trigger.simulate('click')

  expect(activate).toHaveBeenCalledTimes(2)
  expect(deactivate).toHaveBeenCalledTimes(2)
  expect(wrapper.find(dtContent).prop('aria-hidden')).toEqual('false')
}
