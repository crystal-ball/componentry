import React, { createElement } from 'react';
import { object, shape } from 'prop-types';
import classNames from 'classnames';
import arias from '../utils/arias';

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default (({
  classes = '',
  componentArias,
  element = '',
  name,
  popper = false
} = {}) => {
  const Content = (props, {
    THEME = {}
  }) => {
    const componentCtx = THEME[name] || {};
    const {
      active,
      // $FlowFixMe
      as,
      children,
      className,
      guid,
      activeId = '',
      // YOU SHALL NOT PASS 🙅
      activate,
      deactivate,
      ...rest
    } = { ...componentCtx,
      ...props
    }; // Create component content (return optionally wraps content in a width busting
    // container)

    const ComponentContent = createElement(as || 'div', {
      'data-test': element ? `${element}-content` : undefined,
      ...arias({
        guid,
        active,
        ...componentArias,
        // Mutli-active elems have different arias to handle multiple show/hide
        // elements. The passed id is used for trigger and content components,
        // these arias will override the standard componentArias
        ...(activeId ? {
          active: activeId === active,
          id: `${activeId}-content`,
          labelledby: `${activeId}-trigger`,
          hidden: true
        } : {})
      }),
      className: classNames(classes, componentCtx.className, className, {
        [`${element}-content`]: element
      }) || undefined,
      ...rest
    }, popper && /*#__PURE__*/React.createElement("div", {
      className: "tip-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tip"
    })), children); // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element

    return popper ? /*#__PURE__*/React.createElement("div", {
      className: `${element}-content-container`
    }, ComponentContent) : ComponentContent;
  };

  Content.displayName = name;
  Content.contextTypes = {
    THEME: shape({
      [name]: object
    })
  };
  return Content;
});