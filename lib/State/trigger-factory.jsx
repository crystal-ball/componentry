import { func, shape, string } from 'prop-types'
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
export default function triggerFactory({ trigger = 'toggle', link = true } = {}) {
  Trigger.propTypes = {
    className: string,
    activeContext: shape({
      activate: func.isRequired,
      deactivate: func.isRequired,
      toggle: func.isRequired,
      element: string.isRequired
    }).isRequired
  }

  Trigger.defaultProps = {
    className: ''
  }

  function Trigger({ className, activeContext, ...rest }) {
    return renderContainer({
      As: Button,
      className: classNames(`${activeContext.element}-toggle`, className),
      link,
      onClick: activeContext[trigger],
      ...rest
    })
  }

  return Trigger
}
