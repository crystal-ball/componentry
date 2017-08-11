import React from 'react';
import { node, string } from 'prop-types';

import arias from './ariasHOC';
import classNames from './utils/classnames';

/**
 * Toggleable elements Content component.
 * @export
 * @class Content
 * @extends {Component}
 */
function Content({ As, children, className, elementType, ...other }) {
  // Bootstrap dropdowns content must be wrapped in an `dropdown-menu` class, other
  // toggled elements use <ELEMENT>-content
  className = classNames(className, {
    [`${elementType}-menu`]: elementType === 'dropdown',
    [`${elementType}-content`]: elementType !== 'dropdown'
  });

  return (
    <As className={className} {...other}>
      {/* Render a content arrow/tip only for tooltips && popovers */}
      {elementType === 'tooltip' || elementType === 'popover'
        ? <div className="tip-container">
            <div className="tip" />
          </div>
        : null}
      {children}
    </As>
  );
}

Content.ROLE = 'CONTENT';

Content.propTypes = {
  As: node,
  children: node,
  className: string,
  elementType: string
};

Content.defaultProps = {
  As: 'div',
  children: null,
  className: '',
  elementType: ''
};

export default arias(Content);
