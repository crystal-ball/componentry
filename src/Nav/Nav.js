// @flow
import elem from '../elem-factory'
import withTheme from '../withTheme'

export type Props = {
  fill?: boolean,
  justify?: boolean,
  pills?: boolean,
  vertical?: boolean,
}

const makeNav = tabNav =>
  withTheme(tabNav ? 'TabNav' : 'Nav', ({ fill, justify, pills, vertical, ...rest }) =>
    elem({
      defaultAs: 'nav',
      role: tabNav ? 'tablist' : undefined,
      classes: {
        nav: true,
        'nav-tabs': tabNav,
        'flex-column': vertical,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-justified': justify,
      },
      ...rest,
    }),
  )

const Nav = makeNav(false)
const TabNav = makeNav(true)

const Item = withTheme('NavItem', ({ active, ...rest }) => {
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    defaultAs: href || onClick ? (href ? 'a' : 'button') : 'li',
    classes: {
      active,
      'nav-item': true,
      'nav-link': href || onClick,
    },
    ...rest,
  })
})
Nav.Item = Item

export { TabNav }
export default Nav
