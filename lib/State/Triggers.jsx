import React from 'react'
import { element, func, node, oneOfType, shape } from 'prop-types'

import withActive from '../withActive'
import Button from '../Button'

/**
 * Individual triggers are defined for `<Activate />`, `<Deactivate />` and
 * `<Toggle />` for convenience specifying desired behavior in templates.
 *
 * Module is component factory for returning a trigger of specified type.
 * @param {string} trigger The type of trigger, sets the `onClick` behavior of
 *                         returned component.
 */
export default trigger => {
  Trigger.propTypes = {
    As: oneOfType([element, func, node]),
    children: node,
    state: shape({
      activate: func.isRequired,
      deactivate: func.isRequired,
      toggle: func.isRequired
    }).isRequired
  }

  Trigger.defaultProps = {
    As: Button,
    children: null,
    className: ''
  }

  // Specify displayName for better HOC name debugging
  Trigger.displayName = trigger
  function Trigger({ As, children, state, ...rest }) {
    return (
      <As onClick={state[trigger.toLowerCase()]} {...rest}>
        {children}
      </As>
    )
  }

  return withActive({ controls: true })(Trigger)
}
