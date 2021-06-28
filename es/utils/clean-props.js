/**
 * Prevent passing invalid props to DOM elements by passing component props not meant
 * for DOM.
 * @export
 * @param {Object} props Props to clean up
 * @param {Array} removeKeys Keys mapping to props to remove
 * @returns {Object} Props object with keys removed
 */
export default function cleanProps(props, removeKeys) {
  var cleaned = Object.assign({}, props);
  removeKeys.forEach(function (key) {
    return delete cleaned[key];
  });
  return cleaned;
}