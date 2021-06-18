import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Badge component 📝](https://componentry.design/components/badge)
 * @experimental
 */
export const Badge = props => {
  const {
    color,
    variant = 'primary',
    ...rest
  } = { ...useTheme('Badge'),
    ...props
  };
  return element('Badge', {
    componentCx: [`badge-${variant}`, {
      [`badge-color-${color}`]: color
    }],
    ...rest
  });
};
Badge.displayName = 'Badge';