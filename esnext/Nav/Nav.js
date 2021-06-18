/* eslint-disable @typescript-eslint/no-empty-interface */
import { useTheme } from '../Theme/Theme';
import { navClasses } from '../utils/class-names';
import { element } from '../utils/element-creator';

/**
 * [Nav component 📝](https://componentry.design/components/nav)
 * @experimental
 */
export const Nav = props => {
  return element('Nav', {
    as: 'nav',
    componentCx: navClasses('nav', props),
    role: 'navigation',
    ...useTheme('Nav'),
    ...props
  });
};
Nav.displayName = 'Nav';

Nav.Item = function NavItem(props) {
  const {
    variant = 'primary',
    ...merged
  } = { ...useTheme('NavItem'),
    ...props
  };
  return element('NavItem', {
    as: 'a',
    componentCx: `nav-item-${variant}`,
    ...merged
  });
};

Nav.Item.displayName = 'NavItem';