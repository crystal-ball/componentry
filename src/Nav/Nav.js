import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'
import { navClasses } from '../utils/componentry'

/**
 * [Nav component 📝](https://componentry.design/components/nav)
 */
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
 * [Nav item component 📝](https://componentry.design/components/nav)
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
