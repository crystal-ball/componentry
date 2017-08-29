import React, { Component } from 'react'
import { boolean, func, shape, string } from 'prop-types'
import getDisplayName from '../utils/getDisplayName'

/**
 * HOC that passes in aria attributes computed from context guid and active state.
 * ariaConfigs => Wrapped => Component w/ (state + arias)
 * 1. Required attrs are included as static attr on component at definition
 * 2. Guid and active are passed through context to instantiation of component at
 *    any place in tree.
 * 3. Computed arias passed as props to wrapped component.
 * TODO:
 * - Do arias need a prefix for mutliple ids?
 * - Document the need to spread state from props to prevent passing bad attrs!
 */
export default (ariaConfigs = {}) => Wrapped =>
  class WithActive extends Component {
    static displayName = `withActive${getDisplayName(Wrapped)}`

    static contextTypes = {
      componentry_state: shape({
        activate: func,
        active: boolean,
        deactivate: func,
        guid: string,
        subscribe: func,
        toggle: func
      })
    }

    state = { active: false }

    componentDidMount() {
      this.context.componentry_state.subscribe(active => this.setState({ active }))
    }

    // Guid for arias and active state will be passed through context, HOC needs to
    // handle calling setState when active changes and passing arias into Wrapped
    render() {
      const { componentry_state: { guid } } = this.context
      const { active } = this.state
      const {
        controls,
        describedby,
        expanded,
        haspopup,
        hidden,
        id,
        labelledby,
        role
      } = ariaConfigs
      const arias = {
        'aria-controls': controls ? guid : null,
        'aria-describedby': describedby ? guid : null,
        'aria-expanded': expanded ? String(active) : null,
        'aria-haspopup': haspopup ? 'true' : null,
        'aria-hidden': hidden ? String(!active) : null,
        'aria-labelledby': labelledby ? guid : null,
        id: id ? guid : null,
        role
      }

      return (
        <Wrapped
          state={this.context.componentry_state}
          {...arias}
          {...this.props}
        />
      )
    }
  }
