/* eslint-env jest */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

/**
 * This set of activation event tests should pass for every element with active
 * state. It's probably not really necessary to run these tests for each element,
 * but this provides a simple high level check on if functionality is working
 * as expected for each component.
 */
export function activationTests(TestComponent, { name, testArias } = {}) {
  /**
   * Active component containers should map size prop to the component name,
   * this is how size variants can be created
   */
  test('should include size class for container', () => {
    const { container } = render(<TestComponent size='sm' />)
    expect(container.firstChild).toHaveClass(`${name}-sm`)
  })

  /**
   * Active containers should accept a direction prop that renders a className
   */
  test('should include direction class for container', () => {
    const { container } = render(<TestComponent direction='overlay' />)
    expect(container.firstChild).toHaveClass('overlay')
  })

  /**
   * Test that the shorthand subcombonent props renders subcomponents
   */
  test('should render components for subcomponent shorthand', async () => {
    render(<TestComponent Content='Content' Trigger='Trigger' />)

    expect(screen.getByText('Trigger')).toBeDefined()
    expect(screen.getByText('Content')).toBeDefined()
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    await fireEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'false')
  })

  /**
   * Test that the default uncontrolled state scenario works. The active state should
   * be managed internally if not overriden with props and clicking the trigger should
   * show/hide content.
   */
  test('should update arias when trigger is activated', async () => {
    // Components must specify which aria attrs should be tested
    const testControls = testArias.includes('controls')
    const testLabelledBy = testArias.includes('labelledby')
    const testExpanded = testArias.includes('expanded')
    // TODO: describedby

    render(
      <TestComponent>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    // Trigger and Content should have correct attrs for a11y and hidden content
    expect(screen.getByText('Trigger')).toHaveAttribute('type', 'button')
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    if (testControls) {
      // If aria-controls, trigger should have attr pointing to id on content
      expect(screen.getByText('Trigger')).toHaveAttribute('aria-controls', 'test-guid')
      expect(screen.getByText('Content')).toHaveAttribute('id', 'test-guid')
    }

    if (testLabelledBy) {
      // If aria-labelledby, content should have attr pointing to id on trigger
      expect(screen.getByText('Trigger')).toHaveAttribute('id', 'test-guid')
      expect(screen.getByText('Content')).toHaveAttribute('aria-labelledby', 'test-guid')
    }

    if (testExpanded) {
      // If aria-expanded, trigger should have visible state updated in attr
      expect(screen.getByText('Trigger')).toHaveAttribute('aria-expanded', 'false')
    }

    await fireEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'false')

    if (testExpanded) {
      expect(screen.getByText('Trigger')).toHaveAttribute('aria-expanded', 'true')
    }

    await fireEvent.click(screen.getByText('Trigger'))
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    if (testExpanded) {
      expect(screen.getByText('Trigger')).toHaveAttribute('aria-expanded', 'false')
    }
  })

  /**
   * Test that all of the user hooks are being called on activation/deactivation.
   */
  test('should call event observation hooks', async () => {
    const onActivate = jest.fn()
    const onActivated = jest.fn()
    const onDeactivate = jest.fn()
    const onDeactivated = jest.fn()

    render(
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

    await fireEvent.click(screen.getByText('Trigger'))

    expect(onActivate).toHaveBeenCalledTimes(1)
    expect(onActivated).toHaveBeenCalledTimes(1)
    expect(onDeactivate).toHaveBeenCalledTimes(0) // not yet!
    expect(onDeactivated).toHaveBeenCalledTimes(0) // not yet!

    await fireEvent.click(screen.getByText('Trigger'))

    expect(onActivate).toHaveBeenCalledTimes(1) // only once
    expect(onActivated).toHaveBeenCalledTimes(1) // only once
    expect(onDeactivate).toHaveBeenCalledTimes(1)
    expect(onDeactivated).toHaveBeenCalledTimes(1)
  })

  /**
   * Test setting initial active state using defaultActive prop
   */
  test('state should default to defaultActive when passed', () => {
    render(
      <TestComponent defaultActive>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'false')
  })

  /**
   * Test that clicking outside of the container component will deactivate it
   * if clickHandler is true
   */
  test('should deactivate when clickHandler is true', async () => {
    render(
      <div>
        <button type='button'>External</button>
        <TestComponent clickEvents={false}>
          <TestComponent.Trigger>No handler trigger</TestComponent.Trigger>
          <TestComponent.Content>No handler content</TestComponent.Content>
        </TestComponent>
        <TestComponent clickEvents>
          <TestComponent.Trigger>Handler trigger</TestComponent.Trigger>
          <TestComponent.Content>Handler content</TestComponent.Content>
        </TestComponent>
      </div>,
    )

    // Both content elements should be hidden
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'true')

    // Element without click events should not close when click outside
    await fireEvent.click(screen.getByText('No handler trigger'))
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'false')
    await fireEvent.mouseUp(screen.getByText('External'))
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'false')

    // Click outside element with click events should deactivate it
    await fireEvent.click(screen.getByText('Handler trigger'))
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'false')
    await fireEvent.mouseUp(screen.getByText('External'))
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'true')
  })

  /**
   * Test that the esc handler works
   */
  test('should deactivate on esc if escEvents is true', async () => {
    const { container } = render(
      <div>
        <TestComponent escEvents={false}>
          <TestComponent.Trigger>No handler trigger</TestComponent.Trigger>
          <TestComponent.Content>No handler content</TestComponent.Content>
        </TestComponent>
        <TestComponent escEvents>
          <TestComponent.Trigger>Handler trigger</TestComponent.Trigger>
          <TestComponent.Content>Handler content</TestComponent.Content>
        </TestComponent>
      </div>,
    )

    // Both content elements should be hidden
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'true')

    // Esc keydown should not deactivate
    await fireEvent.click(screen.getByText('No handler trigger'))
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'false')
    await fireEvent.keyDown(container, { key: 'Escape', code: 27, which: 27 })
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'false')

    // Esc keydown should deactivate it
    await fireEvent.click(screen.getByText('Handler trigger'))
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'false')
    await fireEvent.keyDown(container, { key: 'Escape', code: 27, which: 27 })
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'true')
  })

  /**
   * Test that the mouse events handler works
   */
  test('should handle mouse events when mouseEvents is true', async () => {
    render(
      <div>
        <TestComponent mouseEvents={false}>
          <TestComponent.Trigger>No handler trigger</TestComponent.Trigger>
          <TestComponent.Content>No handler content</TestComponent.Content>
        </TestComponent>
        <TestComponent mouseEvents>
          <TestComponent.Trigger>Handler trigger</TestComponent.Trigger>
          <TestComponent.Content>Handler content</TestComponent.Content>
        </TestComponent>
      </div>,
    )

    // Both content elements should be hidden
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'true')

    // Element without mouse events should not change
    await fireEvent.mouseEnter(screen.getByText('No handler trigger'))
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'true')
    await fireEvent.mouseLeave(screen.getByText('No handler trigger'))
    expect(screen.getByText('No handler content')).toHaveAttribute('aria-hidden', 'true')

    // Element with mouse events should activate/deactivate
    await fireEvent.mouseEnter(screen.getByText('Handler trigger'))
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'false')
    await fireEvent.mouseLeave(screen.getByText('Handler trigger'))
    expect(screen.getByText('Handler content')).toHaveAttribute('aria-hidden', 'true')
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
    const { rerender } = render(
      <TestComponent>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    rerender(
      <TestComponent>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true')
  })

  /**
   * Test controlled component for methods `activate` and `deactivate`. Passing these
   * should override internal activate/deactivate meaning that clicking the trigger
   * for an element should only call those passed props.
   */
  test('should use passed activate and deactivate functions', async () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    const { rerender } = render(
      <TestComponent activate={activate} active={false} deactivate={deactivate}>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    await fireEvent.click(screen.getByText('Trigger'))

    // We have overridden the activate event so content should still be hidden
    // and clicking again should call *activate* again

    expect(activate).toHaveBeenCalledTimes(1)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    await fireEvent.click(screen.getByText('Trigger'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'true')

    // Mock controlled component being passed true, click should now ONLY call deactivate
    rerender(
      <TestComponent active activate={activate} deactivate={deactivate}>
        <TestComponent.Trigger>Trigger</TestComponent.Trigger>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )
    await fireEvent.click(screen.getByText('Trigger'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'false')

    await fireEvent.click(screen.getByText('Trigger'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(2)
    expect(screen.getByText('Content')).toHaveAttribute('aria-hidden', 'false')
  })

  /**
   * Test that any flavor of the `<Active />` component exposes internal state and
   * state change methods using the FaCC pattern
   */
  test('should expose internals using FaCC pattern', async () => {
    render(
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

    expect(screen.getByText('false')).toBeInTheDocument()
    await fireEvent.click(screen.getByText('activate'))
    expect(screen.getByText('true')).toBeInTheDocument()
    await fireEvent.click(screen.getByText('deactivate'))
    expect(screen.getByText('false')).toBeInTheDocument()
  })

  // TODO: test multi-element active components (Drawer, Tabs)
}
