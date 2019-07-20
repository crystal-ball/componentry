import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

const makeNav = name => {
  const Elem = props => {
    const { fill, justify, pills, vertical, ...rest } = { ...useTheme(name), ...props }

    return elem({
      defaultAs: 'nav',
      role: name === 'TabNav' ? 'tablist' : undefined,
      classes: {
        nav: name === 'Nav',
        'tabs-nav-container': name === 'TabNav',
        'nav-vertical': vertical,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-justified': justify,
      },
      ...rest,
    })
  }
  Elem.displayName = name
  return Elem
}

const Nav = makeNav('Nav')
const TabNav = makeNav('TabNav')

/**
 * Nav items can be action items or li, notice this follows the same pattern as
 * the List.Item components
 */
const NavItem = props => {
  const { active, ...rest } = { ...useTheme('NavItem'), ...props }
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
}
Nav.Item = NavItem

export { Nav, TabNav }
