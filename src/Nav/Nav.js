import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'
import { navClasses } from '../utils/componentry'

function Nav(props) {
  return elem({
    as: 'nav',
    componentClassNames: ['nav', navClasses(props)],
    ...useTheme('Nav'),
    ...props,
  })
}

/**
 * Nav items can be action items or li, notice this follows the same pattern as
 * the List.Item components
 */
Nav.Item = function NavItem(props) {
  const { active, ...rest } = { ...useTheme('NavItem'), ...props }
  const { href, onClick } = rest

  return elem({
    /* eslint-disable no-nested-ternary */
    as: href || onClick ? (href ? 'a' : 'button') : 'li',
    componentClassNames: [
      'nav-item',
      {
        'nav-item-action': href || onClick,
        active,
        disabled: rest.disabled,
      },
    ],
    ...rest,
  })
}
export default Nav
