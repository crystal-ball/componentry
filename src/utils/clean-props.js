// @flow

const spaceProps = [
  'm',
  'mx',
  'my',
  'mt',
  'mb',
  'ml',
  'mr',
  'p',
  'px',
  'py',
  'pt',
  'pb',
  'pr',
  'pl',
]

/**
 * Removes all theming related props (currently only spacing)
 */
// $FlowIgnore
export const filterProps = props => {
  const filtered = {
    active: {},
    space: {},
    props: {},
  }

  Object.keys(props).forEach(key => {
    if (spaceProps.indexOf(key) !== -1) {
      filtered.space[key] = props[key]
    } else {
      filtered.props[key] = props[key]
    }
  })
  return filtered
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
