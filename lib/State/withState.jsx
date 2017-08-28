import React, { Component } from 'react'
import { bool, func, shape, string } from 'prop-types'
import nanoid from 'nanoid'

import getDisplayName from './utils/getDisplayName'

class ActiveStateHandler {
  constructor(active) {
    this.active = active
  }

  subscriptions = []

  setActive = active => {
    this.active = active
    this.subscriptions.forEach(subscription => subscription(active))
  }

  // TODO: Handle unsubscribe
  subscribe = subscription => {
    this.subscriptions.push(subscription)
  }
}

/**
 * @param {Object} stateConfigs
 */
export default ({ active = false, type } = {}) => Wrapped =>
  class WithState extends Component {
    static displayName = `withState${getDisplayName(Wrapped)}`
    /**
     * Class statics are not copied to `WithState`. See 'Static Methods Must Be
     * Copied Over: https://facebook.github.io/react/docs/higher-order-components.html
     * The package `hoist-non-react-statics` is a solution for automatically copying
     * all class statics, but unless it becomes commonplace to use the library HOCs
     * with external components, this seems unnecessary. For now, we know that
     * statics that are required and manually transfer them
     */
    static Content = Wrapped.Content
    static Toggle = Wrapped.Toggle

    constructor(props) {
      super(props)
      this.activeStateHandler = new ActiveStateHandler(active)
    }

    static childContextTypes = {
      componentry_state: shape({
        activate: func,
        active: bool,
        deactivate: func,
        guid: string,
        subscribe: func,
        toggle: func,
        type: string
      })
    }

    getChildContext = () => ({ componentry_state: this.getComponentryState() })
    /**
     * Guid instance property will be uniquely assigned once for each modal instance,
     * this unique id is then passed to all children through context where it can be
     * used to wire together title aria attributes
     */
    guid = nanoid()

    getComponentryState = () => ({
      activate: this.activate,
      active: this.activeStateHandler.active,
      deactivate: this.deactivate,
      guid: this.guid,
      subscribe: this.activeStateHandler.subscribe,
      toggle: this.toggle,
      type: type || 'state'
    })

    activate = () => {
      this.activeStateHandler.setActive(true)
    }
    deactivate = () => {
      this.activeStateHandler.setActive(false)
    }
    toggle = () => {
      this.activeStateHandler.active ? this.deactivate() : this.activate() // eslint-disable-line
    }

    render() {
      return <Wrapped state={this.getComponentryState()} {...this.props} />
    }
  }
