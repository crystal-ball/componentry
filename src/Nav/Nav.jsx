// @flow
import classNames from 'classnames'

import elementFactory from '../component-factories/element-factory'
import itemFactory from '../component-factories/item-factory'
import type { ElementProps } from '../component-factories/element-factory'

export type Props = {
  fill?: boolean,
  justify?: boolean,
  pills?: boolean,
  vertical?: boolean,
} & ElementProps

const makeNav = tabNav => {
  const options = {
    name: tabNav ? 'TabNav' : 'Nav',
    tag: 'nav',
    computedClassName: (
      ctxClassName,
      propsClassName,
      { fill, justify, pills, vertical },
    ) =>
      classNames('nav', ctxClassName, propsClassName, {
        'nav-tabs': tabNav,
        'flex-column': vertical,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-justified': justify,
      }),
    clean: ['fill', 'justify', 'pills', 'vertical'],
  }

  if (tabNav) options.role = 'tablist'

  return elementFactory(options)
}

const Nav = makeNav(false)
const TabNav = makeNav(true)

const NavItem = itemFactory({
  name: 'NavItem',
  defaultClasses: 'nav-item',
  triggerClass: 'nav-link',
})

export { TabNav }

// $FlowFixMe
Nav.Item = NavItem
export default Nav
