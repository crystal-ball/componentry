import React, { createContext, useContext } from 'react';
/** Theme Context */

var ThemeCtx = /*#__PURE__*/createContext(null);

/**
 * [Theme component 📝](https://componentry.design/components/theme)
 * @experimental
 */
export var Theme = function Theme(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement(ThemeCtx.Provider, {
    value: theme
  }, children);
};
Theme.displayName = 'Theme';
/**
 * [Theme hook 📝](https://componentry.design/components/theme)
 * @param componentName Library component name, eg Button, Dropdown, Modal, etc.
 */

export function useTheme(componentName) {
  var __precompile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (__precompile) return null; // For the theme context, we don't warn on accessing without a provider b/c
  // internally components use this hook to check for optionally set theme
  // values in apps where the provider may not have been added.
  // eslint-disable-next-line react-hooks/rules-of-hooks -- Library __precompile is a build time constant

  var theme = useContext(ThemeCtx);
  if (!theme) return null; // @ts-ignore DEBT: not sure how to type

  return theme[componentName];
}