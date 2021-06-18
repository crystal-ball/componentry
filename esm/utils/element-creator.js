import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["as", "className", "componentCx", "style", "themeCx"];
import { createElement } from 'react';
import clsx from 'clsx';
import { parseBaseCx } from './class-names';
import { componentry } from './componentry'; // Type used to *constrain* what props can be passed into element()

// 📝 Type docs
// ElementOptions<TProps> is needed for componentCx and themeCx which we don't
//   want to define in the component props
// interface ComponentProps is needed to type the shared props as, className,
//   and style

/**
 * Utility function handles calling React.createElement such that the component
 * render element can be specified with an `as` prop and all classes and styles
 * are merged properly.
 *
 * (This lets us create elements that are very flexible with much less verbose
 * code at the definition site)
 */
export function element(displayName, _ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      componentCx = _ref.componentCx,
      style = _ref.style,
      themeCx = _ref.themeCx,
      merged = _objectWithoutProperties(_ref, _excluded);

  // The componentry util will: filter out remaining library props, create base
  // styles, and create base classNames

  /* @ts-ignore BaseProps isn't fully typed out to match componentry() yet */
  var _componentry = componentry(merged),
      utilityCx = _componentry.utilityCx,
      props = _componentry.props,
      styles = _componentry.styles;

  return /*#__PURE__*/createElement(as, _objectSpread({
    style: _objectSpread(_objectSpread({}, styles), style),
    className: clsx("\uD83C\uDD72-".concat(parseBaseCx(displayName)), // Component base className, eg '🅲-btn'
    themeCx, // User defined default className from theme context
    componentCx, // Library defined component specific classNames, eg 'btn-sm'
    className, // User supplied className
    utilityCx // Utility classNames, eg 'mt-xl'
    )
  }, props));
}