const classNamesProps = {
  active: 1,
  alignContent: 1,
  alignItems: 1,
  alignSelf: 1,
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
  fontWeight: 1,
  italic: 1,
  justifyContent: 1,
  position: 1,
  textAlign: 1,
  textTransform: 1,
  visible: 1,
}

type UtilityProps = Partial<
  {
    [prop in keyof typeof classNamesProps]: string | boolean
  }
>

const stylesProps: Partial<Record<keyof React.CSSProperties, 1>> = {
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
const spacingProps: { [classname: string]: number } = {}
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

type UtilityClasses = {
  [classname: string]: string | boolean | undefined
}

function generateClassNames(p: UtilityProps): UtilityClasses {
  return {
    'active': p.active, // Componentry
    'disabled': p.disabled, // Componentry
    'border': p.border,
    'border-b': p.borderBottom,
    'border-l': p.borderLeft,
    'border-r': p.borderRight,
    'border-t': p.borderTop,
    'italic': p.italic,
    'visible': p.visible,
    [String(p.position)]: p.position,
    [String(p.textTransform)]: p.textTransform,
    [`bg-${p.backgroundColor}`]: p.backgroundColor,
    [`border-${p.borderColor}`]: p.borderColor,
    [`border-${p.borderWidth}`]: p.borderWidth,
    [`content-${p.alignContent}`]: p.alignContent,
    [`font-${p.fontFamily}`]: p.fontFamily,
    [`font-${p.fontWeight}`]: p.fontWeight,
    [`items-${p.alignItems}`]: p.alignItems,
    [`justify-${p.justifyContent}`]: p.justifyContent,
    [`self-${p.alignSelf}`]: p.alignSelf,
    [`text-${p.fontColor}`]: p.fontColor,
    [`text-${p.fontSize}`]: p.fontSize,
    [`text-${p.textAlign}`]: p.textAlign,
  }
}

type Props = {
  [prop: string]: unknown
}

type ComponentryAttributes = {
  props: Props
  styles: React.CSSProperties
  utilityCx: [UtilityClasses, string[]]
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
  /* eslint-disable @typescript-eslint/no-unused-vars */
  block,
  color,
  outline,
  fill,
  inline,
  justify,
  pills,
  variant,
  vertical,
  // ✓ Componentry props filtered out
  activate,
  deactivate,
  defaultActive,
  guid,
  onActivate,
  onActivated,
  onDeactivate,
  onDeactivated,
  // ✓ Active props filtered out
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...filteredProps
}: Props): ComponentryAttributes {
  const classNames: UtilityProps = {}
  const spacingCx: string[] = []
  const styles: React.CSSProperties = {}
  const props: Props = {}

  // We want disabled to reach final element as an HTML attr value
  if (filteredProps.disabled) props.disabled = true

  // For each prop passed to any component, bucket it into a library className
  // or style set or pass through in rest
  Object.keys(filteredProps).forEach((prop) => {
    if (
      prop in stylesProps &&
      // If a style prop has a library size, fall through to classNames check
      // @ts-ignore-next-line
      !['xs', 'sm', 'md', 'lg', 'xl'].includes(filteredProps[prop])
    ) {
      // 1. The prop maps to a utility style
      // @ts-ignore DEBT not sure how to type
      styles[prop] = filteredProps[prop]
    } else if (prop in classNamesProps) {
      // 2. The prop maps to a utility className
      // @ts-ignore DEBT: not sure how to type
      classNames[prop] = filteredProps[prop]
    } else if (spacingProps[prop]) {
      // 3. The prop maps to a shorthand utility style/className
      // @ts-ignore DEBT: not sure how to type
      if (['xs', 'sm', 'md', 'lg', 'xl'].includes(filteredProps[prop])) {
        // 3a. The prop value maps to a computed className, eg (pt: 'xs') -> `pt-xs`
        spacingCx.push(`${prop}-${filteredProps[prop]}`)
      } else {
        // 3b. The prop value is a raw value that should be set as a style
        // attribute, eg (pt: 7) -> `paddingTop: 7`
        const spacingMatch = spacingRegex.exec(prop)
        if (!spacingMatch) return
        const [, b, m] = spacingMatch
        if (m === 'x' || m === 'y') {
          // x and y values have to be broken out into the individual direction values
          // @ts-ignore DEBT: not sure how to type
          styles[spacingBase[b] + spacingModifier[m][0]] = filteredProps[prop]
          // @ts-ignore DEBT: not sure how to type
          styles[spacingBase[b] + spacingModifier[m][1]] = filteredProps[prop]
        } else {
          // @ts-ignore DEBT: not sure how to type
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
