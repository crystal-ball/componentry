/* eslint-env jest */
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import React from 'react'

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
  it('should include size class for container', () => {
    const { container } = render(<TestComponent size='sm' />)
    expect(container.firstChild).toHaveClass(`C9Y-${name}-smSize`)
  })

  /**
   * Active containers should accept a direction prop that renders a className
   */
  it('should include direction class for container', () => {
    const { container } = render(<TestComponent direction='overlay' />)
    expect(container.firstChild).toHaveClass(`C9Y-${name}-overlay`)
  })

  /**
   * Test that the default uncontrolled state scenario works. The active state should
   * be managed internally if not overridden with props and clicking the action should
   * show/hide content.
   */
  it('should update arias when action is activated', async () => {
    // Components must specify which aria attrs should be tested
    const testControls = testArias.includes('controls')
    const testLabelledBy = testArias.includes('labelledby')
    const testExpanded = testArias.includes('expanded')
    // TODO: describedby

    render(
      <TestComponent active>
        <TestComponent.Action>Action</TestComponent.Action>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    // Action and Content should have correct attrs for a11y and hidden content
    expect(screen.getByText('Action')).toHaveAttribute('type', 'button')
    expect(screen.queryByText('Content')).toBeInTheDocument()

    if (testControls) {
      // If aria-controls, action should have attr pointing to id on content
      expect(screen.getByText('Action')).toHaveAttribute('aria-controls', 'test-guid')
      expect(screen.getByText('Content')).toHaveAttribute('id', 'test-guid')
    }

    if (testLabelledBy) {
      // If aria-labelledby, content should have attr pointing to id on action
      expect(screen.getByText('Action')).toHaveAttribute('id', 'test-guid')
      expect(screen.getByText('Content')).toHaveAttribute('aria-labelledby', 'test-guid')
    }

    if (testExpanded) {
      // If aria-expanded, action should have visible state updated in attr
      expect(screen.getByText('Action')).toHaveAttribute('aria-expanded', 'true')
    }

    fireEvent.click(screen.getByText('Action'))
    await waitForElementToBeRemoved(() => screen.queryByText('Content')) // visible transition requires waitFor

    if (testExpanded) {
      expect(screen.getByText('Action')).toHaveAttribute('aria-expanded', 'false')
    }

    fireEvent.click(screen.getByText('Action'))
    expect(screen.queryByText('Content')).toBeInTheDocument()

    if (testExpanded) {
      expect(screen.getByText('Action')).toHaveAttribute('aria-expanded', 'true')
    }
  })

  /**
   * Test that all of the user hooks are being called on activation/deactivation.
   */
  it('should call event observation hooks', async () => {
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
        <TestComponent.Action>Action</TestComponent.Action>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    fireEvent.click(screen.getByText('Action'))

    expect(onActivate).toHaveBeenCalledTimes(1)
    expect(onActivated).toHaveBeenCalledTimes(1)
    expect(onDeactivate).toHaveBeenCalledTimes(0) // not yet!
    expect(onDeactivated).toHaveBeenCalledTimes(0) // not yet!

    fireEvent.click(screen.getByText('Action'))

    expect(onActivate).toHaveBeenCalledTimes(1) // only once
    expect(onActivated).toHaveBeenCalledTimes(1) // only once
    expect(onDeactivate).toHaveBeenCalledTimes(1)
    expect(onDeactivated).toHaveBeenCalledTimes(1)
  })

  /**
   * Test setting initial active state using defaultActive prop
   */
  it('state should default to defaultActive when passed', () => {
    render(
      <TestComponent defaultActive>
        <TestComponent.Action>Action</TestComponent.Action>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    expect(screen.queryByText('Content')).toBeInTheDocument()
  })

  /**
   * Test that clicking outside of the container component will deactivate it
   * if clickHandler is true
   */
  it('should deactivate when clickHandler is true', async () => {
    render(
      <div>
        <button type='button'>External</button>
        <TestComponent clickEvents={false}>
          <TestComponent.Action>No handler action</TestComponent.Action>
          <TestComponent.Content>No handler content</TestComponent.Content>
        </TestComponent>
        <TestComponent clickEvents>
          <TestComponent.Action>Handler action</TestComponent.Action>
          <TestComponent.Content>Handler content</TestComponent.Content>
        </TestComponent>
      </div>,
    )

    // Both content elements should be hidden
    expect(screen.queryByText('No handler content')).not.toBeInTheDocument()
    expect(screen.queryByText('Handler content')).not.toBeInTheDocument()

    // Element without click events should not close when click outside
    fireEvent.click(screen.getByText('No handler action'))
    expect(screen.queryByText('No handler content')).toBeInTheDocument()
    fireEvent.mouseUp(screen.getByText('External'))
    expect(screen.queryByText('No handler content')).toBeInTheDocument()

    // Click outside element with click events should deactivate it
    fireEvent.click(screen.getByText('Handler action'))
    expect(screen.queryByText('Handler content')).toBeInTheDocument()
    fireEvent.mouseUp(screen.getByText('External'))
    await waitForElementToBeRemoved(() => screen.queryByText('Handler content')) // visible transition requires waitFor
  })

  /**
   * Test that the esc handler works
   */
  it('should deactivate on esc if escEvents is true', async () => {
    const { container } = render(
      <div>
        <TestComponent escEvents={false}>
          <TestComponent.Action>No handler action</TestComponent.Action>
          <TestComponent.Content>No handler content</TestComponent.Content>
        </TestComponent>
        <TestComponent escEvents>
          <TestComponent.Action>Handler action</TestComponent.Action>
          <TestComponent.Content>Handler content</TestComponent.Content>
        </TestComponent>
      </div>,
    )

    // Both content elements should be hidden
    expect(screen.queryByText('No handler content')).not.toBeInTheDocument()
    expect(screen.queryByText('Handler content')).not.toBeInTheDocument()

    // Esc keydown should not deactivate
    fireEvent.click(screen.getByText('No handler action'))
    expect(screen.queryByText('No handler content')).toBeInTheDocument()
    fireEvent.keyDown(container, { key: 'Escape', code: 27, which: 27 })
    expect(screen.queryByText('No handler content')).toBeInTheDocument()

    // Esc keydown should deactivate it
    fireEvent.click(screen.getByText('Handler action'))
    expect(screen.queryByText('Handler content')).toBeInTheDocument()
    fireEvent.keyDown(container, { key: 'Escape', code: 27, which: 27 })
    await waitForElementToBeRemoved(() => screen.queryByText('Handler content')) // visible transition requires waitFor
  })

  /**
   * Test that the mouse events handler works
   */
  it('should handle mouse events when mouseEvents is true', async () => {
    render(
      <div>
        <TestComponent mouseEvents={false}>
          <TestComponent.Action>No handler action</TestComponent.Action>
          <TestComponent.Content>No handler content</TestComponent.Content>
        </TestComponent>
        <TestComponent mouseEvents>
          <TestComponent.Action>Handler action</TestComponent.Action>
          <TestComponent.Content>Handler content</TestComponent.Content>
        </TestComponent>
      </div>,
    )

    // Both content elements should be hidden
    expect(screen.queryByText('No handler content')).not.toBeInTheDocument()
    expect(screen.queryByText('Handler content')).not.toBeInTheDocument()

    // Element without mouse events should not change
    fireEvent.mouseEnter(screen.getByText('No handler action'))
    expect(screen.queryByText('No handler content')).not.toBeInTheDocument()
    fireEvent.mouseLeave(screen.getByText('No handler action'))
    expect(screen.queryByText('No handler content')).not.toBeInTheDocument()

    // Element with mouse events should activate/deactivate
    fireEvent.mouseEnter(screen.getByText('Handler action'))
    expect(screen.queryByText('Handler content')).toBeInTheDocument()
    fireEvent.mouseLeave(screen.getByText('Handler action'))
    await waitForElementToBeRemoved(() => screen.queryByText('Handler content')) // visible transition requires waitFor
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
  it('should not use active prop when value is undefined', () => {
    const { rerender } = render(
      <TestComponent>
        <TestComponent.Action>Action</TestComponent.Action>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    rerender(
      <TestComponent>
        <TestComponent.Action>Action</TestComponent.Action>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  /**
   * Test controlled component for methods `activate` and `deactivate`. Passing
   * these should override internal activate/deactivate meaning that clicking
   * the action for an element should only call those passed props.
   */
  it('should use passed activate and deactivate functions', async () => {
    const activate = jest.fn()
    const deactivate = jest.fn()
    const { rerender } = render(
      <TestComponent activate={activate} active={false} deactivate={deactivate}>
        <TestComponent.Action>Action</TestComponent.Action>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )

    fireEvent.click(screen.getByText('Action'))

    // We have overridden the activate event so content should still be hidden
    // and clicking again should call *activate* again

    expect(activate).toHaveBeenCalledTimes(1)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Action'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(0)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    // Mock controlled component being passed true, click should now ONLY call deactivate
    rerender(
      <TestComponent activate={activate} deactivate={deactivate} active>
        <TestComponent.Action>Action</TestComponent.Action>
        <TestComponent.Content>Content</TestComponent.Content>
      </TestComponent>,
    )
    fireEvent.click(screen.getByText('Action'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(1)
    expect(screen.queryByText('Content')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Action'))

    expect(activate).toHaveBeenCalledTimes(2)
    expect(deactivate).toHaveBeenCalledTimes(2)
    expect(screen.queryByText('Content')).toBeInTheDocument()
  })

  /**
   * Test that any flavor of the `<Active />` component exposes internal state and
   * state change methods using the FaCC pattern
   */
  it('should expose internals using FaCC pattern', async () => {
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
    fireEvent.click(screen.getByText('activate'))
    expect(screen.getByText('true')).toBeInTheDocument()
    fireEvent.click(screen.getByText('deactivate'))
    expect(screen.getByText('false')).toBeInTheDocument()
  })

  // TODO: test multi-element active components (Drawer, Tabs)
}
