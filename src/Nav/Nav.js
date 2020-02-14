import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'
import { actionClasses, navClasses } from '../utils/componentry'

/**
 * [Nav component 📝](https://componentry.design/components/nav)
 */
export default function Nav(props) {
  return elem({
    as: 'nav',
    elemClassName: navClasses('nav', props),
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
  const { variant = 'nav-item', ...merged } = {
    ...useTheme('NavItem'),
    ...props,
  }

  return elem({
    as: 'a',
    elemClassName: actionClasses(variant, merged),
    ...merged,
  })
}
Nav.Item.displayName = 'NavItem'
