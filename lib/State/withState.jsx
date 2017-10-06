/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import nanoid from 'nanoid'

import getDisplayName from '../utils/getDisplayName'
import cleanProps from '../utils/clean-props'

/**
 * This class handles managing an `active` property and exposes a subscribe callback
 * for listening for changes to `active`. It is used as an instance property for
 * each `withState` HOC to create a scoped `active` boolean available through
 * context.
 *
 * Design heavily borrowed from https://github.com/ReactTraining/react-broadcast
 */
class ActiveState {
  subscriptions = []

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
    this.subscriptions.push(subscription)

    // Method will remove the subscription from the active list when called
    return () => {
      this.subscriptions = this.subscriptions.filter(item => item !== subscription)
    }
  }
}

/**
 * The `withState` HOC is a Provider component and exposes an `active` state boolean
 * to any child component using context. This context should not be accessed
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
 * listeners will call the passed `activate`/`deactivate` which gives control over
 * when to change state.
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
      deactivate: func
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

    // Methods
    // ---------------------------------------------------------------------------
    /**
     * HOC handles calling `activate/deactivate` functions. The component can be
     * controlled by passing as props, otherwise default to updating internal state
     * on context.
     *
     * NOTE: this seems like the best place to call on* handlers, is that true?
     */

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

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * For controlled components active can be passed as a prop. When this happens
     * we update the internal state handler, which then notifies children
     * compoenents of the change.
     * @param {Object} nextProps
     */
    componentWillReceiveProps({ active }) {
      if (this.activeState.active !== active) this.activeState.setActive(active)
    }
    /**
     * Subscribe to active handler on mount. We are rerendering entire element any
     * time that state changes.
     */
    componentDidMount() {
      this.unsubscribe = this.activeState.subscribe(active => {
        // TODO: should we only do this when active isn't passed as a prop???
        this.setState({ active })
      })
    }
    /**
     * Remove subscription on unmount!
     */
    componentWillUnmount() {
      this.unsubscribe()
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      const dom = cleanProps(this.props, [
        'onActivate',
        'onActivated',
        'onDeactivate',
        'onDeactivated'
      ])

      return (
        <Wrapped
          active={this.activeState.getActive()}
          activate={this.handleActivate}
          deactivate={this.handleDeactivate}
          guid={this.guid}
          {...dom}
        />
      )
    }
  }

export default withState
