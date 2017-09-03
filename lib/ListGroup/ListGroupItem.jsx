import { bool, string } from 'prop-types'
import classNames from 'classnames'

import Button from '../Button'
import { renderContainer } from '../utils/element-factory'

/**
 * List group item of `li`, `a` or `Button`.
 */

ListGroupItem.propTypes = {
  active: bool,
  className: string
}

export default function ListGroupItem({ active, className, ...rest }) {
  let As = 'li' // Component is a li by default
  if (rest.href || rest.onClick) As = rest.href ? 'a' : Button // override for action elements

  // Pass null to prevent `btn-primary` on Button items
  const color = rest.onClick ? null : undefined
  const classes = classNames('list-group-item', className, {
    active,
    'list-group-item-action': rest.href || rest.onClick
  })

  return renderContainer({ As, color, className: classes, ...rest })
}
