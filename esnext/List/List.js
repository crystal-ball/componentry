import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [List component 📝](https://componentry.design/components/list)
 * @experimental
 */
export const List = props => {
  const {
    flush,
    ...rest
  } = { ...useTheme('List'),
    ...props
  };
  return element('List', {
    componentCx: {
      'list-flush': flush
    },
    ...rest
  });
};
List.displayName = 'List';
/**
 * [List item component 📝](https://componentry.design/components/list)
 */

List.Item = function ListItem(props) {
  const {
    active,
    color,
    disabled,
    ...rest
  } = { ...useTheme('ListItem'),
    ...props
  };
  return element('ListItem', {
    as: rest.href || rest.to ? 'a' : 'button',
    componentCx: {
      [`list-item-${color}`]: color,
      active,
      disabled
    },
    disabled,
    ...rest
  });
};

List.Item.displayName = 'ListItem';