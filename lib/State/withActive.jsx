import React, { Component } from 'react'
import { func, shape, string } from 'prop-types'

import getDisplayName from '../utils/getDisplayName'

/**
 * HOC that passes in aria attributes computed from context guid and active state.
 * ariaConfigs => Wrapped => Component w/ (active state + arias)
 * 1. Required attrs are included as static attr on component at definition
 * 2. Guid and active are passed through context to instantiation of component at
 *    any place in tree.
 * 3. Computed arias passed as props to wrapped component.
 * TODO:
 * - Do arias need a prefix for mutliple ids?
 * - Document the need to spread state from props to prevent passing bad attrs!
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

    state = { active: null }

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * When wrapped component needs to observe active and update on change, pass
     * subscribe true to trigger component subscription
     */
    componentDidMount() {
      if (ariaConfigs.subscribe === false) return

      this.unsubscribe = this.context.COMPONENTRY_ACTIVE.subscribe(active => {
        this.setState({ active })
      })
    }
    /**
     * Remove subscription on unmount!
     */
    componentWillUnmount() {
      if (ariaConfigs.subscribe !== false) this.unsubscribe()
    }

    // Guid for arias and active state will be passed through context, HOC needs to
    // handle calling setState when active changes and passing arias into Wrapped
    render() {
      const {
        activate,
        deactivate,
        getActive,
        guid
      } = this.context.COMPONENTRY_ACTIVE
      const active = getActive()
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

export default withActive
