import { bool, func, string } from 'prop-types'
import classNames from 'classnames'

import Button from '../Button'
import { renderContainer } from '../utils/element-factory'

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
    active: bool.isRequired,
    className: string,
    activate: func.isRequired,
    deactivate: func.isRequired
  }

  function Trigger({ active, activate, className, deactivate, ...rest }) {
    let onClick
    if (trigger) {
      onClick = trigger === 'activate' ? activate : deactivate
    } else {
      onClick = active ? deactivate : activate
    }

    return renderContainer({
      As: Button,
      className: classNames(`${element}-toggle`, className),
      link,
      onClick,
      ...rest
    })
  }

  return Trigger
}

export default triggerElementFactory
