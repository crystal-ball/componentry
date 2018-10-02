const copyToClipboard = text => {
  let copyInput = document.getElementById('copy-to-clipboard-input')

  if (!copyInput) {
    const input = document.createElement('textarea')
    input.classList = 'copy-to-clipboard-input'
    input.id = 'copy-to-clipboard-input'
    input.setAttribute('role', 'presentation')
    // Add styles to hide input
    input.style.opacity = 0
    input.style.position = 'absolute'
    input.style.width = 0
    input.style.height = 0
    document.getElementsByTagName('body')[0].appendChild(input)

    copyInput = document.getElementById('copy-to-clipboard-input')
  }

  copyInput.value = text
  copyInput.select()

  try {
    document.execCommand('copy')
  } catch (ex) {
    return false
  }

  return true
}

export default copyToClipboard
