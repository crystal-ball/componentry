import React, { Component, Fragment } from 'react'
import nanoid from 'nanoid'

import ActiveProvider from './ActiveProvider'
import elem from './elem-factory'
import { closest } from './utils/dom'

/**
 * Factory returns custom `<Active />` components defined by the options. Active
 * components are responsible for:
 *
 * 1. Creating a scoped `active` value (type boolean for single set of
 *    trigger+content, string for set of triggers+content).
 * 2. Exposing internal `activate` and`deactivate` methods for changing `active`
 *    state.
 * 3. On `active` change add or remove configured event listeners and fire
 *    change listeners.
 *
 * NOTE: The `handleActivate` and `handleDeactivate` methods are passed through
 * context as the `activate` and `deactivate` handlers for subcomponents to _always_
 * use. This ensures that we can always hook into the change events for internal
 * needs like setting or removing special event listeners.
 */
export default ({
  /** Default class names to pass to component */
  classes,
  /** When true call deactivate on `esc` keypress */
  escHandler,
  /** When true call deactivate on click outside of element */
  clickHandler,
  /** Default direction for directional elements */
  defaultDirection = null,
  /** When true the state container will register handlers for mouse events */
  defaultMouseEvents = false,
}) =>
  class ActiveContainer extends Component {
    /**
     * Prop Types
     * ---
     * // Subcomponent shorthand props
     * Content: node,
     * Trigger: node,
     * // Component props
     * as: oneOfType([func, node, element])
     * children: oneOfType([node, func]),
     * className: string,
     * direction: oneOf(['top', 'right', 'bottom', 'left', 'overlay']),
     * // Active change listeners
     * onActivate: func,
     * onActivated: func,
     * onDeactivate: func,
     * onDeactivated: func,
     * // Passed props to create a controlled component
     * active: bool,
     * defaultActive: oneOfType([bool, string]),
     * activate: func,
     * deactivate: func,
     * mouseEvents: bool,
     */

    static defaultProps = {
      defaultActive: false,
    }

    state = {
      active: this.props.defaultActive,
    }

    /**
     * Guid instance property will be uniquely assigned once for each component
     * instance, this unique id is then passed through context where it can be used
     * to bind together aria attributes. _(In testing use 'guid' for consistent
     * snapshots.)_
     */
    guid = process.env.NODE_ENV === 'test' ? 'guid' : nanoid()

    // Hooks
    // ---------------------------------------------------------------------------

    /**
     * Props ALWAYS overrides whatever the active state is (controlled component).
     * But we always use internal component state for managing active state.
     */
    static getDerivedStateFromProps({ active }) {
      return active !== undefined ? { active } : null
    }

    /**
     * Event listeners are assigned in `componentDidUpdate` on active change,
     * and we need to check on mount if for adding listeners (b/c didUpdate
     * doesn't fire during mount)
     */
    componentDidMount() {
      // TODO: validate that state is correct when active is defaulted to true
      // with `defaultActive`
      if (this.state.active === true) this.updateEventListeners('add')
    }

    /**
     * On active change, add/remove configured event listeners.
     */
    componentDidUpdate() {
      const { active } = this.state

      // TODO: may need an instance property of 'listenersAttached' to safegaurd
      // against attaching listeners multiple times...
      if (active === true) {
        this.updateEventListeners('add')
      } else if (active === false) {
        this.updateEventListeners('remove')
      }
    }

    /**
     * Clean up any listeners on unmount!
     */
    componentWillUnmount() {
      this.updateEventListeners('remove')
    }

    // Methods
    // ---------------------------------------------------------------------------

    /**
     * Call deactivate if click event was not inside the element
     */
    clickHandler: EventHandler = e => {
      if (!closest(e.target, this.guid)) this.handleDeactivate(e)
    }

    /**
     * Call deactivate on keypress if `esc` (27) was pressed
     */
    keyHandler: KeyboardEventHandler = e => {
      if (e.which === 27) this.handleDeactivate(e)
    }

    updateEventListeners = updateType => {
      const updateListener = `${updateType}EventListener`

      if (escHandler) {
        document[updateListener]('keydown', this.keyHandler)
      }

      if (clickHandler) {
        document[updateListener]('mouseup', this.clickHandler)
        document[updateListener]('touchend', this.clickHandler)
      }
    }

    /**
     * Internal activation handler (manages active state and fires change
     * listeners)
     */
    handleActivate = e => {
      const { onActivate, activate, onActivated } = this.props

      if (activate) {
        activate(e, this)
      } else {
        if (onActivate) onActivate(e, this)
        // Elements that track an active string id set the id as the target value,
        // if it's present use it otherwise use boolean.
        // $FlowFixMe
        this.setState({ active: e.target.value || true })
        if (onActivated) onActivated(e, this)
      }
    }

    /**
     * Internal deactivation handler (manages active state and fires change
     * listeners)
     */
    handleDeactivate = e => {
      const { onDeactivate, deactivate, onDeactivated } = this.props

      if (deactivate) {
        deactivate(e, this)
      } else {
        if (onDeactivate) onDeactivate(e, this)
        this.setState({ active: false })
        if (onDeactivated) onDeactivated(e, this)
      }
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      const {
        Content,
        Trigger,
        children,
        direction = defaultDirection,
        mouseEvents = defaultMouseEvents,
        ...rest
      } = this.props
      const { active } = this.state

      const activeValues = {
        active,
        activate: this.handleActivate,
        deactivate: this.handleDeactivate,
        guid: this.guid,
      }

      // TODO: only wrap elements with a `div` when the element needs it
      return (
        <ActiveProvider.Provider value={activeValues}>
          {elem({
            'data-id': this.guid,
            classes: [classes, direction],
            // For elements with mouse events we need to know when the mouse event
            // occurs on the parent element, not the trigger element
            onMouseEnter: mouseEvents ? this.handleActivate : undefined,
            onMouseLeave: mouseEvents ? this.handleDeactivate : undefined,
            // If shorthand values for Trigger/Content were passed in props, render
            // subcomponents with prop as children
            children:
              typeof children === 'function' ? (
                children(activeValues) // Handle FaCC syntax
              ) : (
                <Fragment>
                  {Trigger && (
                    <ActiveContainer.Trigger>{Trigger}</ActiveContainer.Trigger>
                  )}
                  {children}
                  {Content && (
                    <ActiveContainer.Content>{Content}</ActiveContainer.Content>
                  )}
                </Fragment>
              ),
            ...rest,
          })}
        </ActiveProvider.Provider>
      )
    }
  }
