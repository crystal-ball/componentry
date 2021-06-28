import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import { Component } from 'react';
import { number, shape } from 'prop-types';
/**
 * The `<ThemeProvider>` is a shorthand for setting context values that can be used
 * for changing the default configuration values used by Componentry components.
 * The passed theme configurations are namespaced to prevent collisions.
 *
 * See the theme propTypes for available configurations.
 *
 * Note that we don't actually set any context here for default, b/c using the
 * ThemeProvider is entirely optional. Any theme defaults need to be handled by
 * the component (or /utils/theme when components). This way when a user doesn't
 * use the ThemeProvider there is still defaults.
 * @export
 * @class ThemeProvider
 * @extends {Component}
 */

var ThemeProvider = /*#__PURE__*/function (_Component) {
  _inherits(ThemeProvider, _Component);

  var _super = _createSuper(ThemeProvider);

  function ThemeProvider() {
    _classCallCheck(this, ThemeProvider);

    return _super.apply(this, arguments);
  }

  _createClass(ThemeProvider, [{
    key: "getChildContext",

    /**
     * Return a library namespace for theme configurations to prevent name collisions
     */
    value: function getChildContext() {
      return {
        THEME: _objectSpread({}, this.props.theme)
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return ThemeProvider;
}(Component);

_defineProperty(ThemeProvider, "childContextTypes", {
  THEME: shape({
    transitionDuration: number // Component configurations not declared, explicit declaration not necessary

  })
});

export { ThemeProvider as default };