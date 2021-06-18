"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireWildcard(require("react"));

var _nanoid = require("nanoid");

var _Theme = require("../Theme/Theme");

var _elementCreator = require("../utils/element-creator");

var _staticComponentBuilder = require("../utils/static-component-builder");

/* eslint-disable @typescript-eslint/no-empty-interface */
var InputCtx = /*#__PURE__*/(0, _react.createContext)(null);
/**
 * [Input component 📝](https://componentry.design/components/input)
 * @experimental
 */

var Input = function Input(_ref) {
  var children = _ref.children;

  /**
   * Guid instance property will be uniquely assigned once for each input
   * instance, this unique id is then passed to all children through context
   * where it can be used to wire together aria attributes
   */
  var _useRef = (0, _react.useRef)((0, _nanoid.nanoid)()),
      guid = _useRef.current;

  return /*#__PURE__*/_react["default"].createElement(InputCtx.Provider, {
    value: {
      guid: guid
    }
  }, children);
};

exports.Input = Input;
Input.displayName = 'Input'; // --- Description subcomponent ---

Input.Description = (0, _staticComponentBuilder.staticComponent)('InputDescription'); // --- Error subcomponent ---

Input.Error = (0, _staticComponentBuilder.staticComponent)('InputError'); // --- Field subcomponent ---

Input.Field = function InputField(props) {
  var ctx = (0, _react.useContext)(InputCtx);
  assertContext(ctx);
  return (0, _elementCreator.element)('InputField', (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    as: 'input',
    type: 'text',
    id: ctx.guid
  }, (0, _Theme.useTheme)('InputField')), props));
};

Input.Field.displayName = 'InputField'; // --- Label subcomponent ---

Input.Label = function InputLabel(props) {
  var ctx = (0, _react.useContext)(InputCtx);
  assertContext(ctx);
  return (0, _elementCreator.element)('InputLabel', (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    as: 'label',
    htmlFor: ctx.guid
  }, (0, _Theme.useTheme)('InputLabel')), props));
};

Input.Label.displayName = 'InputLabel'; // --------------------------------------------------------
// Utils

/**
 * Utility asserts ctx presence for safe access
 */

function assertContext(ctx) {
  if (!ctx) throw new Error('Input context cannot be used outside of Input component');
}