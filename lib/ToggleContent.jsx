import React from 'react';
import { node, string } from 'prop-types';

import arias from './HOCs/ariasHOC';
import classNames from './utils/classnames';

function renderTip(elementType) {
  if (elementType === 'tooltip' || elementType === 'popover') {
    return (
      <div className="tip-container">
        <div className="tip" />
      </div>
    );
  }

  return null;
}

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
      {renderTip(elementType)}
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

const ariasContent = arias(Content);

export default ariasContent;
