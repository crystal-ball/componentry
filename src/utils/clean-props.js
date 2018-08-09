// @flow
/**
 * Prevent passing invalid props to DOM elements by passing component props not meant
 * for DOM.
 * @export
 * @param {Object} props Props to clean up
 * @param {Array} removeKeys Keys mapping to props to remove
 * @returns {Object} Props object with keys removed
 */
export default function cleanProps(props: {}, removeKeys: Array<string>): {} {
  const cleaned: {} = Object.assign({}, props)
  removeKeys.forEach(key => delete cleaned[key])

  return cleaned
}

// Cleans all active related props for passing ...rest safely to DOM elements
// $FlowIgnore
export const cleanActive = ({ active, visible, activate, deactivate, ...rest }) => rest
