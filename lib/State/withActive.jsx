import React, { Component } from 'react'
import { func, shape, string } from 'prop-types'

import getDisplayName from '../utils/getDisplayName'

/**
 * HOC passes active state props along with computed aria attributes for the state.
 * The `active`, `activate` and `deactivate` props are passed from active state
 * provider through context.
 * @param ariaConfigs Options object describes aria attributes to pass down
 */
const withActive = (ariaConfigs = {}) => Wrapped =>
  class WithActive extends Component {
    static displayName = `withActive${getDisplayName(Wrapped)}`

    static contextTypes = {
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

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * Subscribe to active state updates on mount, trigger renders with setState
     * when state changes. Typically this won't be needed b/c parent component will
     * rerender on active state change. We still subscribe in case
     * `shouldComponentUpdate` on an intermediate component returns false.
     */
    componentDidMount() {
      if (ariaConfigs.subscribe === false) return

      this.unsubscribe = this.context.COMPONENTRY_ACTIVE.subscribe(active => {
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
      const { COMPONENTRY_ACTIVE } = this.context
      const { guid } = COMPONENTRY_ACTIVE
      const active = COMPONENTRY_ACTIVE.getActive()

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
          activate={COMPONENTRY_ACTIVE.activate}
          deactivate={COMPONENTRY_ACTIVE.deactivate}
          {...arias}
          {...this.props}
        />
      )
    }
  }

export default withActive
