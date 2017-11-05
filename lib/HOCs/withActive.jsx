// @flow
import React, { Component } from 'react'
import type { ComponentType } from 'react'
import { func, shape, string } from 'prop-types'

import getDisplayName from '../utils/getDisplayName'

type State = {
  active: boolean
}

type Options = {
  subscribe?: boolean,
  controls?: boolean,
  describedby?: boolean,
  expanded?: boolean,
  haspopup?: boolean,
  hidden?: boolean,
  labelledby?: boolean,
  id?: boolean,
  role?: string
}

/**
 * HOC passes active state props along with computed aria attributes for the state.
 * The `active`, `activate` and `deactivate` props are passed from active state
 * provider through context.
 * @param ariaConfigs Options object describes aria attributes to pass down
 */
export default (ariaConfigs: Options = {}) => (Wrapped: ComponentType<*>) =>
  class WithActive extends Component<{}, State> {
    unsubscribe: Function

    // $FlowFixMe
    static Header = Wrapped.Header
    // $FlowFixMe
    static Body = Wrapped.Body
    // $FlowFixMe
    static Footer = Wrapped.Footer
    // $FlowFixMe
    static Title = Wrapped.Title

    // $FlowFixMe
    static displayName = `withActive${getDisplayName(Wrapped)}`

    static contextTypes = {
      C_ACTIVE: shape({
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
    state = { active: false }

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * Ensure that state used for causing renders matches context state before first
     * render
     */
    componentWillMount() {
      const { C_ACTIVE } = this.context
      if (!C_ACTIVE) return
      const active = C_ACTIVE.getActive()
      if (this.state.active !== active) this.setState({ active })
    }
    /**
     * Subscribe to active state updates on mount, trigger renders with setState
     * when state changes. Typically this won't be needed b/c parent component will
     * rerender on active state change. We still subscribe in case
     * `shouldComponentUpdate` on an intermediate component returns false.
     */
    componentDidMount() {
      const { C_ACTIVE } = this.context
      if (ariaConfigs.subscribe === false || !C_ACTIVE) return

      this.unsubscribe = C_ACTIVE.subscribe(active => {
        if (active !== this.state.active) this.setState({ active })
      })
    }
    /**
     * Remove subscription on unmount!
     */
    componentWillUnmount() {
      if (ariaConfigs.subscribe !== false) this.unsubscribe()
    }

    // Render
    // ---------------------------------------------------------------------------
    render() {
      const { C_ACTIVE } = this.context
      const { activate, deactivate, guid, getActive } = C_ACTIVE || {}
      const active = getActive ? getActive() : false

      const arias = {
        'aria-controls': ariaConfigs.controls ? guid : null,
        'aria-describedby': ariaConfigs.describedby ? guid : null,
        'aria-expanded': ariaConfigs.expanded ? String(active) : null,
        'aria-haspopup': ariaConfigs.haspopup ? 'true' : null,
        'aria-hidden': ariaConfigs.hidden ? String(!active) : null,
        'aria-labelledby': ariaConfigs.labelledby ? guid : null,
        id: ariaConfigs.id ? guid : null,
        role: ariaConfigs.role
      }

      return (
        <Wrapped
          active={active}
          activate={activate}
          deactivate={deactivate}
          {...arias}
          {...this.props}
        />
      )
    }
  }
