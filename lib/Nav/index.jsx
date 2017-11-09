import { createElement } from 'react'
import classNames from 'classnames'

import NavItem from './NavItem'

const Nav = ({ as, className, children, pills, vertical, ...rest }) =>
  createElement(
    as || 'nav',
    {
      className: classNames('nav', className, {
        'flex-column': vertical,
        'nav-pills': pills
      }),
      ...rest
    },
    children
  )

Nav.Item = NavItem

export default Nav
