"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = useTheme;
exports.Theme = void 0;

var _react = _interopRequireWildcard(require("react"));

/** Theme Context */
var ThemeCtx = /*#__PURE__*/(0, _react.createContext)(null);

/**
 * [Theme component 📝](https://componentry.design/components/theme)
 * @experimental
 */
var Theme = function Theme(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/_react["default"].createElement(ThemeCtx.Provider, {
    value: theme
  }, children);
};

exports.Theme = Theme;
Theme.displayName = 'Theme';
/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param componentName Library component name, eg Button, Dropdown, Modal, etc.
 */

function useTheme(componentName) {
  var __precompile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (__precompile) return null; // For the theme context, we don't warn on accessing without a provider b/c
  // internally components use this hook to check for optionally set theme
  // values in apps where the provider may not have been added.
  // eslint-disable-next-line react-hooks/rules-of-hooks -- Library __precompile is a build time constant

  var theme = (0, _react.useContext)(ThemeCtx);
  if (!theme) return null; // @ts-ignore DEBT: not sure how to type

  return theme[componentName];
}