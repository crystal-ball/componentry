/**
 * DOM manipulation and inspection utility fns
 * @module
 */

// --------------------------------------------------------
// closest handler

/**
 * Find the closest DOM parent with the a `data-id` matching `guid`. If a matching
 * ancestor is not found returns `null`
 */
export function closest(target: HTMLElement, guid: string): HTMLElement | null {
  if (target.dataset && target.dataset.id === guid) return target
  if (target.parentNode && target.parentNode instanceof HTMLElement) {
    return closest(target.parentNode, guid)
  }

  // Default null when no matches are found
  return null
}

// --------------------------------------------------------
// Click/Scroll outline handlers

const mouseMoveSuppressOutline = () => {
  document.body.classList.add('suppress-outline')
  document.removeEventListener('mousemove', mouseMoveSuppressOutline)
  document.addEventListener('keydown', onKeyTab)
}
const touchMoveSuppressOutline = () => {
  document.body.classList.add('suppress-outline')
  document.removeEventListener('touchmove', touchMoveSuppressOutline)
  document.addEventListener('keydown', onKeyTab)
}

function onKeyTab(e: KeyboardEvent) {
  if (e.key === 'tab') {
    document.body.classList.remove('suppress-outline')
    document.removeEventListener('keydown', onKeyTab)

    document.addEventListener('mousemove', mouseMoveSuppressOutline)
    document.addEventListener('touchmove', touchMoveSuppressOutline)
  }
}

/**
 * Setup the mouse and touch listeners on app start, suppress outlines only if a
 * user shows us they're not a keyboard user. Re-enable focus outlines if they
 * start navigating w/ keyboard.
 */
export function setupOutlineHandlers(): void {
  document.addEventListener('mousemove', mouseMoveSuppressOutline)
  document.addEventListener('touchmove', touchMoveSuppressOutline)
}
