import React from 'react'
import { bool, element, func, node, oneOfType, shape, string } from 'prop-types'
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
  { trigger = 'Toggle', link = true, mouseEvents } = {}
) {
  Trigger.propTypes = {
    As: oneOfType([element, func, node]),
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
    As: null,
    children: null,
    link: null,
    className: ''
  }

  // Specify displayName for better HOC name debugging
  Trigger.displayName = trigger
  trigger = trigger.toLowerCase()
  function Trigger({ As, children, className, link: _link, state, ...rest }) {
    const mouseEnter = mouseEvents ? state.activate : null
    const mouseLeave = mouseEvents ? state.deactivate : null
    const { type } = state

    As = As || Button
    link = _link || link
    className = classNames(className, {
      [`${type}-trigger`]: type !== 'dropdown',
      [`${type}-toggle`]: type === 'dropdown'
    })
    return (
      <As
        className={className}
        link={link}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={state[trigger]}
        {...rest}
      >
        {children}
      </As>
    )
  }

  return Trigger
}
