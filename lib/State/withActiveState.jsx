import React, { Component } from 'react'
import { boolean, func, shape, string } from 'prop-types'
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
export default (ariaConfigs = {}) => Wrapped =>
  class WithActiveState extends Component {
    static displayName = `withActiveState${getDisplayName(Wrapped)}`

    static contextTypes = {
      COMPONENTRY_ACTIVE: shape({
        activate: func,
        active: boolean,
        deactivate: func,
        guid: string,
        subscribe: func,
        toggle: func,
        element: string
      })
    }

    state = { active: null }

    // Hooks
    // ---------------------------------------------------------------------------
    /**
     * Update initial state using context before mount
     */
    componentWillMount() {
      this.setState({ active: this.context.COMPONENTRY_ACTIVE.active })
    }
    /**
     * When wrapped component needs to observe active and update on change, pass
     * subscribe true to trigger component subscription
     */
    componentDidMount() {
      if (ariaConfigs.subscribe !== false) {
        this.unsubscribe = this.context.COMPONENTRY_ACTIVE.subscribe(active =>
          this.setState({ active })
        )
      }
    }
    /**
     * Remove subscription on unmount!
     * */
    componentWillUnmount() {
      if (ariaConfigs.subscribe !== false) this.unsubscribe()
    }

    // Guid for arias and active state will be passed through context, HOC needs to
    // handle calling setState when active changes and passing arias into Wrapped
    render() {
      const { COMPONENTRY_ACTIVE: { guid } } = this.context
      const { active } = this.state
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
          activeContext={this.context.COMPONENTRY_ACTIVE}
          {...arias}
          {...this.props}
        />
      )
    }
  }
