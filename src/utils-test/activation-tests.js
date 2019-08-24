import React from 'react'
import { render, fireEvent } from '@testing-library/react'

/**
 * This set of activation event tests should pass for every element with active
 * state. It's probably not really necessary to run these tests for each element,
 * but this provides a simple high level check on if functionality is working
 * as expected for each component.
 */
const activationTests = (TestComponent, { name } = {}) => {
  /**
   * Test that the default uncontrolled state scenario works. The active state should
   * be managed internally if not overriden with props and clicking the trigger should
   * show/hide content.
   */
  test('should update arias when trigger is activated', () => {
    const { getByText } = render(
      <TestComponent>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    // Trigger and Content should have correct attrs for a11y and hidden content
    expect(getByText('Trigger')).toHaveAttribute('type', 'button')
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'true')
    expect(getByText('Content')).toHaveAttribute('id', 'guid')

    // TODO: handle controls vs described-by aria attrs (popovers+tooltips are described-by)

    fireEvent.click(getByText('Trigger'))
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'false')

    fireEvent.click(getByText('Trigger'))
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'true')
  })

  /**
   * Test that all of the user hooks are being called on activation/deactivation.
   */
  test('should call event observation hooks', () => {
    const onActivate = jest.fn()
    const onActivated = jest.fn()
    const onDeactivate = jest.fn()
    const onDeactivated = jest.fn()
    const { getByText } = render(
      <TestComponent
        onActivate={onActivate}
        onActivated={onActivated}
        onDeactivate={onDeactivate}
        onDeactivated={onDeactivated}
      >
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    fireEvent.click(getByText('Trigger'))

    expect(onActivate).toHaveBeenCalledTimes(1)
    expect(onActivated).toHaveBeenCalledTimes(1)
    expect(onDeactivate).toHaveBeenCalledTimes(0) // not yet!
    expect(onDeactivated).toHaveBeenCalledTimes(0) // not yet!

    fireEvent.click(getByText('Trigger'))

    expect(onActivate).toHaveBeenCalledTimes(1) // only once
    expect(onActivated).toHaveBeenCalledTimes(1) // only once
    expect(onDeactivate).toHaveBeenCalledTimes(1)
    expect(onDeactivated).toHaveBeenCalledTimes(1)
  })

  /**
   * Test setting initial active state using defaultActive prop
   */
  test('state should default to defaultActive when passed', () => {
    const { getByText } = render(
      <TestComponent defaultActive>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'false')
  })

  /**
   * State checks if active prop value is different from internal state and
   * updates if that's the case, but this should only happen when passed active
   * is an actual value and not undefined. Check this with an instance with no
   * value, and a forced rerender
   *
   * ...This is a weird test to ensure that the internal ∆ handlers don't
   * accidentally flip active state when the component gets rerendered by some
   * other ∆. I don't think this is the right way to test this in RTL... may
   * need to put a wrapper around the component and trigger a change on that
   * which will cause the Active component to get rerendered and verify active
   * state hasn't changed...
   */
  test('should not use active prop when value is undefined', () => {
    const { getByText, rerender } = render(
      <TestComponent>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'true')
    rerender(
      <TestComponent>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'true')
  })

  /**
   * Test controlled component for methods `activate` and `deactivate`. Passing these
   * should override internal activate/deactivate meaning that clicking the trigger
   * for an element should only call those passed props.
   */
  test('should use passed activate and deactivate functions', () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    const { getByText, rerender } = render(
      <TestComponent activate={activate} deactivate={deactivate} active={false}>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    fireEvent.click(getByText('Trigger'))

    // We have overridden the activate event so content should still be hidden
    // and clicking again should call *activate* again

    expect(activate).toHaveBeenCalledTimes(1)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(getByText('Trigger'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    // Mock controlled component being passed true, click should now ONLY call deactivate
    rerender(
      <TestComponent activate={activate} deactivate={deactivate} active>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )
    fireEvent.click(getByText('Trigger'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(1)
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'false')

    fireEvent.click(getByText('Trigger'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(2)
    expect(getByText('Content')).toHaveAttribute('aria-hidden', 'false')
  })

  /**
   * Test that any flavor of the `<Active />` component exposes internal state and
   * state change methods using the FaCC pattern
   */
  test('should expose internals using FaCC pattern', () => {
    const { getByText } = render(
      <TestComponent>
        {({ active, activate, deactivate }) => (
          <div>
            <span>{String(active)}</span>
            <button type='button' onClick={activate}>
              activate
            </button>
            <button type='button' onClick={deactivate}>
              deactivate
            </button>
          </div>
        )}
      </TestComponent>,
    )

    getByText('false')
    fireEvent.click(getByText('activate'))
    getByText('true')
    fireEvent.click(getByText('deactivate'))
    getByText('false')
  })

  /**
   * Active component containers should map size prop to the component name,
   * this is how size variants can be created
   */
  test('should include size class for container', () => {
    const { container } = render(<TestComponent size='sm' />)

    expect(container.firstChild).toHaveClass(`${name}-sm`)
  })
}
export default activationTests
