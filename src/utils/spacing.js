/**
 * Library spacing compute handles returning className values for numbers and
 * inline style values for custom strings.
 */
export default function spacing(props) {
  const classNames = []
  const styles = {}

  Object.keys(props).forEach(key => {
    let value = props[key]
    // Append px if a unit isn't set otherwise inline styles don't work
    if (!/[a-z]/.test(value)) value += 'px'

    if (typeof value === 'number') {
      classNames.push(`${key}-${value}`)
      return
    }

    const [, base, modifier] = key.match(/([mp])([trblxy]?)/)
    const styleKey = base === 'm' ? 'margin' : 'padding'

    switch (modifier) {
      case 't':
        styles[`${styleKey}Top`] = value
        break
      case 'r':
        styles[`${styleKey}Right`] = value
        break
      case 'b':
        styles[`${styleKey}Bottom`] = value
        break
      case 'l':
        styles[`${styleKey}Left`] = value
        break
      case 'x':
        styles[`${styleKey}Left`] = value
        styles[`${styleKey}Right`] = value
        break
      case 'y':
        styles[`${styleKey}Top`] = value
        styles[`${styleKey}Bottom`] = value
        break
      default:
        styles[styleKey] = value
    }
  })

  return { classNames, styles }
}
