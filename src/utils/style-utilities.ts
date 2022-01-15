const classNamesProps = {
  active: 1,
  alignContent: 1,
  alignItems: 1,
  alignSelf: 1,
  backgroundColor: 1,
  bold: 1,
  border: 1,
  borderBottom: 1,
  borderColor: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  color: 1,
  disabled: 1,
  fontFamily: 1,
  fontSize: 1,
  fontWeight: 1,
  gap: 1,
  invisible: 1,
  italic: 1,
  justifyContent: 1,
  position: 1,
  textAlign: 1,
  textTransform: 1,
  visible: 1,
}

type UtilityProps = Partial<{
  [prop in keyof typeof classNamesProps]: string | boolean
}>

const stylesProps: Partial<Record<keyof React.CSSProperties, 1>> = {
  letterSpacing: 1,
  lineHeight: 1,
  width: 1,
  maxWidth: 1,
  minWidth: 1,
  height: 1,
  maxHeight: 1,
  minHeight: 1,
}

const spacingProps = {
  'm': 1,
  'mt': 1,
  'mr': 1,
  'mb': 1,
  'ml': 1,
  'mx': 1,
  'my': 1,
  'p': 1,
  'pt': 1,
  'pr': 1,
  'pb': 1,
  'pl': 1,
  'px': 1,
  'py': 1,
  'gap': 1,
  'gap-x': 1,
  'gap-y': 1,
}

type UtilityClasses = {
  [className: string]: string | boolean | undefined
}

function generateClassNames(p: UtilityProps): UtilityClasses {
  return {
    // LAYOUT
    [String(p.position)]: p.position,
    'invisible': p.invisible,
    'visible': p.visible,

    // FLEXBOX+GRID
    [`content-${p.alignContent}`]: p.alignContent,
    [`gap-${p.gap}`]: p.gap,
    [`items-${p.alignItems}`]: p.alignItems,
    [`justify-${p.justifyContent}`]: p.justifyContent,
    [`self-${p.alignSelf}`]: p.alignSelf,

    // TYPOGRAPHY
    [`font-${p.fontFamily}`]: p.fontFamily,
    [`font-${p.fontWeight}`]: p.fontWeight,
    [`text-${p.textAlign}`]: p.textAlign,
    [`text-${p.color}`]: p.color,
    [`text-${p.fontSize}`]: p.fontSize,
    [String(p.textTransform)]: p.textTransform,
    'font-bold': p.bold,
    'italic': p.italic,

    // BACKGROUNDS
    [`bg-${p.backgroundColor}`]: p.backgroundColor,

    // BORDERS
    'border': p.border, // 1px borderWidth
    'border-b': p.borderBottom, // 1px borderWidth
    'border-l': p.borderLeft, // 1px borderWidth
    'border-r': p.borderRight, // 1px borderWidth
    'border-t': p.borderTop, // 1px borderWidth
    [`border-${p.borderColor}`]: p.borderColor,

    // STATES (eg https://mui.com/customization/how-to-customize/#state-classes)
    '🅲-active': p.active,
    '🅲-disabled': p.disabled,
  }
}

type Props = {
  [prop: string]: unknown
}

type UtilityStyles = {
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
export function utilityStyles({
  /* eslint-disable @typescript-eslint/no-unused-vars */
  __precompile,
  block,
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
}: Props): UtilityStyles {
  const classNames: UtilityProps = {}
  const spacingCx: string[] = []
  const styles: React.CSSProperties = {}
  const props: Props = {}

  // Pass through disabled to final element as it's a valid HTML attribute
  if (filteredProps.disabled) props.disabled = true

  // For each prop passed to any component, bucket it into a library className
  // or style set or pass through in rest
  Object.keys(filteredProps).forEach((prop) => {
    const propValue = filteredProps[prop] as string | number
    if (prop in spacingProps) {
      spacingCx.push(`${prop}-${propValue}`)
    } else if (prop in classNamesProps) {
      // 2. The prop maps to a utility className
      // @ts-ignore DEBT: not sure how to type
      classNames[prop] = propValue
    } else if (prop in stylesProps) {
      // 1. The prop maps to a utility style
      // @ts-ignore DEBT not sure how to type
      styles[prop] = propValue
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

export const precompileProps = {
  inline: 1,
  variant: 1,
  // --- Flex
  align: 1,
  direction: 1,
  justify: 1,
  wrap: 1,
  // --- Text
  bold: 1,
  color: 1,
  italic: 1,
}

export const utilityProps = { ...classNamesProps, ...stylesProps, ...spacingProps }
