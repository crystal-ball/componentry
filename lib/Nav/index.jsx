// @flow
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import classNames from 'classnames'

import NavItem from './NavItem'

type Options = {
  classes?: string,
  misc?: {}
}

type Props = {
  as?: ComponentType<any> | string,
  className?: string,
  children?: Node,
  pills?: boolean,
  vertical?: boolean
}

/**
 * Create customized Nav components with factory function
 */
export const navFactory = ({ classes, misc = {} }: Options = {}) => ({
  as,
  className,
  children,
  pills,
  vertical,
  ...rest
}: Props) =>
  createElement(
    as || 'nav',
    {
      className: classNames('nav', className, classes, {
        'flex-column': vertical,
        'nav-pills': pills
      }),
      ...misc,
      ...rest
    },
    children
  )

// Default Nav component, no special classes or attributes
const Nav = navFactory()

Nav.Item = NavItem

export default Nav
