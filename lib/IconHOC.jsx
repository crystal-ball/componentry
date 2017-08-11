import React from 'react';
import { array, bool, object, oneOfType, string } from 'prop-types';

import classNames from './utils/classnames';

/**
 * Using passed configuration the IconHOC wraps a passed `<path>` in an SVG element
 * with handling for classes, font and title.
 *
 * TODO: This is overkill for generating a couple of bundled icons that can be used
 * by the library. Simplify this without being repetitve.
 * TODO: Document this is not explicitly being used
 * @export
 * @param {object} { icon, title, x, y } Configuration values for svg element
 * @returns {Component}
 */
export default function({ icon, title, x, y }) {
  return function withSVG(WrappedComponent) {
    function WithSVG({ className, font, ...other }) {
      className = classNames('icon', { font }, icon, className);
      const vbox = `0 0 ${x} ${y}`;

      return (
        <svg
          role="img"
          className={className}
          width={x}
          height={y}
          viewBox={vbox}
          {...other}
        >
          <title>
            {title}
          </title>
          <WrappedComponent />
        </svg>
      );
    }

    WithSVG.propTypes = {
      className: oneOfType([object, array, string]),
      font: bool
    };

    WithSVG.defaultProps = {
      className: '',
      font: true
    };

    return WithSVG;
  };
}
