let mouseMoveSuppressOutline
let touchMoveSuppressOutline

function onKeyTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.remove('suppress-outline')
    window.removeEventListener('keydown', onKeyTab)

    window.addEventListener('mousemove', mouseMoveSuppressOutline)
    window.addEventListener('touchmove', touchMoveSuppressOutline)
  }
}

mouseMoveSuppressOutline = () => {
  document.body.classList.add('suppress-outline')
  window.removeEventListener('mousemove', mouseMoveSuppressOutline)
  window.addEventListener('keydown', onKeyTab)
}

touchMoveSuppressOutline = () => {
  document.body.classList.add('suppress-outline')
  window.removeEventListener('touchmove', touchMoveSuppressOutline)
  window.addEventListener('keydown', onKeyTab)
}

/**
 * Setup the mouse and touch listeners on app start, suppress outlines only if a
 * user shows us they're not a keyboard user. Re-enable focus outlines if they
 * start navigating w/ keyboard.
 */
export default function setupOutlineHandlers() {
  window.addEventListener('mousemove', mouseMoveSuppressOutline)
  window.addEventListener('touchmove', touchMoveSuppressOutline)
}
