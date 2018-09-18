/**
 * Library spacing compute handles returning className values for numbers and
 * inline style values for custom strings.
 */
export default function spacing(props) {
  const classNames = []
  const styles = {}

  Object.keys(props).forEach(key => {
    let value = props[key]

    if (typeof value === 'number') {
      classNames.push(`${key}-${value}`)
      return
    }

    // Else add the key value to style props map
    const styleName = key.replace(/([mp])([trbl]?)/, (match, p1, p2) => {
      let styleKey = p1 === 'm' ? 'margin' : 'padding'
      if (p2) {
        /* eslint-disable default-case */
        switch (p2) {
          case 't':
            styleKey += 'Top'
            break
          case 'r':
            styleKey += 'Right'
            break
          case 'b':
            styleKey += 'Bottom'
            break
          case 'l':
            styleKey += 'Left'
            break
        }
        /* eslint-enable default-case */
      }

      return styleKey
    })

    // Append px if a unit isn't set otherwise inline styles don't work
    if (!/[a-z]/.test(value)) value += 'px'

    styles[styleName] = value
  })

  return { classNames, styles }
}
