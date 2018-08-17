// @flow
/**
 * Removes props specified in `removeKeys` to prevent passing invalid props to
 * DOM elements.
 */
export default function cleanProps(props: {}, removeKeys: Array<string>): {} {
  const cleaned: {} = Object.assign({}, props)
  removeKeys.forEach(key => delete cleaned[key])

  return cleaned
}

/**
 * Removes all props used by active components
 */
// $FlowIgnore
export const cleanActive = ({
  active,
  visible,
  activate,
  deactivate,
  defaultActive,
  onActivate,
  onActivated,
  onDeactivate,
  onDeactivated,
  ...rest
}) => rest
