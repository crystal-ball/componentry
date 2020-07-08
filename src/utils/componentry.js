import cx from 'classnames'

/**
 * Library utility functions for working with props to className+style mappings
 * @module
 */

// --------------------------------------------------------
// Component arias generator

/**
 * Return object of aria attributes using options
 * @param {Object} opts
 * @param {boolean|string} opts.active
 * @param {string} [opts.activeId]
 * @param {string} opts.guid
 * @param {string} [opts.type] Oneof 'trigger' or 'content'
 * @param {Object} opts.arias
 * @param {boolean} [opts.arias.controls]
 * @param {boolean} [opts.arias.describedby]
 * @param {boolean} [opts.arias.expanded]
 * @param {boolean} [opts.arias.haspopup]
 * @param {boolean} [opts.arias.hidden]
 * @param {boolean} [opts.arias.id]
 * @param {boolean} [opts.arias.labelledby]
 * @param {string} [opts.arias.role]
 * @param {boolean} [opts.arias.selected]
 */
export function elemArias({ active, activeId, guid, type, arias = {} }) {
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
  } = arias
  const computedArias = {}

  if (controls) computedArias['aria-controls'] = guid
  if (describedby) computedArias['aria-describedby'] = guid
  if (expanded) computedArias['aria-expanded'] = String(active)
  if (haspopup) computedArias['aria-haspopup'] = 'true'
  if (hidden) computedArias['aria-hidden'] = String(!active)
  if (id) computedArias.id = guid
  if (labelledby) computedArias['aria-labelledby'] = guid
  if (role) computedArias.role = role
  if (selected) computedArias['aria-selected'] = String(active)

  // For elements with multiple trigger/content groups an activeId is used to
  // track which group is active. Aria values must include addl identifiers
  // to ensure uniqueness
  if (activeId && type === 'trigger') {
    computedArias.id = `${guid}-${activeId}-tab`
    computedArias['aria-controls'] = `${guid}-${activeId}-content`
    computedArias['aria-selected'] = String(active === activeId)
  } else if (activeId && type === 'content') {
    computedArias.id = `${guid}-${activeId}-content`
    computedArias['aria-labelledby'] = `${guid}-${activeId}-trigger`
    computedArias['aria-hidden'] = String(activeId !== active)
  }

  return computedArias
}

/**
 * Function generates the classes for nav elements
 * @param {string} variant
 * @param {Object} opts
 * @param {boolean} [opts.fill]
 * @param {boolean} [opts.justify]
 * @param {boolean} [opts.pills]
 * @param {boolean} [opts.vertical]
 * @returns {string}
 */
export function navClasses(variant, { fill, justify, pills, vertical }) {
  return cx({
    [variant]: true,
    [`${variant}-fill`]: fill,
    [`${variant}-justified`]: justify,
    [`${variant}-pills`]: pills,
    [`${variant}-vertical`]: vertical,
  })
}

// --------------------------------------------------------
// Library shared className+styles generator

const classNamesProps = {
  active: 1,
  backgroundColor: 1,
  border: 1,
  borderBottom: 1,
  borderColor: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
  disabled: 1,
  fontColor: 1,
  fontFamily: 1,
  fontSize: 1,
  fontStyle: 1,
  fontWeight: 1,
  position: 1,
  textAlign: 1,
  textTransform: 1,
  visible: 1,
}

const stylesProps = {
  fontSize: 1,
  letterSpacing: 1,
  lineHeight: 1,
  width: 1,
  maxWidth: 1,
  minWidth: 1,
  height: 1,
  maxHeight: 1,
  minHeight: 1,
}

// Generate set of margin (m*), and padding (p*) spacing props
const spacingProps = {}
const spacingBase = {
  m: 'margin',
  p: 'padding',
}
const spacingModifier = {
  t: 'Top',
  l: 'Left',
  r: 'Right',
  b: 'Bottom',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
}

Object.keys(spacingBase).forEach((b) => {
  spacingProps[b] = 1
  Object.keys(spacingModifier).forEach((m) => {
    spacingProps[b + m] = 1
  })
})
const spacingRegex = new RegExp(/([bmp])([trblxy])?/)

function generateClassNames(p) {
  return {
    'active': p.active,
    'border': p.border,
    'border-bottom': p.borderBottom,
    'border-left': p.borderLeft,
    'border-right': p.borderRight,
    'border-top': p.borderTop,
    'disabled': p.disabled,
    'visible': p.visible,
    [`background-color-${p.backgroundColor}`]: p.backgroundColor,
    [`border-color-${p.borderColor}`]: p.borderColor,
    [`border-width-${p.borderWidth}`]: p.borderWidth,
    [`font-color-${p.fontColor}`]: p.fontColor,
    [`font-family-${p.fontFamily}`]: p.fontFamily,
    [`font-size-${p.fontSize}`]: p.fontSize,
    [`font-style-${p.fontStyle}`]: p.fontStyle,
    [`font-weight-${p.fontWeight}`]: p.fontWeight,
    [`position-${p.position}`]: p.position,
    [`text-align-${p.textAlign}`]: p.textAlign,
    [`text-transform-${p.textTransform}`]: p.textTransform,
  }
}

/**
 * Library utility that handles:
 * 1. filtering out library props
 * 2. Mapping library props to style and className values
 *
 * NB: values are passed through without additional mapping, eg the number 1
 * isn't mapped to 1px or 1rem.
 */
export function componentry({
  block,
  color,
  outline,
  fill,
  inline,
  justify,
  pills,
  variant,
  vertical,
  // Component props filtered out
  activate,
  deactivate,
  defaultActive,
  guid,
  onActivate,
  onActivated,
  onDeactivate,
  onDeactivated,
  // --- Library props filtered out
  ...filteredProps
}) {
  const classNames = {}
  const spacingCx = []
  const styles = {}
  const props = {}

  // We want disabled to reach final element as an HTML attr value
  if (filteredProps.disabled) props.disabled = true

  // For each prop passed to any component, bucket it into a library className
  // or style set or pass through in rest
  Object.keys(filteredProps).forEach((prop) => {
    if (
      stylesProps[prop] &&
      // If a style prop has a library size, fall through to classNames check
      !['xs', 'sm', 'md', 'lg', 'xl'].includes(filteredProps[prop])
    ) {
      // 1. The prop maps to a utility style
      styles[prop] = filteredProps[prop]
    } else if (classNamesProps[prop]) {
      // 2. The prop maps to a utility className
      classNames[prop] = filteredProps[prop]
    } else if (spacingProps[prop]) {
      // 3. The prop maps to a shorthand utility style/className
      if (['xs', 'sm', 'md', 'lg', 'xl'].includes(filteredProps[prop])) {
        // 3a. The prop value maps to a computed className, eg (pt: 'xs') -> `pt-xs`
        spacingCx.push(`${prop}-${filteredProps[prop]}`)
      } else {
        // 3b. The prop value is a raw value that should be set as a style
        // attribute, eg (pt: 7) -> `paddingTop: 7`
        const [, b, m] = spacingRegex.exec(prop)
        if (m === 'x' || m === 'y') {
          // x and y values have to be broken out into the individual direction values
          styles[spacingBase[b] + spacingModifier[m][0]] = filteredProps[prop]
          styles[spacingBase[b] + spacingModifier[m][1]] = filteredProps[prop]
        } else {
          styles[spacingBase[b] + (spacingModifier[m] || '')] = filteredProps[prop]
        }
      }
    } else {
      // 4. The prop doesn't map to a library utility prop, pass it through
      props[prop] = filteredProps[prop]
    }
  })

  return {
    props,
    styles,
    utilityCx: [generateClassNames(classNames), spacingCx],
  }
}
