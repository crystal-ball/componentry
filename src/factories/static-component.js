import element from '../element'
import { useTheme } from '../Theme/Theme'

/**
 * Generate a library component with no dynamic behaviors
 * @param {string} name
 * @param {Object} propsDefaults Library defaults, overridden by theme defaults
 *  then instance props
 * @returns {import('react').FunctionComponent<any>}
 */
export default function staticComponent(name, propsDefaults) {
  function Component(props) {
    return element({ ...propsDefaults, ...useTheme(name), ...props })
  }
  Component.displayName = name

  return Component
}
