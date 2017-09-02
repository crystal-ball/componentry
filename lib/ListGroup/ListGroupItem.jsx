import { bool, func, node, string, oneOfType } from 'prop-types'
import classNames from 'classnames'

import Button from '../Button'
import { renderContainer } from '../utils/element-factory'

/**
 * List group item of `li`, `a` or `Button`.
 */

ListGroupItem.propTypes = {
  As: oneOfType([func, node]),
  active: bool,
  className: string
}

ListGroupItem.defaultProps = {
  As: null,
  active: false,
  className: ''
}

export default function ListGroupItem({ As, active, className, ...rest }) {
  className = classNames('list-group-item', className, {
    active,
    'list-group-item-action': rest.href || rest.onClick
  })

  // If there isn't an As config and component has action, assign correct element
  if (!As) {
    As = 'li' // Component is a li by default
    if (rest.href || rest.onClick) As = rest.href ? 'a' : Button // override for action elements
  }

  return renderContainer({ As, className, ...rest })
}
