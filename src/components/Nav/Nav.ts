import { useTheme } from '../Theme/Theme'
import { navClasses } from '../../utils/class-names'
import { element } from '../../utils/element-creator'
import { ComponentBaseProps } from '../../utils/types'

export interface NavProps extends ComponentBaseProps<'nav'> {
  fill?: boolean
  justify?: boolean
  pills?: boolean
  vertical?: boolean
}

export interface NavItemProps extends ComponentBaseProps<'a'> {}

export interface Nav {
  (props: NavProps): React.ReactElement
  displayName: 'Nav'
  /**
   * [Nav item component 📝](https://componentry.design/components/nav)
   */
  Item: React.FC<NavItemProps>
}

/**
 * [Nav component 📝](https://componentry.design/components/nav)
 * @experimental
 */
export const Nav = ((props: NavProps) => {
  return element('Nav', {
    as: 'nav',
    componentCx: navClasses('nav', props),
    role: 'navigation',
    ...useTheme<NavProps>('Nav'),
    ...props,
  })
}) as Nav
Nav.displayName = 'Nav'

Nav.Item = function NavItem(props) {
  const { variant = 'primary', ...merged } = {
    ...useTheme<NavItemProps>('NavItem'),
    ...props,
  }

  return element('NavItem', {
    as: 'a',
    componentCx: `nav-item-${variant}`,
    ...merged,
  })
}
Nav.Item.displayName = 'NavItem'
