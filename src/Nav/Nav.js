// @flow
import { BaseButton } from '../Button/Button'
import elementFactory, { type ElementProps } from '../component-factories/element'

export type Props = {
  fill?: boolean,
  justify?: boolean,
  pills?: boolean,
  vertical?: boolean,
} & ElementProps

const makeNav = tabNav =>
  elementFactory(
    tabNav ? 'TabNav' : 'Nav',
    ({ fill, justify, pills, vertical, ...props }) => ({
      tag: 'nav',
      role: tabNav ? 'tablist' : undefined,
      className: {
        nav: true,
        'nav-tabs': tabNav,
        'flex-column': vertical,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-justified': justify,
      },
      ...props,
    }),
  )

const Nav = makeNav(false)
const TabNav = makeNav(true)

const NavItem = elementFactory('NavItem', ({ active, ...rest }) => {
  const { href, onClick } = rest

  return {
    className: {
      'nav-item': true,
      active,
      'nav-link': href || onClick,
    },
    /* eslint-disable no-nested-ternary */
    tag: href || onClick ? (href ? 'a' : BaseButton) : 'li',
    ...rest,
  }
})

export { TabNav }

// $FlowFixMe
Nav.Item = NavItem
export default Nav
