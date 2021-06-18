/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { useTheme } from '../Theme/Theme';
import { element } from '../utils/element-creator'; // Module augmentation interface for overriding component props' types

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export const Icon = props => {
  const {
    variant = 'font',
    id,
    ...rest
  } = { ...useTheme('Icon'),
    ...props
  };
  return element('Icon', {
    as: 'svg',
    role: 'img',
    componentCx: [`${variant}-variant`, `icon-${id}`],
    children: /*#__PURE__*/React.createElement("use", {
      href: `#${id}`,
      xlinkHref: `#${id}`
    }),
    ...rest
  });
};
Icon.displayName = 'Icon';