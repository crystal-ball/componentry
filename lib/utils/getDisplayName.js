/**
 * Finds a useable display name for a component.
 * @export
 * @param {Component} component
 * @returns {string} Name or display name for component.
 */
export default function(component={}) {
  return component.displayName || component.name || 'Component';
}
