/**
 * Library utility functions for working with props to className+style mappings
 * @module
 */

// --------------------------------------------------------
// Target class names generator

/**
 * Fn generates the classes for anchor and button type target elements
 */
export const targetClassNames = ({ variant, block, color, disabled, outline, size }) => ({
  [variant]: true,
  [`${variant}-block`]: block,
  [`${variant}-${color}`]: color,
  [`${variant}-outline-${outline}`]: outline,
  [`${variant}-${size}`]: size,
  // We include a disabled class AND pass disabled prop to btn element for a11y
  disabled,
})

// --------------------------------------------------------
// Nav class names generator

export const navClasses = ({ fill, justify, pills, vertical }) => ({
  'nav-vertical': vertical,
  'nav-pills': pills,
  'nav-fill': fill,
  'nav-justified': justify,
})

// --------------------------------------------------------
// Library shared className+styles generator

const classNamesProps = new Set([
  'bg',
  'borderColor',
  'color',
  'fontWeight',
  'italic',
  'monospace',
  'position',
  'size',
  'textAlign',
  'uppercase',
])

const stylesProps = new Set([
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
])

// Generate set of border (b*), margin (m*), and padding (p*) style props
const shortStylesProps = new Set([])
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
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
}

Object.keys(base).forEach(b => {
  shortStylesProps.add(b)
  Object.keys(modifier).forEach(m => {
    shortStylesProps.add(b + m)
  })
})

const generateClassNames = p => ({
  'font-italic': p.italic,
  'text-uppercase': p.uppercase,
  'text-monospace': p.monospace,
  [`bg-${p.bg}`]: p.bg,
  [`border-${p.borderColor}`]: p.borderColor,
  [`font-weight-${p.fontWeight}`]: p.fontWeight,
  [`position-${p.position}`]: p.position,
  [`text-${p.color}`]: p.color,
  [`text-${p.size}`]: p.size,
  [`text-${p.textAlign}`]: p.textAlign,
})

/**
 * Library utility that handles:
 * 1. filtering out library props
 * 2. Mapping library props to style and className values
 *
 * NB: values are passed through without additional mapping, eg the number 1
 * isn't mapped to 1px or 1rem.
 */
export const componentry = ({
  anchor,
  button,
  variant,
  block,
  outline,
  fill,
  justify,
  pills,
  vertical,
  // Component props filtered out
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
  ...filteredProps
}) => {
  const classNames = {}
  const styles = {}
  const rest = {}

  // For each prop passed to any component, bucket it into a library className
  // or style set or pass through in rest
  Object.keys(filteredProps).forEach(prop => {
    if (classNamesProps.has(prop)) {
      classNames[prop] = filteredProps[prop]
    } else if (stylesProps.has(prop)) {
      styles[prop] = filteredProps[prop]
    } else if (shortStylesProps.has(prop)) {
      // Map the shorthand notation to valid style attributes, eg mt -> marginTop
      const [, b, m] = prop.match(/([bmp])([trblxy])?/)
      if (m === 'x' || m === 'y') {
        // x and y values have to be broken out into the individual direction values
        styles[base[b] + modifier[m][0]] = filteredProps[prop]
        styles[base[b] + modifier[m][1]] = filteredProps[prop]
      } else {
        styles[base[b] + (modifier[m] || '')] = filteredProps[prop]
      }
    } else {
      rest[prop] = filteredProps[prop]
    }
  })

  return {
    libraryClassNames: generateClassNames(classNames),
    rest,
    libraryStyles: styles,
  }
}

// --------------------------------------------------------
// Component arias generator

/**
 * Return object of aria attributes using options
 */
export function arias({ active, activeId, guid, type, arias: configArias = {} }) {
  const {
    controls,
    describedby,
    expanded,
    haspopup,
    hidden,
    id,
    labelledby,
    role,
    selected,
  } = configArias
  const _arias = {}

  if (controls) _arias['aria-controls'] = guid
  if (describedby) _arias['aria-describedby'] = guid
  if (expanded) _arias['aria-expanded'] = String(active)
  if (haspopup) _arias['aria-haspopup'] = 'true'
  if (hidden) _arias['aria-hidden'] = String(!active)
  if (id) _arias.id = guid
  if (labelledby) _arias['aria-labelledby'] = guid
  if (role) _arias.role = role
  if (selected) _arias['aria-selected'] = String(active)

  // For elements with multiple trigger/content groups an activeId is used to
  // track which group is active. Aria values must include addl identifiers
  // to ensure uniqueness
  if (activeId && type === 'trigger') {
    _arias.id = `${guid}-${activeId}-tab`
    _arias['aria-controls'] = `${guid}-${activeId}-content`
    _arias['aria-selected'] = String(active === activeId)
  } else if (activeId && type === 'content') {
    _arias.id = `${guid}-${activeId}-content`
    _arias['aria-labelledby'] = `${guid}-${activeId}-trigger`
    _arias['aria-hidden'] = String(activeId !== active)
  }

  return _arias
}
