/**
 * Find the closest DOM parent with the passed `className`. If a matching ancestor
 * is not found return `null`
 * @method closest
 * @param {Object} target    Starting DOM node
 * @param {string} className Class name to filter ancestors against
 * @return {?Object} Closest DOM ancestor when it exists, otherwise null
 */
export function closest(target, className) {
  if (target.classList && target.classList.contains(className)) {
    return target;
  }
  if (target.parentNode) {
    return closest(target.parentNode, className);
  }
  // Default null when no matches are found
  return null;
}

/**
 * Uses canvas.measureText to compute and return the width of the given text of given
 * font in pixels. Kudos to:
 * http://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 *
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * @return {string} The width of the text in a px string format, eg: `'467px'`
 */
export function getTextWidth(text, font) {
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}
