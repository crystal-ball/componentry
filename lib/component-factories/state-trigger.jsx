import React from 'react'
import { bool, func, node, oneOfType, string } from 'prop-types'
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
const triggerElementFactory = ({ element, link = true, trigger } = {}) => {
  Trigger.propTypes = {
    As: oneOfType([func, node]),
    active: bool.isRequired,
    children: node,
    className: string,
    activate: func.isRequired,
    deactivate: func.isRequired
  }

  Trigger.defaultProps = {
    As: Button
  }

  function Trigger({
    As,
    active,
    activate,
    children,
    className,
    deactivate,
    ...rest
  }) {
    const name = `${element}-toggle`
    let onClick
    if (trigger) {
      onClick = trigger === 'activate' ? activate : deactivate
    } else {
      onClick = active ? deactivate : activate
    }

    return (
      <As
        className={classNames(name, className)}
        link={link}
        onClick={onClick}
        data-test={name}
        {...rest}
      >
        {children}
      </As>
    )
  }

  return Trigger
}

export default triggerElementFactory
