import React from 'react';
import { any, node, string } from 'prop-types';

import arias from './HOCs/ariasHOC';
import classNames from './utils/classnames';

function renderTip(element) {
  if (element === 'tooltip' || element === 'popover') {
    return (
      <div className="tip-container">
        <div className="tip" />
      </div>
    );
  } else {
    return null;
  }
}

/**
 * Toggleable elements Content component.
 * @export
 * @class Content
 * @extends {Component}
 */
let Content = function Content({ As, children, className, element, ...other }) {
  // Bootstrap dropdowns content must be wrapped in an `dropdown-menu` class, other
  // toggled elements use <ELEMENT>-content
  className = classNames(className, {
    [`${element}-menu`]: element === 'dropdown',
    [`${element}-content`]: element !== 'dropdown',
  });

  return (
    <As className={className} {...other}>
      {renderTip(element)}
      {children}
    </As>
  );
};

Content.ROLE = 'CONTENT';

Content.propTypes = {
  As: any,
  children: node,
  className: string,
  element: string,
};

Content.defaultProps = {
  As: 'div',
  children: null,
  className: '',
  element: '',
};

Content = arias(Content);

export default Content;
