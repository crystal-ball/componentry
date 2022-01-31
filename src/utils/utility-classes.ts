import { type ClassDictionary } from 'clsx'
import { type UtilityProps } from './types'

export const utilityProps = {
  'active': 1,
  'alignContent': 1,
  'alignItems': 1,
  'alignSelf': 1,
  'backgroundColor': 1,
  'border': 1,
  'borderBottom': 1,
  'borderColor': 1,
  'borderLeft': 1,
  'borderRight': 1,
  'borderTop': 1,
  'color': 1,
  'disabled': 1,
  'display': 1,
  'fontFamily': 1,
  'fontSize': 1,
  'fontWeight': 1,
  'gap': 1,
  'gap-x': 1,
  'gap-y': 1,
  'height': 1,
  'invisible': 1,
  'italic': 1,
  'justifyContent': 1,
  'letterSpacing': 1,
  'lineHeight': 1,
  'm': 1,
  'maxHeight': 1,
  'maxWidth': 1,
  'mb': 1,
  'minHeight': 1,
  'minWidth': 1,
  'ml': 1,
  'mr': 1,
  'mt': 1,
  'mx': 1,
  'my': 1,
  'p': 1,
  'pb': 1,
  'pl': 1,
  'position': 1,
  'pr': 1,
  'pt': 1,
  'px': 1,
  'py': 1,
  'textAlign': 1,
  'textTransform': 1,
  'visible': 1,
  'width': 1,
}

function generateClassNames<Props extends UtilityProps>(p: Props): ClassDictionary {
  return {
    // LAYOUT
    [p.position ?? 'position']: p.position,
    [p.display ?? 'display']: p.display,
    'invisible': p.invisible,
    'visible': p.visible,

    // FLEXBOX+GRID
    [`content-${p.alignContent}`]: p.alignContent,
    [`items-${p.alignItems}`]: p.alignItems,
    [`justify-${p.justifyContent}`]: p.justifyContent,
    [`self-${p.alignSelf}`]: p.alignSelf,

    // SPACING
    [`m-${p.m}`]: p.m,
    [`mt-${p.mt}`]: p.mt,
    [`mr-${p.mr}`]: p.mr,
    [`mb-${p.mb}`]: p.mb,
    [`ml-${p.ml}`]: p.ml,
    [`mx-${p.mx}`]: p.mx,
    [`my-${p.my}`]: p.my,
    [`p-${p.p}`]: p.p,
    [`pt-${p.pt}`]: p.pt,
    [`pr-${p.pr}`]: p.pr,
    [`pb-${p.pb}`]: p.pb,
    [`pl-${p.pl}`]: p.pl,
    [`px-${p.px}`]: p.px,
    [`py-${p.py}`]: p.py,
    [`gap-${p.gap}`]: p.gap,
    // [`gap-x-${}`]: 1,
    // [`gap-y-${}`]: 1,

    // SIZING
    [`h-${p.height}`]: p.height,
    [`min-h-${p.minHeight}`]: p.minHeight,
    [`max-h-${p.maxHeight}`]: p.maxHeight,
    [`w-${p.width}`]: p.width,
    [`min-w-${p.minWidth}`]: p.minWidth,
    [`max-w-${p.maxWidth}`]: p.maxWidth,

    // TYPOGRAPHY
    [p.textTransform ?? 'textTransform']: p.textTransform,
    [`font-${p.fontFamily}`]: p.fontFamily,
    [`font-${p.fontWeight}`]: p.fontWeight,
    [`leading-${p.lineHeight}`]: p.lineHeight,
    [`text-${p.color}`]: p.color,
    [`text-${p.fontSize}`]: p.fontSize,
    [`text-${p.textAlign}`]: p.textAlign,
    [`tracking-${p.letterSpacing}`]: p.letterSpacing,
    'italic': p.italic,

    // BACKGROUNDS
    [`bg-${p.backgroundColor}`]: p.backgroundColor,

    // BORDERS
    'border': p.border, // 1px borderWidth
    'border-b': p.borderBottom, // 1px borderWidth
    'border-l': p.borderLeft, // 1px borderWidth
    'border-r': p.borderRight, // 1px borderWidth
    'border-t': p.borderTop, // 1px borderWidth
    [`border-${p.borderWidth}`]: p.borderWidth,
    [`border-${p.borderColor}`]: p.borderColor,

    // STATES (eg https://mui.com/customization/how-to-customize/#state-classes)
    '🅲-active': p.active,
    '🅲-disabled': p.disabled,
  }
}

/**
 * `utilityClasses` filters and transforms the Componentry utility props into
 * utility styles.
 *
 * *IMPORTANT* - the returned `utilityCx` must be evaluated by a className
 * generator like `clsx` or `classnames` before it can be used as a `className`
 * prop value.
 * @example
 * const { passThroughProps, utilityCx } = utilityClasses(props)
 * return (
 *   <div className={clsx(utilityCX)} {...passThroughProps}>{children}</div>
 * )
 */
export function utilityClasses({
  /* eslint-disable @typescript-eslint/no-unused-vars */
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
}: ComponentProps & UtilityProps) {
  const passThroughProps: ComponentProps = {}

  // Pass through disabled to final element as it's a valid HTML attribute
  if (filteredProps.disabled) passThroughProps.disabled = true

  Object.keys(filteredProps).forEach((prop) => {
    if (!(prop in utilityProps)) {
      // The prop doesn't map to a library utility prop, pass it through
      passThroughProps[prop] = filteredProps[prop]
    }
  })

  return {
    passThroughProps,
    utilityCx: generateClassNames(filteredProps),
  }
}

type ComponentProps = {
  [prop: string]: unknown
}

// --------------------------------------------------------
// PRECOMPILE

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
}
