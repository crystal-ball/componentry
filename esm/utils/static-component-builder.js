import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { useTheme } from '../Theme/Theme';
import { element } from './element-creator';

/**
 * Generates a static component. Used for components that just set a className
 * and HTML attributes
 * @param displayName Component name
 * @param defaultProps Componentry library default prop values
 */
export function staticComponent(displayName, defaultProps) {
  function Component(props) {
    return element(displayName, _objectSpread(_objectSpread(_objectSpread({}, defaultProps), useTheme(displayName)), props));
  }

  Component.displayName = displayName;
  return Component;
}