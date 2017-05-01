/**
 * Find the closest DOM parent with the passed `className`. If a matching ancestor
 * is not found return `null`
 * @method closest
 * @param {Object} target    Starting DOM node
 * @param {string} className Class name to filter ancestors against
 * @return {?Object} Closest DOM ancestor when it exists, otherwise null
 */
export function closest(target, className) {
  if (target.classList && target.classList.contains(className)) { return target; }
  if (target.parentNode) {
    return closest(target.parentNode, className);
  } else {
    return null;
  }
}
