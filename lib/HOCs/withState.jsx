import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import nanoid from 'nanoid'

import getDisplayName from '../utils/getDisplayName'

/**
 * This class handles managing an `active` state and exposes a subscribe callback
 * for listening for changes to `active`. It is used as an instance property for
 * each `withState` HOC to create a scoped `active` boolean available through
 * context.
 *
 * Design heavily borrowed from https://github.com/ReactTraining/react-broadcast
 */
class ActiveState {
  subscriptions = []

  /**
   * Set active in constructor to allow creating components with specific initial
   * states
   */
  constructor(active = false) {
    this.active = active
  }
  /**
   * Use a method to get current state b/c state is a primitive and assigning it in
   * `getContext` will copy value rather than pointing to instance value
   * */
  getActive = () => this.active
  /**
   * Update active state property internally and notify all subscribers that a change
   * has occurred.
   */
  setActive = active => {
    this.active = active
    this.subscriptions.forEach(subscription => subscription(active))
  }
  /**
   * Subcomponents call subscribe to be notified when active state has changed.
   * Return a function subcomponent can call to unsubscribe on unMount
   */
  subscribe = subscription => {
    const { subscriptions } = this
    subscriptions.push(subscription)

    // Method will remove the subscription from the active list when called
    return () => {
      this.subscriptions = subscriptions.filter(item => item !== subscription)
    }
  }
}

/**
 * The `withState` HOC is a Provider component that exposes an `active` state
 * boolean to any child component using context. This context should not be accessed
 * directly. The `withActive` HOC is available for passing `active` and state change
 * handlers as props.
 *
 * ## Controlled vs Uncontrolled State
 * By default `withState` components are uncontrolled, the active state is
 * automatically updated directly by this HOC. For controlled components pass
 * `activate` or `deactivate` methods that will be called instead.
 *
 * The wrapped components (eg Dropdown, Tooltip, etc.) handle adding/removing event
 * listeners separately based on when the `active` prop changes. These event
 * listeners will call the passed `activate`/`deactivate` props. This lets us
 * auto-wire any event listeners for consumers, but still allow them to control when
 * to change state.
 * @method withState
 * @param {Component} Wrapped Component to wrap with active state handling
 */
const withState = Wrapped =>
  class WithState extends Component {
    static displayName = `withState${getDisplayName(Wrapped)}`
    /**
     * Class statics are not copied to `withActive`. See 'Static Methods Must Be
     * Copied Over: https://facebook.github.io/react/docs/higher-order-components.html
     * The package `hoist-non-react-statics` is a solution for automatically copying
     * all class statics, but unless it becomes commonplace to use the library HOCs
     * with external components, this seems unnecessary. For now, we know that
     * statics that are required and manually transfer them
     */
    static Content = Wrapped.Content
    static Trigger = Wrapped.Trigger
    static Item = Wrapped.Item

    static propTypes = {
      active: bool,
      activate: func,
      deactivate: func,
      onActivate: func,
      onActivated: func,
      onDeactivate: func,
      onDeactivated: func
    }

    static childContextTypes = {
      // Context cannot change! Passed context is a wrapper that should not change
      // use caps to signify it is a constant, only the internal values can change
      COMPONENTRY_ACTIVE: shape({
        activate: func,
        deactivate: func,
        getActive: func,
        guid: string,
        subscribe: func
      })
    }

    /**
     * Active state is only used to trigger renders, passed state should only come
     * from context.
     */
    state = { active: null }

    /**
     * Each instance has a separate class handling the state. Context is scoped and
     * only that class' state is passed.
     */
    activeState = new ActiveState(this.props.active)
    /**
     * Guid instance property will be uniquely assigned once for each modal
     * instance, this unique id is then passed to all children through context where
     * it can be used to wire together title aria attributes.
     *
     * In testing re-use 'guid' for consistent snapshots
     */
    guid = process.env.NODE_ENV === 'test' ? 'guid' : nanoid()

    // Hooks
    // ---------------------------------------------------------------------------
    getChildContext = () => ({
      COMPONENTRY_ACTIVE: {
        activate: this.handleActivate,
        deactivate: this.handleDeactivate,
        getActive: this.activeState.getActive,
        guid: this.guid,
        subscribe: this.activeState.subscribe
      }
    })
    /**
     * For controlled components active can be passed as a prop. When this happens
     * we update the internal state handler, which then notifies children
     * compoenents of the change.
     * @param {Object} nextProps
     */
    componentWillReceiveProps({ active }) {
      // If active is not explicitly passed, it will always be undefined, we only
      // want to update state when a value is passed.
      if (active === undefined) return
      if (this.activeState.active !== active) this.activeState.setActive(active)
    }
    /**
     * Subscribe to active handler on mount. We are rerendering entire element any
     * time that state changes.
     */
    componentDidMount() {
      this.unsubscribe = this.activeState.subscribe(active => {
        if (this.state.active !== active) this.setState({ active })
      })
    }
    /**
     * Remove subscription on unmount!
     */
    componentWillUnmount() {
      this.unsubscribe()
    }

    // Methods
    // ---------------------------------------------------------------------------
    /**
     * ## NOTE
     * Internal `handle*` methods are _always_ passed as props, this ensures that we
     * can always hook into events for internal needs. This is inside this HOC
     * because we need to set the `activate` and `deactivate` methods on the context
     * for child components, so it seems like the best option, but these handlers
     * don't _feel_ like they should be here? Is there a better place or pattern for
     * this?
     */

    /** Call activation hooks and `activate` function */
    handleActivate = e => {
      const { onActivate, activate, onActivated } = this.props
      if (onActivate) onActivate(e, this)

      if (activate) {
        activate(e, this)
      } else {
        this.activeState.setActive(true)
      }

      if (onActivated) onActivated(e, this)
    }
    /** Call deactivation hooks and `deactivate` function */
    handleDeactivate = e => {
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
      // Don't pass user hooks through
      const {
        onActivate,
        onActivated,
        onDeactivate,
        onDeactivated,
        ...rest
      } = this.props

      return (
        // See note on ordering of passed props and active state handlers
        <Wrapped
          guid={this.guid}
          {...rest}
          active={this.activeState.getActive()}
          activate={this.handleActivate}
          deactivate={this.handleDeactivate}
        />
      )
    }
  }

export default withState
