import element from '../element'
import { useTheme } from '../Theme/Theme'
import { navClasses } from '../utils/componentry'

/**
 * [Nav component 📝](https://componentry.design/components/nav)
 */
export default function Nav(props) {
  return element({
    as: 'nav',
    componentCx: navClasses('nav', props),
    role: 'navigation',
    ...useTheme('Nav'),
    ...props,
  })
}
Nav.displayName = 'Nav'

/**
 * [Nav item component 📝](https://componentry.design/components/nav)
 */
Nav.Item = function NavItem(props) {
  const { variant = 'primary', ...merged } = {
    ...useTheme('NavItem'),
    ...props,
  }

  return element({
    as: 'a',
    componentCx: {
      'nav-item': true,
      [`nav-item-${variant}`]: true,
    },
    ...merged,
  })
}
Nav.Item.displayName = 'NavItem'
