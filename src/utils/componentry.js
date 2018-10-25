/**
 * Componentry styles design:
 * 1. Default provide utility props for component
 * 2. Pass through numbers to styles
 * 3. Pass through strings to styles
 * 4. Classes are an optimization
 */

// --- Available classes
const classNamesMap = {
  color: true,
  fontWeight: true,
  italic: true,
  monospace: true,
  size: true,
  textAlign: true,
  uppercase: true,
}

// --- Available styles
const stylesMap = {
  /* p* and m* space classes */ // type number -> px
  fontSize: 'fontSize', // type number -> px
  letterSpacing: 'letterSpacing', // type number -> px
  lineHeight: 'lineHeight', // type number -> number
}

const baseSpace = {
  m: 'margin',
  p: 'padding',
}

const directionalSpace = {
  t: 'Top',
  l: 'Left',
  r: 'Right',
  b: 'Bottom',
}
;['m', 'p'].forEach(space => {
  stylesMap[space] = baseSpace[space]
  ;['t', 'r', 'b', 'l'].forEach(directional => {
    stylesMap[space + directional] = baseSpace[space] + directionalSpace[directional]
  })
})

const generateClassNames = p => ({
  'font-italic': p.italic,
  'text-uppercase': p.uppercase,
  'text-monospace': p.monospace,
  [`font-weight-${p.fontWeight}`]: p.fontWeight,
  [`text-${p.color}`]: p.color,
  [`text-${p.size}`]: p.size,
  [`text-${p.textAlign}`]: p.textAlign,
})

const componentry = ({
  active,
  visible,
  activate,
  deactivate,
  defaultActive,
  onActivate,
  onActivated,
  onDeactivate,
  onDeactivated,
  // --- Library props filtered out
  ...filtered
}) => {
  const classNames = {}
  const style = {}
  const rest = {}

  Object.keys(filtered).forEach(p => {
    if (stylesMap[p]) {
      style[stylesMap[p]] = filtered[p]
    } else if (classNamesMap[p]) {
      classNames[p] = filtered[p]
    } else {
      rest[p] = filtered[p]
    }
  })

  return {
    className: generateClassNames(classNames),
    rest,
    style,
  }
}

export default componentry

// type Props = {
//   // Inline style props
//   fontSize?: number | string, // num -> px
//   letterSpacing?: number | string, // num -> px
//   lineHeight?: number | string, // num -> px
//   // -- Utility class name props
//   /** Additionally all theme colors and grays  */
//   color?: 'white' | 'body' | 'muted',
//   fontWeight?: 'light' | 'normal' | 'bold',
//   italic?: boolean,
//   monospace?: boolean,
//   size?: 'sm' | 'lg',
//   textAlign?: 'justify' | 'right' | 'center' | 'left',
//   uppercase?: boolean,
// }
