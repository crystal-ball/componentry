import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createElement } from 'react';
import { object, shape } from 'prop-types';
import classNames from 'classnames';
import Button, { BaseButton } from '../Button/Button';
import arias from '../utils/arias';

/**
 * Factory returns custom `<Trigger />` components defined by the options.
 */
export default (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      baseButton = _ref.baseButton,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      componentArias = _ref.componentArias,
      _ref$element = _ref.element,
      element = _ref$element === void 0 ? '' : _ref$element,
      name = _ref.name,
      triggerType = _ref.triggerType,
      optionsRest = _objectWithoutProperties(_ref, ["baseButton", "classes", "componentArias", "element", "name", "triggerType"]);

  var Trigger = function Trigger(props, _ref2) {
    var _ref2$THEME = _ref2.THEME,
        THEME = _ref2$THEME === void 0 ? {} : _ref2$THEME;
    var componentCtx = THEME[name] || {};

    var _componentCtx$props = _objectSpread(_objectSpread({}, componentCtx), props),
        activate = _componentCtx$props.activate,
        active = _componentCtx$props.active,
        as = _componentCtx$props.as,
        children = _componentCtx$props.children,
        className = _componentCtx$props.className,
        deactivate = _componentCtx$props.deactivate,
        decoration = _componentCtx$props.decoration,
        guid = _componentCtx$props.guid,
        link = _componentCtx$props.link,
        _componentCtx$props$a = _componentCtx$props.activeId,
        activeId = _componentCtx$props$a === void 0 ? '' : _componentCtx$props$a,
        rest = _objectWithoutProperties(_componentCtx$props, ["activate", "active", "as", "children", "className", "deactivate", "decoration", "guid", "link", "activeId"]);

    var onClick;

    if (triggerType) {
      onClick = triggerType === 'activate' ? activate : deactivate;
    } else if (activeId) {
      onClick = activeId === active ? deactivate : activate;
    } else {
      onClick = active ? deactivate : activate;
    } // Multi-active elems have different arias to handle multiple show/hide
    // elements. The passed id is used for trigger and content components,
    // these arias will override the standard componentArias


    var activeIdArias = activeId ? {
      active: activeId === active,
      id: "".concat(activeId, "-tab"),
      controls: "".concat(activeId, "-content"),
      selected: true
    } : {};
    return createElement(as || (baseButton ? BaseButton : Button), _objectSpread(_objectSpread(_objectSpread({
      'data-test': element ? "".concat(element, "-trigger") : undefined
    }, arias(_objectSpread(_objectSpread({
      guid: guid,
      active: active
    }, componentArias), activeIdArias))), {}, {
      className: classNames(classes, componentCtx.className, className, _defineProperty({
        // For mutli-active triggers add active if the trigger is selected
        active: activeId && active === activeId
      }, "".concat(element, "-toggle"), element)),
      onClick: onClick,
      link: link,
      // For multi-active elems, the value is used in `withState` to handle
      // changing the active id
      value: activeId || undefined
    }, optionsRest), rest), children, decoration);
  };

  Trigger.displayName = name;
  Trigger.contextTypes = {
    THEME: shape(_defineProperty({}, name, object))
  };
  return Trigger;
});