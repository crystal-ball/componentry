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
        nav: !tabNav,
        'tabs-nav-container': tabNav,
        'nav-vertical': vertical,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-justified': justify,
      },
      ...rest,
    }),
  )

const Nav = makeNav(false)
const TabNav = makeNav(true)

/**
 * Nav items can be action items or li, notice this follows the same pattern as
 * the List.Item components
 */
const Item = withTheme('NavItem', ({ active, ...rest }) => {
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    defaultAs: href || onClick ? (href ? 'a' : 'button') : 'li',
    classes: {
      active,
      disabled: rest.disabled,
      'nav-item': true,
      'nav-item-action': href || onClick,
    },
    ...rest,
  })
})
Nav.Item = Item

export { Nav, TabNav }
