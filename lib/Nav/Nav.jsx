// @flow
import classNames from 'classnames'

import NavItem from './NavItem'
import elementFactory from '../component-factories/element-factory'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = {
  pills?: boolean,
  vertical?: boolean,
} & ElementProps

// Default Nav component, no special classes or attributes
const Nav = elementFactory({
  name: 'Nav',
  tag: 'nav',
  computedClassName: (ctxClassName, propsClassName, { pills, vertical }) =>
    classNames('nav', ctxClassName, propsClassName, {
      'flex-column': vertical,
      'nav-pills': pills,
    }),
  clean: ['pills', 'vertical'],
})

const TabNav = elementFactory({
  name: 'TabNav',
  tag: 'nav',
  role: 'tablist',
  computedClassName: (ctxClassName, propsClassName, { pills, vertical }) =>
    classNames('nav', 'nav-tabs', ctxClassName, propsClassName, {
      'flex-column': vertical,
      'nav-pills': pills,
    }),
  clean: ['pills', 'vertical'],
})

export { TabNav }

// $FlowFixMe
Nav.Item = NavItem
export default Nav
