import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { createElement } from 'react';
import { object, shape } from 'prop-types';
import classNames from 'classnames';

/**
 *
 * @export
 * @returns {Component} React functional stateless component with base classes.
 */
export default (function (name, elementComputer) {
  var Element = function Element(_ref) {
    var propsClassName = _ref.className,
        props = _objectWithoutProperties(_ref, ["className"]);

    var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      THEME: {}
    };
    var ctxProps = ctx.THEME ? ctx.THEME[name] : null;
    var mergedProps = props;
    var ctxClassName = null;

    if (ctxProps) {
      mergedProps = _objectSpread(_objectSpread({}, ctxProps), props);
      ctxClassName = ctxProps.className;
    }

    var computed = typeof elementComputer === 'function' ? elementComputer(mergedProps, ctx) : _objectSpread(_objectSpread({}, elementComputer), props);

    var as = computed.as,
        children = computed.children,
        className = computed.className,
        tag = computed.tag,
        computedProps = _objectWithoutProperties(computed, ["as", "children", "className", "tag"]);

    return createElement(as || tag || 'div', _objectSpread({
      className: classNames(ctxClassName, className, propsClassName)
    }, computedProps), children);
  };

  Element.displayName = name;
  Element.contextTypes = _defineProperty({
    THEME: shape(_defineProperty({}, name, object))
  }, name, object);
  return Element;
});