import React from 'react';
import { bool, string } from 'prop-types';

import classNames from './utils/classnames';

let count = 0;

/**
 * Render an SVG icon using an external definition set.
 *
 * ## Default Font Configurations
 * This component is configured to behave as a font icon system by default using the
 * `.font` class. The baseline for the component is adjusted to properly align icons
 * with text.
 *
 * This component can also be used to render font icons as standalone display icons.
 * In these cases, it is typically not desired for the icon baseline to be adjusted,
 * and this can be prevented by passing `font={false}`.
 *
 * ## A++ Accessibility Considerations
 * In order to make SVG font icons as accessible as possible this component:
 * - Includes `role="img"` on the SVG element for older browsers
 * - Maps an `aria-labelledby` attribute on the SVG element to a unique id on the
 *   title element for older browsers.
 * - Falls back to the icon id as the SVG element's `<title>` if no title is passed
 *   to the component.
 *
 * The fallback title is provided to ensure the element has _some_ title for screen
 * readers, however a descriptive title should always be passed in that conveys the
 * intent of the element. For example, an umbrella icon that shows the weather when
 * clicked should have a title like: 'See current weather', instead of a title like
 * 'Umbrella icon'.
 *
 * To Document:
 * - Default filePath configs using context
 * @param {string} [className='']
 * @param {string} [filePath='/assets/svg-defs.svg']
 * @param {Boolean} [font=true]
 * @param {string} icon
 */
export default function Icon(
  { className, filePath, font, icon, title, ...other },
  context
) {
  className = classNames('icon', { font }, icon, className);
  filePath =
    filePath || context.componentry_svgDefinitionsFilePath || '/assets/icons.svg';
  title = title || icon;
  count += 1;
  const ariaId = `${icon}-${count}`;

  return (
    <svg className={className} {...other} role="img" aria-labelledby={ariaId}>
      <title id={ariaId}>
        {title}
      </title>
      <use href={`${filePath}#${icon}`} />
    </svg>
  );
}

Icon.contextTypes = {
  componentry_svgDefinitionsFilePath: string
};

Icon.propTypes = {
  className: string,
  filePath: string,
  font: bool,
  icon: string.isRequired,
  title: string
};

Icon.defaultProps = {
  className: '',
  filePath: '',
  font: true,
  title: ''
};
