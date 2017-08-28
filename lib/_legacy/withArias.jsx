import React, { Component } from 'react'
import { boolean, shape, string } from 'prop-types'
import getDisplayName from './utils/getDisplayName'

// TODO: include a prefix of sorts in Arias to allow wiring together multiple id elems
/**
 * HOC that passes in aria attributes computed from context guid and active state.
 * 1. Required attrs are included as static attr on component at definition
 * 2. Guid and active are passed through context to instantiation of component at
 *    any place in tree.
 * 3. Computed arias passed as props to wrapped component.
 */
export default Wrapped =>
  class WithArias extends Component {
    static displayName = `withArias${getDisplayName(Wrapped)}`

    static contextTypes = {
      componentryArias: shape({
        active: boolean,
        guid: string
      })
    }

    state = { active: false }

    // Guid for arias and active state will be passed through context, HOC needs to
    // handle calling setState when active changes and passing arias into Wrapped
    render() {
      const { componentryArias: { guid } } = this.context
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
      } = Wrapped.ARIAS
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

      return <Wrapped {...this.props} {...arias} />
    }
  }
