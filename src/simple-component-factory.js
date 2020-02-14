import elem from './elem-factory'
import { useTheme } from './Theme/Theme'

/**
 * Generate a library component with no dynamic behaviors
 * @param {string} name
 * @param {Object} propsDefaults Library defaults, overridden by theme defaults
 *  then instance props
 * @returns {import('react').FunctionComponent<any>}
 */
export default function simpleComponent(name, propsDefaults) {
  function Component(props) {
    return elem({ ...propsDefaults, ...useTheme(name), ...props })
  }
  Component.displayName = name

  return Component
}
