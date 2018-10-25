/**
 * Componentry styles design:
 * 1. Default provide utility props for component
 * 2. Pass through numbers to styles
 * 3. Pass through strings to styles
 * 4. Classes are an optimization
 */

// Library class names
// ---------------------------------------------------------------------------

const classNamesMap = {}
;[
  'bg',
  'borderColor',
  'color',
  'fontWeight',
  'italic',
  'monospace',
  'size',
  'textAlign',
  'uppercase',
].forEach(p => {
  classNamesMap[p] = true
})

const generateClassNames = p => ({
  'font-italic': p.italic,
  'text-uppercase': p.uppercase,
  'text-monospace': p.monospace,
  [`bg-${p.bg}`]: p.bg,
  [`border-${p.borderColor}`]: p.borderColor,
  [`font-weight-${p.fontWeight}`]: p.fontWeight,
  [`text-${p.color}`]: p.color,
  [`text-${p.size}`]: p.size,
  [`text-${p.textAlign}`]: p.textAlign,
})

// Library styles
// ---------------------------------------------------------------------------

const stylesMap = {}
;[
  /* includes m* and p* styles */
  /* includes b* and border* styles */
  'border',
  'fontSize',
  'letterSpacing',
  'lineHeight',
  'width',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
].forEach(baseStyle => {
  stylesMap[baseStyle] = baseStyle
})

const base = {
  m: 'margin',
  p: 'padding',
  b: 'border',
}

const modifier = {
  t: 'Top',
  l: 'Left',
  r: 'Right',
  b: 'Bottom',
}
;['m', 'p', 'b'].forEach(b => {
  stylesMap[b] = base[b]
  ;['t', 'r', 'b', 'l'].forEach(m => {
    stylesMap[b + m] = base[b] + modifier[m]

    // Add border* modifiers
    const border = `border${modifier[m]}`
    stylesMap[border] = border
  })
})

// Componentry utility
// ---------------------------------------------------------------------------

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
