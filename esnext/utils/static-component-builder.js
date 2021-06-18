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
    return element(displayName, { ...defaultProps,
      ...useTheme(displayName),
      ...props
    });
  }

  Component.displayName = displayName;
  return Component;
}