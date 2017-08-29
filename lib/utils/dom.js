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
    return target
  }
  if (target.parentNode) {
    return closest(target.parentNode, className)
  }
  // Default null when no matches are found
  return null
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
    getTextWidth.canvas || (getTextWidth.canvas = document.createElement('canvas'))
  const context = canvas.getContext('2d')
  context.font = font
  const metrics = context.measureText(text)
  return metrics.width
}

/**
 * Function to handle removing default Bootstrap box-shadow focus style only on click
 * of button by attaching function to the `onMouseDown` event (which is only
 * fired for mouse events).
 *
 * Function overrides default browser outline css, then attaches a blur
 * listener to element that returns outline control to browser on blur and
 * self destructs listener. This allows the element to regain focus if the
 * user switches to keyboard.
 *
 * _Note that Bootstrap overrides the default browser **outline** to none for button
 * focus and replaces it with a box shadow. This targets that box shadow for click
 * events **only**. On keyboard focus, the default Bootstrap box shadow is still
 * shown. This provides A++ Accessibility for keyboard users._
 * @param {Object} evt React synthetic event
 */
export function suppressBoxShadowOnClick(evt) {
  function blurHandler(event) {
    // Remove box-shadow override to enable possibility of keyboard focus
    event.target.style.boxShadow = ''
    event.target.style.outline = ''
    // Remove this blur listener
    event.target.removeEventListener('blur', blurHandler)
  }

  evt.target.style.boxShadow = 'none'
  evt.target.style.outline = 'none'
  evt.target.addEventListener('blur', blurHandler)
}
