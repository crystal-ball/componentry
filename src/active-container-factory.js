// @flow
import React, { Component, Fragment, type ComponentType, type Node } from 'react'
import nanoid from 'nanoid'

import ActiveProvider from './ActiveProvider'
import elem from './elem-factory'
import { closest } from './utils/dom'
import { cleanActive } from './utils/clean-props'

type Options = {
  /** Component's `Content` subcomponent */
  Content: ComponentType<any>,
  /** Component's `Trigger` subcomponent */
  Trigger: ComponentType<any>,
  /** Default class names to pass to component */
  classes?: string,
  /** When tue the state container will register handlers for mouse events */
  mouseEvents?: boolean,
  /** When true call deactivate on `esc` keypress */
  escHandler?: boolean,
  /** When true call deactivate on click outside of element */
  clickHandler?: boolean,
}

type Props = {
  // Subcomponent shorthand props
  Content?: string,
  Trigger?: string,
  // Component props
  as?: ComponentType<any> | string,
  children?: Node | Function,
  className?: string,
  direction?: 'top' | 'right' | 'bottom' | 'left',
  // Active change listeners
  onActivate?: Function,
  onActivated?: Function,
  onDeactivate?: Function,
  onDeactivated?: Function,
  // Passed props to create a controlled component
  active?: boolean,
  defaultActive: boolean | string,
  activate?: Function,
  deactivate?: Function,
  mouseEvents?: boolean,
}

type State = {
  active: boolean | string,
}

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
  Content,
  Trigger,
  classes,
  escHandler,
  clickHandler,
  mouseEvents: defaultMouseEvents,
}: Options) =>
  class ActiveContainer extends Component<Props, State> {
    static defaultProps = {
      defaultActive: false,
    }

    // TODO: might as well add flow types for these ¯\_(ツ)_/¯
    /* eslint-disable lines-between-class-members */
    static Trigger = Trigger
    static Content = Content
    static Body: ?ComponentType<*>
    static Header: ?ComponentType<*>
    static Nav: ?ComponentType<*>
    static ContentContainer: ?ComponentType<*>
    /* eslint-enable lines-between-class-members */

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
    static getDerivedStateFromProps({ active }: Props) {
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
    clickHandler: EventHandler = (e: Event): void => {
      if (!closest(e.target, this.guid)) this.handleDeactivate(e)
    }

    /**
     * Call deactivate on keypress if `esc` (27) was pressed
     */
    keyHandler: KeyboardEventHandler = (e: KeyboardEvent): void => {
      if (e.which === 27) this.handleDeactivate(e)
    }

    updateEventListeners = (updateType: 'add' | 'remove') => {
      const updateListener = `${updateType}EventListener`

      if (escHandler) {
        // $FlowIgnore
        document[updateListener]('keydown', this.keyHandler)
      }

      if (clickHandler) {
        // $FlowIgnore
        document[updateListener]('mouseup', this.clickHandler)
        // $FlowIgnore
        document[updateListener]('touchend', this.clickHandler)
      }
    }

    /**
     * Internal activation handler (manages active state and fires change
     * listeners)
     */
    handleActivate = (e: SyntheticEvent<>) => {
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
    handleDeactivate = (e: SyntheticEvent<> | Event) => {
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
        Content: PropsContent,
        Trigger: PropsTrigger,
        children,
        direction,
        mouseEvents,
        ...rest
      }: Props = this.props
      const { active } = this.state

      const activeValues = {
        active,
        activate: this.handleActivate,
        deactivate: this.handleDeactivate,
        guid: this.guid,
      }

      const hanldeMouseEvents =
        mouseEvents === undefined ? defaultMouseEvents : mouseEvents

      // Handles FaCC style usage
      if (typeof children === 'function') {
        // ℹ️ Provider is still required so that withActive con pass active
        // context to connected consumers
        return (
          <ActiveProvider.Provider value={activeValues}>
            {children(activeValues)}
          </ActiveProvider.Provider>
        )
      }

      // Handles default component style usage
      // TODO: only wrap elements with a `div` when the element needs it
      return (
        <ActiveProvider.Provider value={activeValues}>
          {elem({
            'data-id': this.guid,
            classes: [classes, direction],
            // For elements with mouse events we need to know when the mouse event
            // occurs on the parent element, not the trigger element
            onMouseEnter: hanldeMouseEvents ? this.handleActivate : undefined,
            onMouseLeave: hanldeMouseEvents ? this.handleDeactivate : undefined,
            // If shorthand values for Trigger/Content were passed in props, render
            // subcomponents with prop as children
            children: (
              <Fragment>
                {PropsTrigger && <Trigger>{PropsTrigger}</Trigger>}
                {children}
                {PropsContent && <Content>{PropsContent}</Content>}
              </Fragment>
            ),
            ...cleanActive(rest),
          })}
        </ActiveProvider.Provider>
      )
    }
  }
