import React from 'react';
import elementFactory from '../component-factories/element';

/**
 * ⚠️ Requires SVGs are inlined into document somewhere
 */
export default elementFactory('Icon', ({
  id,
  font = true,
  ...props
}) => ({
  role: 'img',
  tag: 'svg',
  className: {
    icon: true,
    [id]: true,
    font
  },
  children: /*#__PURE__*/React.createElement("use", {
    href: `#${id}`,
    xlinkHref: `#${id}`
  }),
  ...props
}));