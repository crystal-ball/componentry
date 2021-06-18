import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["guid"],
    _excluded2 = ["active", "activeId", "children", "variant"];
import React, { useContext } from 'react';
import { useTheme } from '../Theme/Theme';
import { ActiveCtx } from './active-container-component-builder';
import { computeARIA } from './aria';
import { parseBaseCx } from './class-names';
import { element } from './element-creator';

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export function activeContentBuilder(displayName, _ref) {
  var aria = _ref.aria,
      _ref$positioned = _ref.positioned,
      positioned = _ref$positioned === void 0 ? false : _ref$positioned;
  var baseCx = parseBaseCx(displayName);

  function ActiveContent(props) {
    var _useContext = useContext(ActiveCtx),
        guid = _useContext.guid,
        activeCtx = _objectWithoutProperties(_useContext, _excluded);

    var _useTheme$activeCtx$p = _objectSpread(_objectSpread(_objectSpread({}, useTheme(displayName)), activeCtx), props),
        active = _useTheme$activeCtx$p.active,
        activeId = _useTheme$activeCtx$p.activeId,
        children = _useTheme$activeCtx$p.children,
        _useTheme$activeCtx$p2 = _useTheme$activeCtx$p.variant,
        variant = _useTheme$activeCtx$p2 === void 0 ? "primary" : _useTheme$activeCtx$p2,
        rest = _objectWithoutProperties(_useTheme$activeCtx$p, _excluded2); // Create component content (return optionally wraps content in a width busting
    // container)


    var content = element(displayName, _objectSpread(_objectSpread({}, computeARIA({
      active: active,
      activeId: activeId,
      guid: guid,
      type: 'content',
      aria: aria
    })), {}, {
      componentCx: "".concat(baseCx, "-").concat(variant),
      children: /*#__PURE__*/React.createElement(React.Fragment, null, positioned && /*#__PURE__*/React.createElement("div", {
        className: "tip-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "tip"
      })), children)
    }, rest)); // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element

    return positioned ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(baseCx, "-container")
    }, content) : content;
  }

  ActiveContent.displayName = displayName;
  return ActiveContent;
}