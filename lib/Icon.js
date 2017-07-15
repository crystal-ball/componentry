import React from 'react';
import { bool, string } from 'prop-types';

import classNames from './utils/classnames';

Icon.propTypes = {
  className: string,
  filePath: string,
  font: bool,
  icon: string.isRequired,
};

Icon.defaultProps = {
  className: '',
  filePath: '/assets/icons.svg',
  font: true,
};

/**
 * Render an SVG icon using an external definition set.
 *
 * To Document:
 * - passing icon id
 * - font=false for non-font icon icons
 * - filePath settings
 * @param {string} [className='']
 * @param {string} [filePath='/assets/svg-defs.svg']
 * @param {Boolean} [font=true]
 * @param {string} icon
 */
export default function Icon ({
  className,
  filePath,
  font,
  icon,
  ...other
}) {
  className = classNames('icon', icon, className, { b0: !font });

  return (
    <svg className={className} {...other}>
      <title>{icon}</title>
      <use href={`${filePath}#${icon}`} />
    </svg>
  );
}
