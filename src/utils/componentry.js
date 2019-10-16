/**
 * Library utility functions for working with props to className+style mappings
 * @module
 */

// --------------------------------------------------------
// Target class names generator

/**
 * Fn generates the classes for action elements
 */
export const actionClasses = ({ block, color, disabled, outline, size, variant }) => ({
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

// Need border, borderTop, borderRight, etc. to set borderWidth (style)
// Need borderColor to set `.border-<COLOR>` class
// Need borderRadius

// border will set default border width, color

// border: 1px solid $border-color;
// borderTop: 1px solid $border-color

// borderColor: border color

const classNamesProps = new Set([
  'background',
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borderColor',
  'borderWidth',
  'fontColor',
  'fontSize',
  'fontWeight',
  'italic',
  'monospace',
  'position',
  'textAlign',
  'uppercase',
])

const stylesProps = new Set([
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

// Generate set of margin (m*), and padding (p*) spacing props
const spacingProps = new Set([])
const base = {
  m: 'margin',
  p: 'padding',
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
  spacingProps.add(b)
  Object.keys(modifier).forEach(m => {
    spacingProps.add(b + m)
  })
})

const generateClassNames = p => ({
  border: p.border,
  'border-top': p.borderTop,
  'border-right': p.borderRight,
  'border-bottom': p.borderBottom,
  'border-left': p.borderLeft,
  'font-style-italic': p.italic,
  'text-monospace': p.monospace,
  'text-uppercase': p.uppercase,
  [`background-${p.background}`]: p.background,
  [`border-${p.borderColor}`]: p.borderColor,
  [`border-width-${p.borderWidth}`]: p.borderWidth,
  [`font-color-${p.fontColor}`]: p.fontColor,
  [`font-size-${p.fontSize}`]: p.fontSize,
  [`font-weight-${p.fontWeight}`]: p.fontWeight,
  [`position-${p.position}`]: p.position,
  [`text-align-${p.textAlign}`]: p.textAlign,
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
  block,
  color,
  outline,
  fill,
  justify,
  pills,
  variant,
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
  const spacingCx = []
  const styles = {}
  const rest = {}

  // For each prop passed to any component, bucket it into a library className
  // or style set or pass through in rest
  Object.keys(filteredProps).forEach(prop => {
    if (classNamesProps.has(prop)) {
      // 1. The prop maps to a utility className
      classNames[prop] = filteredProps[prop]
    } else if (stylesProps.has(prop)) {
      // 2. The prop maps to a utility style
      styles[prop] = filteredProps[prop]
    } else if (spacingProps.has(prop)) {
      // 3. The prop maps to a shorthand utility style/className
      if (['xs', 'sm', 'base', 'lg', 'xl'].includes(filteredProps[prop])) {
        // 3a. The prop value maps to a computed className, eg (pt: 'xs') -> `pt-xs`
        spacingCx.push(`${prop}-${filteredProps[prop]}`)
      } else {
        // 3b. The prop value is a raw value that should be set as a style
        // attribute, eg (pt: 7) -> `paddingTop: 7`
        const [, b, m] = prop.match(/([bmp])([trblxy])?/)
        if (m === 'x' || m === 'y') {
          // x and y values have to be broken out into the individual direction values
          styles[base[b] + modifier[m][0]] = filteredProps[prop]
          styles[base[b] + modifier[m][1]] = filteredProps[prop]
        } else {
          styles[base[b] + (modifier[m] || '')] = filteredProps[prop]
        }
      }
    } else {
      // 4. The prop doesn't map to a library utility prop, pass it through
      rest[prop] = filteredProps[prop]
    }
  })

  return {
    libraryClassNames: [generateClassNames(classNames), spacingCx],
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
