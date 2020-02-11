import elem from './elem-factory'
import { useTheme } from './Theme/Theme'

export default function simpleComponent(name, defaults) {
  function Component(props) {
    return elem({ ...defaults, ...useTheme(name), ...props })
  }
  Component.displayName = name

  return Component
}
