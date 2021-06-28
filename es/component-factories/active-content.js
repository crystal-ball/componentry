import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { createElement } from 'react';
import { object, shape } from 'prop-types';
import classNames from 'classnames';
import arias from '../utils/arias';

/**
 * Factory returns custom `<Content />` components defined by the options.
 */
export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      componentArias = _ref.componentArias,
      _ref$element = _ref.element,
      element = _ref$element === void 0 ? '' : _ref$element,
      name = _ref.name,
      _ref$popper = _ref.popper,
      popper = _ref$popper === void 0 ? false : _ref$popper;

  var Content = function Content(props, _ref2) {
    var _ref2$THEME = _ref2.THEME,
        THEME = _ref2$THEME === void 0 ? {} : _ref2$THEME;
    var componentCtx = THEME[name] || {};

    var _componentCtx$props = _objectSpread(_objectSpread({}, componentCtx), props),
        active = _componentCtx$props.active,
        as = _componentCtx$props.as,
        children = _componentCtx$props.children,
        className = _componentCtx$props.className,
        guid = _componentCtx$props.guid,
        _componentCtx$props$a = _componentCtx$props.activeId,
        activeId = _componentCtx$props$a === void 0 ? '' : _componentCtx$props$a,
        activate = _componentCtx$props.activate,
        deactivate = _componentCtx$props.deactivate,
        rest = _objectWithoutProperties(_componentCtx$props, ["active", "as", "children", "className", "guid", "activeId", "activate", "deactivate"]); // Create component content (return optionally wraps content in a width busting
    // container)


    var ComponentContent = createElement(as || 'div', _objectSpread(_objectSpread({
      'data-test': element ? "".concat(element, "-content") : undefined
    }, arias(_objectSpread(_objectSpread({
      guid: guid,
      active: active
    }, componentArias), activeId ? {
      active: activeId === active,
      id: "".concat(activeId, "-content"),
      labelledby: "".concat(activeId, "-trigger"),
      hidden: true
    } : {}))), {}, {
      className: classNames(classes, componentCtx.className, className, _defineProperty({}, "".concat(element, "-content"), element)) || undefined
    }, rest), popper && /*#__PURE__*/React.createElement("div", {
      className: "tip-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tip"
    })), children); // If the element is a popper, wrap it in a content container, this is used to
    // bust width of parent element

    return popper ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(element, "-content-container")
    }, ComponentContent) : ComponentContent;
  };

  Content.displayName = name;
  Content.contextTypes = {
    THEME: shape(_defineProperty({}, name, object))
  };
  return Content;
});