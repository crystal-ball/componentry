import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'
import { navClasses } from '../utils/componentry'

export default function Nav(props) {
  return elem({
    as: 'nav',
    elemClassName: ['nav', navClasses(props)],
    ...useTheme('Nav'),
    ...props,
  })
}
Nav.displayName = 'Nav'

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
    elemClassName: [
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
Nav.Item.displayName = 'NavItem'
