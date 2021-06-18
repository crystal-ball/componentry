import { forwardRef } from 'react';
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator';

/**
 * [Button component 📝](https://componentry.design/components/button)
 * @experimental
 */
export const Button = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    variant = 'primary',
    active,
    color,
    disabled,
    size,
    ...merged
  } = { ...useTheme('Button'),
    ...props
  }; // If an href or to is passed, this instance should render an anchor tag

  const asAnchor = Boolean(merged.href || merged.to);
  return element('Button', {
    as: asAnchor ? 'a' : 'button',
    ref,
    type: asAnchor ? undefined : 'button',
    disabled,
    componentCx: [`button-${variant}`, {
      [`button-${size}`]: size,
      [`button-color-${color}`]: color,
      active,
      disabled // We include a disabled class AND pass disabled prop to element for a11y

    }],
    ...merged
  });
});
Button.displayName = 'Button';