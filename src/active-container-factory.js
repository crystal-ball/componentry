// @flow
import React, { Component, type ComponentType, type Node } from 'react'
import nanoid from 'nanoid'

import ActiveProvider from './Active/ActiveProvider'
import elem from './elem-factory'
import { closest } from './utils/dom'
import { cleanActive } from './utils/clean-props'

type Options = {
  /** Component's `Content` subcomponent */
  Content: ComponentType<any>,
  /** Component's `Trigger` subcomponent */
  Trigger: ComponentType<any>,

  /**
   * Set the default state for active (and visible if transitionState is enabled).
   */
  defaultActive?: boolean,
  /**
   * Default direction for directional content components
   */
  defaultDirection?: 'top' | 'right' | 'bottom' | 'left',
  /**
   * For active state components that should have a transition, eg Alerts and
   * Modals. Setting this to true will provide visibility and active props to
   * transition opacity before updating active state
   */
  transitionState?: boolean,

  /** Name of element, used for classes and handler selection */
  element: string,
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
  // Active handlers
  onActivate?: Function,
  onActivated?: Function,
  onDeactivate?: Function,
  onDeactivated?: Function,
  // Pass to override and create controlled component
  active?: boolean,
  defaultActive?: boolean | string,
  activate?: Function,
  deactivate?: Function,
}

type State = {
  active: boolean | string,
  // visible: boolean,
}

/**
 * Factory returns custom `<Active />` components defined by the options. Active
 * components are responsible for:
 *
 * 1. Creating a scoped `active` value (type boolean for single set of
 *    trigger+content, string for set of triggers+content)
 * 2. Exposing internal `activate` and`deactivate` methods for changing `active`
 *    state
 * 3. On `active` change add or remove configured event listeners
 *
 * NOTE: The `handleActivate` and `handleDeactivate` methods are passed through
 * context as the `activate` and `deactivate` handlers for subcomponents to _always_
 * use. This ensures that we can always hook into the change events for internal
 * needs like setting or removing special event listeners.
 */
export default ({
  Content,
  Trigger,
  defaultDirection,
  defaultActive,
  element,
  escHandler = true,
  clickHandler,
  mouseEvents,
}: Options) =>
  class ActiveContainer extends Component<Props, State> {
    state = {
      active:
        this.props.defaultActive !== undefined
          ? this.props.defaultActive
          : defaultActive || false,
      // visible:
      //   this.props.defaultActive !== undefined
      //     ? this.props.defaultActive
      //     : defaultActive || false,
      transitionDuration: 300,
    }

    static defaultProps = {}

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
     * Props ALWAYS overrides whatever the active state is, but we always use
     * internal component state for consistency/clarity
     */
    static getDerivedStateFromProps({ active }: Props) {
      return active !== undefined ? { active } : null
    }

    /**
     * Subscribe to active changes on mount. When active changes setup or remove any
     * configured special listeners for events like pressing `esc` or clicking
     * outside the component. For FaCC usage, force a render to ensure exposed
     * `active` value updates.
     */
    componentDidMount() {
      if (this.state.active === true) this.updateEventListeners('add')
    }
    /**
     * Whenever component updates, handle updating listeners
     * TODO: may need an instance property of 'listenersAttached' to safegaurd
     * against attaching listeners multiple times...
     */
    componentDidUpdate() {
      const { active } = this.state

      if (active === true) {
        this.updateEventListeners('add')
      } else if (active === false) {
        this.updateEventListeners('remove')
      }
    }
    /**
     * Remove subscription on unmount!
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

      // Activation: Handle attaching activation listeners for special close
      // events
      if (escHandler) {
        // Add a keydown listener to handle pressing `esc`
        // $FlowIgnore
        document[updateListener]('keydown', this.keyHandler)
      }

      if (clickHandler) {
        // Add click+touch listener to handle clicking outside component
        // $FlowIgnore
        document[updateListener]('mouseup', this.clickHandler)
        // $FlowIgnore
        document[updateListener]('touchend', this.clickHandler)
      }
    }
    /** Calls activation hooks and `activate` function */
    handleActivate = (e: SyntheticEvent<>) => {
      const { onActivate, activate, onActivated } = this.props
      if (onActivate) onActivate(e, this)
      console.log({ activate })
      if (activate) {
        activate(e, this)
      } else {
        // Elements that track an active string id set the id as the target value,
        // if it's present use it otherwise use boolean.
        // $FlowFixMe
        this.setState({ active: e.target.value || true })
      }

      if (onActivated) onActivated(e, this)
    }
    /** Calls deactivation hooks and `deactivate` function */
    handleDeactivate = (e: SyntheticEvent<> | Event) => {
      const { onDeactivate, deactivate, onDeactivated } = this.props
      if (onDeactivate) onDeactivate(e, this)

      if (deactivate) {
        deactivate(e, this)
      } else {
        this.setState({ active: false })
      }

      if (onDeactivated) onDeactivated(e, this)
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      const {
        Content: PropsContent,
        Trigger: PropsTrigger,
        children,
        direction,
        ...rest
      }: Props = this.props
      const { active } = this.state

      const activeValues = {
        active,
        activate: this.handleActivate,
        deactivate: this.handleDeactivate,
        guid: this.guid,
      }

      // Handles FaCC style usage
      if (typeof children === 'function') {
        // We still need to wrap with a context provider so that withActive can
        // use context Consumers
        return (
          <ActiveProvider.Provider value={activeValues}>
            {children(activeValues)}
          </ActiveProvider.Provider>
        )
      }

      // Handles default component style usage
      return elem({
        'data-test': element ? `${element}-container` : undefined,
        'data-id': this.guid,
        classes: [element, direction || defaultDirection],
        // For elements with mouse events we need to know when the mouse event
        // occurs on the parent element, not the trigger element
        onMouseEnter: mouseEvents ? this.handleActivate : undefined,
        onMouseLeave: mouseEvents ? this.handleDeactivate : undefined,
        // If shorthand values for Trigger/Content were passed in props, render
        // subcomponents with prop as children
        children: (
          <ActiveProvider.Provider value={activeValues}>
            {PropsTrigger && <Trigger>{PropsTrigger}</Trigger>}
            {children}
            {PropsContent && <Content>{PropsContent}</Content>}
          </ActiveProvider.Provider>
        ),
        ...cleanActive(rest),
      })
    }
  }
