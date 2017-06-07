import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

Icon.propTypes = {
  className: PropTypes.string,
  filePath: PropTypes.string,
  font: PropTypes.bool,
  icon: PropTypes.string.isRequired,
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
function Icon ({
  className='',
  filePath='',
  font=true,
  icon='',
  ...other
}) {
  let _className = classnames('icon', icon, className, { b0: !font });

  return (
    <svg className={_className} {...other}>
      <title>{icon}</title>
      <use href={`${filePath}#${icon}`} />
    </svg>
  );
}

export default Icon;
