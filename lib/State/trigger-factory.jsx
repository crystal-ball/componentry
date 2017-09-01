import React from 'react'
import { bool, func, node, oneOfType, shape, string } from 'prop-types'
import classNames from 'classnames'

import Button from '../Button'

/**
 * Individual triggers are defined for `<Activate />`, `<Deactivate />` and
 * `<Toggle />` for convenience specifying desired behavior in templates.
 *
 * Module is component factory for returning a trigger of specified type.
 * @param {string} trigger The type of trigger, sets the `onClick` behavior of
 *                         returned component.
 */
// TODO: use context type?
export default function triggerFactory(
  { trigger = 'toggle', link: baseLink = true, mouseEvents } = {}
) {
  Trigger.propTypes = {
    As: oneOfType([func, node]),
    children: node,
    className: string,
    link: bool,
    state: shape({
      activate: func.isRequired,
      deactivate: func.isRequired,
      toggle: func.isRequired,
      type: string.isRequired
    }).isRequired
  }

  Trigger.defaultProps = {
    As: Button,
    children: null,
    link: baseLink,
    className: ''
  }

  function Trigger({ As, children, className, link, state, ...rest }) {
    return (
      <As
        className={classNames(`${state.type}-toggle`, className)}
        link={link}
        onMouseEnter={mouseEvents ? state.activate : null}
        onMouseLeave={mouseEvents ? state.deactivate : null}
        onClick={state[trigger]}
        {...rest}
      >
        {children}
      </As>
    )
  }

  return Trigger
}
