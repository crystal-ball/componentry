import React, { PropTypes } from 'react';

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
export const Icon = ({
  className='',
  filePath='',
  font=true,
  icon='',
  ...other
  }) => {
  let _className = `icon ${icon}`;
  _className += className ? ` ${className}` : '';
  _className += font ? '' : ' b0'; // bottom 0 class if not font icon

  return (
    <svg className={_className} {...other}>
      <title>{icon}</title>
      <use href={`${filePath}#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  filePath: PropTypes.string,
  font: PropTypes.bool,
  icon: PropTypes.string.isRequired
};

Icon.defaultProps = {
  className: '',
  filePath: '/assets/svg-defs.svg',
  font: true
};
