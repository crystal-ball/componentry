import React, { useContext } from 'react';
import { useTheme } from '../Theme/Theme';
import { ActiveCtx } from './active-container-component-builder';
import { computeARIA } from './aria';
import { parseBaseCx } from './class-names';
import { element } from './element-creator';

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export function activeContentBuilder(displayName, {
  aria,
  positioned = false
}) {
  const baseCx = parseBaseCx(displayName);

  function ActiveContent(props) {
    const {
      guid,
      ...activeCtx
    } = useContext(ActiveCtx);
    const {
      active,
      activeId,
      children,
      variant = `primary`,
      ...rest
    } = { ...useTheme(displayName),
      ...activeCtx,
      ...props
    }; // Create component content (return optionally wraps content in a width busting
    // container)

    const content = element(displayName, { ...computeARIA({
        active,
        activeId,
        guid,
        type: 'content',
        aria
      }),
      componentCx: `${baseCx}-${variant}`,
      children: /*#__PURE__*/React.createElement(React.Fragment, null, positioned && /*#__PURE__*/React.createElement("div", {
        className: "tip-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "tip"
      })), children),
      ...rest
    }); // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element

    return positioned ? /*#__PURE__*/React.createElement("div", {
      className: `${baseCx}-container`
    }, content) : content;
  }

  ActiveContent.displayName = displayName;
  return ActiveContent;
}