import { createElement } from 'react'
import classNames from 'classnames'

import Button from '../Button'

export default ({ as, className, children, ...rest }) =>
  createElement(
    as || rest.onClick ? Button : 'a',
    {
      className: classNames('nav-item', className, {
        'nav-link': rest.href || rest.to
      }),
      ...rest
    },
    children
  )
