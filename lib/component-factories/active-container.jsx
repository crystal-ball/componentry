// @flow
import React, { Component, createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { func, object, shape, string } from 'prop-types'
import classNames from 'classnames'
import nanoid from 'nanoid'

import { closest } from '../utils/dom'

type Active = boolean | string

/**
 * Class handles managing an `active` state and exposes a subscribe callback for
 * listening for changes to `active`. It is used as an instance property for each
 * active container component to create a scoped `active`.
 *
 * Design heavily borrowed from https://github.com/ReactTraining/react-broadcast
 */
class ActiveState {
  /**
   * The active state can be a string or a boolean. Booleans are used for elements
   * with a singular show/hide, strings for elements that coordinate multiple
   * show/hide elements.
   */
  active: Active = false
  /**
   * Each element tracks any subscribers that are notified when the active state
   * changes.
   */
  subscriptions: Array<Function> = []

  /**
   * Constructor accepts an optional `defaultActive` for creating components with
   * specified initial state.
   */
  constructor(defaultActive: Active) {
    if (defaultActive !== undefined) this.active = defaultActive
  }
  /**
   * Returns the current active value. _(It's important to access this method
   * through context instead of setting the active value on context b/c state is a
   * primitive and assigning it in `getContext` will only copy the initial value,
   * and subsequent access will be stale.)_
   */
  getActive = () => this.active
  /**
   * When the `active` state changes, update internal value and notify all
   * subscribers with new value.
   */
  setActive = (active: Active) => {
    // Don't update if there isn't a change
    if (this.active !== active) {
      this.active = active
      this.subscriptions.forEach(subscription => subscription(active))
    }
  }
  /**
   * Subcomponents can subscribe to be notified when active state has changed.
   * Method returns an unsubscribe function that subcomponents should call on
   * unmount.
   */
  subscribe = (subscription: Function) => {
    const { subscriptions } = this
    subscriptions.push(subscription)

    // Method will remove the subscription from the active list when called
    return () => {
      this.subscriptions = subscriptions.filter(item => item !== subscription)
    }
  }
}

type Options = {
  /** Component's `Content` subcomponent */
  Content: ComponentType<any>,
  /** Component's `Trigger` subcomponent */
  Trigger: ComponentType<any>,
  /** Name of element, used for classes and handler selection */
  element?: string,
  /** When tue the state container will register handlers for mouse events */
  mouseEvents?: boolean,
  /** The display name for the component, specified for better debugging */
  name: string,
  /** When true call deactivate on `esc` keypress */
  escHandler?: boolean,
  /** When true call deactivate on click outside of element */
  externalClickHandler?: boolean,
}

// TODO: is this fixable?
/* eslint-disable react/no-unused-prop-types */
type Props = {
  // Subcomponent shorthand props
  Content?: string,
  Trigger?: string,
  // Component props
  as?: ComponentType<any> | string,
  children?: Node | Function,
  className?: string,
  // Active handlers
  onActivate: Function,
  onActivated: Function,
  onDeactivate: Function,
  onDeactivated: Function,
  // Pass to override and create controlled component
  defaultActive: boolean | string,
  activate: Function,
  active: boolean,
  deactivate: Function,
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
  element,
  mouseEvents,
  name,
  escHandler,
  externalClickHandler,
  Content,
  Trigger,
}: Options) =>
  class StateContainer extends Component<Props> {
    unsubscribe: Function
    // TODO: Is there a way to document these without the repitition?
    static Content: ComponentType<*>
    static Trigger: ComponentType<*>
    static Item: ComponentType<*> | void
    static Body: ComponentType<*> | void
    static Header: ComponentType<*> | void
    static Nav: ComponentType<*> | void
    static ContentContainer: ComponentType<*> | void

    static displayName = name

    static contextTypes = { THEME: shape({ [name]: object }) }

    static childContextTypes = {
      // Context cannot change! Passed context is a wrapper that should not change.
      // Object is a 'constant', only the internal values can change.
      ACTIVE: shape({
        activate: func,
        deactivate: func,
        getActive: func,
        guid: string,
        subscribe: func,
      }),
    }

    /**
     * Each instance has a separate class handling the state. Context is scoped and
     * only that class' state is passed. _(Create each new instance with passed
     * defaultActive for specified state, defaults to false)_
     */
    activeState = new ActiveState(this.props.defaultActive)
    /**
     * Guid instance property will be uniquely assigned once for each component
     * instance, this unique id is then passed through context where it can be used
     * to bind together aria attributes. _(In testing use 'guid' for consistent
     * snapshots.)_
     */
    guid = process.env.NODE_ENV === 'test' ? 'guid' : nanoid()

    // Hooks
    // ---------------------------------------------------------------------------
    getChildContext = () => ({
      ACTIVE: {
        activate: this.handleActivate,
        deactivate: this.handleDeactivate,
        getActive: this.activeState.getActive,
        guid: this.guid,
        subscribe: this.activeState.subscribe,
      },
    })
    /**
     * Subscribe to active changes on mount. When active changes setup or remove any
     * configured special listeners for events like pressing `esc` or clicking
     * outside the component. For FaCC usage, force a render to ensure exposed
     * `active` value updates.
     */
    componentDidMount() {
      // NOTE: the subscribe callback will only be called when active ∆, so we don't
      // need to safety check for that here
      this.unsubscribe = this.activeState.subscribe(active => {
        if (active) {
          // Activation: Handle attaching activation listeners for special close
          // events
          if (escHandler) {
            // Add a keydown listener to handle pressing `esc`
            document.addEventListener('keydown', this.keyHandler)
          }

          if (externalClickHandler) {
            // Add click+touch listener to handle clicking outside component
            document.addEventListener('mouseup', this.clickHandler)
            document.addEventListener('touchend', this.clickHandler)
          }
        } else {
          // Deactivation: Handle removing listeners added in activation
          this.removeEventListeners()
        }

        // When component is used with FaCC, force a rerender so that exposed
        // 'active' value updates
        if (typeof this.props.children === 'function') this.forceUpdate()
      })
    }
    /**
     * When `active` is passed as a prop component is the 'controlled' type and we
     * update the internal active class anytime it changes.
     */
    componentWillReceiveProps({ active }: Props) {
      if (active !== undefined) this.activeState.setActive(active)
    }
    /**
     * Remove subscription on unmount!
     */
    componentWillUnmount() {
      this.unsubscribe()
      this.removeEventListeners()
    }

    // Methods
    // ---------------------------------------------------------------------------
    /**
     * Call deactivate if click event was not inside the element
     */
    clickHandler: EventHandler = (e: Event): void => {
      if (!closest(e.target, this.guid)) this.handleDeactivate(e)
      console.log(e.target.dataset)
    }
    /**
     * Call deactivate on keypress if `esc` (27) was pressed
     */
    keyHandler: KeyboardEventHandler = (e: KeyboardEvent): void => {
      if (e.which === 27) this.handleDeactivate(e)
    }
    /**
     * Removes any event listeners that were attached
     */
    removeEventListeners = () => {
      if (escHandler) {
        document.removeEventListener('keydown', this.keyHandler)
      }

      if (externalClickHandler) {
        document.removeEventListener('mouseup', this.clickHandler)
        document.removeEventListener('touchend', this.clickHandler)
      }
    }
    /** Calls activation hooks and `activate` function */
    handleActivate = (e: SyntheticEvent<>) => {
      const { onActivate, activate, onActivated } = this.props
      if (onActivate) onActivate(e, this)

      if (activate) {
        activate(e, this)
      } else {
        // Elements that track an active string id set the id as the target value,
        // if it's present use it otherwise use boolean.
        // $FlowFixMe
        this.activeState.setActive(e.target.value || true)
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
        this.activeState.setActive(false)
      }

      if (onDeactivated) onDeactivated(e, this)
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      const THEME = this.context.THEME || {}
      const componentCtx = THEME[name] || {}
      const {
        Content: ContentProp,
        Trigger: TriggerProp,
        // $FlowFixMe
        as,
        children,
        // YOU SHALL NOT PASS 🙅
        active,
        activate,
        deactivate,
        defaultActive,
        onActivate,
        onActivated,
        onDeactivate,
        onDeactivated,
        className,
        ...rest
      }: Props = { ...componentCtx, ...this.props }

      // When `State` is used with FaCC pattern, call func with state and change
      // methods
      if (typeof children === 'function')
        return children({
          active: this.activeState.getActive(),
          activate: this.handleActivate,
          deactivate: this.handleDeactivate,
          guid: this.guid,
        })

      // In component usage component will only render during initial mount, changes
      // to the active state are communicated by subscribing!
      return createElement(
        as || 'div',
        {
          'data-test': element ? `${element}-container` : undefined,
          'data-id': this.guid,
          className:
            classNames(element, componentCtx.className, this.props.className) ||
            undefined,
          // For elements with mouse events we need to know when the mouse event
          // occurs on the parent element, not the trigger element
          onMouseEnter: mouseEvents ? this.handleActivate : undefined,
          onMouseLeave: mouseEvents ? this.handleDeactivate : undefined,
          ...rest,
        },
        // If shorthand values for Trigger/Content were passed in props, render
        // subcomponents with prop as children
        TriggerProp && <Trigger>{TriggerProp}</Trigger>,
        children || null,
        ContentProp && <Content>{ContentProp}</Content>,
      )
    }
  }
