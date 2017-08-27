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

  subscribe = subscription => {
    console.log('subscribing') // eslint-disable-line
    this.subscriptions.push(subscription)
  }
}

/**
 * @param {Object} stateConfigs
 */
export default ({ active = false, mouseEvents, type, tip } = {}) => Wrapped =>
  class WithState extends Component {
    static displayName = `withState${getDisplayName(Wrapped)}`

    constructor(props) {
      super(props)
      this.activeStateHandler = new ActiveStateHandler(active)
    }

    static childContextTypes = {
      componentry_state: shape({
        active,
        bool,
        guid: string,
        mouseEvents: bool,
        subscribe: func,
        tip: bool,
        type: string
      })
    }

    getChildContext = () => ({
      componentry_state: {
        activate: this.activate,
        active: this.activeStateHandler.active,
        deactivate: this.deactivate,
        guid: this.guid,
        mouseEvents,
        subscribe: this.activeStateHandler.subscribe,
        tip,
        toggle: this.toggle,
        type: type || 'state'
      }
    })
    /**
     * Guid instance property will be uniquely assigned once for each modal instance,
     * this unique id is then passed to all children through context where it can be
     * used to wire together title aria attributes
     */
    guid = nanoid()

    activate = () => {
      console.log('activate!') // eslint-disable-line
      this.activeStateHandler.setActive(true)
    }
    deactivate = () => {
      console.log('deactivate') // eslint-disable-line
      this.activeStateHandler.setActive(false)
    }
    toggle = () => {
      console.log('toggle') // eslint-disable-line
      if (this.activeStateHandler.active) {
        this.deactivate()
      } else {
        this.activate()
      }
    }

    render() {
      return <Wrapped {...this.props} />
    }
  }

// update theme whenever needed. This propagate changes to subscribed components
// componentWillReceiveProps(next) {
//   this.contextActive.setActive(next.active)
// }
