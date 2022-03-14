/* eslint-disable prefer-template */
/**
 * @file
 * Resource for cleaning Componentry props and creating utility classes.
 * @remarks
 * This file is used for module augmentation of utility props, eg:
 *
 * `declare module 'componentry/types/utils/utility-classes' { }`
 */

import { MergePropTypes } from './types'

/** Module augmentation interface for overriding default utility props' types */
export interface UtilityPropsOverrides {}

/** Default utility prop types, customizable with UtilityPropsOverrides */
export interface UtilityPropsBase {
  /** Sets active style */
  active?: boolean | string
  /** Sets align-content style */
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch'
  /** Sets align-items style */
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets align-self style */
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets background color style */
  backgroundColor?: 'primary' | 'success' | 'warning' | 'critical'
  /** Sets a bold font weight style */
  bold?: boolean
  /** Sets a 1px border-width style */
  border?: boolean
  /** Sets a `border-radius` style */
  borderRadius?: true | 'none' | 'full' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  /** Sets a border-width size style */
  borderWidth?: string | number
  /** Sets a 1px border-bottom-width style */
  borderBottom?: boolean
  /** Sets border color style */
  borderColor?: 'primary'
  /** Sets a 1px border-left-width style */
  borderLeft?: boolean
  /** Sets a 1px border-right-width style */
  borderRight?: boolean
  /** Sets a 1px border-top-width style */
  borderTop?: boolean
  /** Sets a `box-shadow` style */
  boxShadow?: true | 'none' | 'inner' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /** Sets a disabled style */
  disabled?: boolean
  /** Sets a display style */
  display?:
    | 'block'
    | 'inline-block'
    | 'inline'
    | 'flex'
    | 'inline-flex'
    | 'flow-root'
    | 'grid'
    | 'inline-grid'
    | 'contents'
    | 'list-item'
    | 'hidden'
  /** Sets a text color style */
  color?: string
  /** Sets a `flex-direction` flex style */
  flexDirection?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  /** Sets a `flex-grow` flex style */
  flexGrow?: true | 0
  /** Sets a `flex-shrink` flex style */
  flexShrink?: true | 0
  /** Sets a `flex-wrap` flex style */
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  /** Sets a font-family style */
  fontFamily?: 'body' | 'mono'
  /** Sets a font-size style */
  fontSize?: 'sm' | 'base' | 'lg'
  /** Text font-weight style */
  fontWeight?: 'light' | 'normal' | 'bold'
  /** Sets height style */
  height?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | string | number
  /** Sets a display: none style */
  invisible?: boolean
  /** Sets an italic style */
  italic?: boolean
  /** Sets justify-content style */
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** Sets a `justify-items` style with a `justify-items-{value}` class */
  justifyItems?: 'start' | 'end' | 'center' | 'stretch'
  /** Sets a `justify-self` style with a `justify-self-{value}` class */
  justifySelf?: 'auto' | 'start' | 'end' | 'center' | 'stretch'
  /** Sets a letter-spacing style */
  letterSpacing?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
  /** Sets a line-height style */
  lineHeight?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose' | number
  /** Sets a max-width style */
  maxWidth?: 'none' | 'full' | 'min' | 'max' | 'fit' | 'prose' | 0 | string
  /** Sets a max-height style */
  maxHeight?: 'full' | 'screen' | 'min' | 'max' | 'fit' | number
  /** Sets a min-height style */
  minHeight?: 'full' | 'screen' | 'min' | 'max' | 'fit' | 0
  /** Sets a min-width style */
  minWidth?: 'full' | 'min' | 'max' | 'fit' | 0
  /** Sets position style */
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  /** Sets text-align style */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  /** Sets text-transform style */
  textTransform?: 'lowercase' | 'uppercase' | 'capitalize' | 'normal-case'
  /** Sets visible style */
  visible?: boolean
  /** Sets width style */
  width?: 'auto' | 'full' | 'screen' | 'min' | 'max' | 'fit' | string | number

  // --- Spacing
  /** Sets a `gap` style */
  gap?: string | number
  /** Sets a column-gap style */
  columnGap?: string | number
  /** Sets a row-gap style */
  rowGap?: string | number
  /** margin */
  m?: string | number
  /** margin-top */
  mt?: string | number
  /** margin-right */
  mr?: string | number
  /** margin-bottom */
  mb?: string | number
  /** margin-left */
  ml?: string | number
  /** margin-left && margin-right */
  mx?: string | number
  /** margin-top && margin-bottom  */
  my?: string | number
  /** padding */
  p?: string | number
  /** padding-top */
  pt?: string | number
  /** padding-right */
  pr?: string | number
  /** padding-bottom */
  pb?: string | number
  /** padding-left */
  pl?: string | number
  /** padding-left && padding-right */
  px?: string | number
  /** padding-top && padding-bottom */
  py?: string | number
  /** Sets a z-index style */
  zIndex?: 0 | 10 | 20 | 30 | 40 | 50 | 'auto'
}

/** Componentry utility props for including utility styles. */
export type UtilityProps = MergePropTypes<UtilityPropsBase, UtilityPropsOverrides>

const activeProps = {
  activate: 1,
  deactivate: 1,
  defaultActive: 1,
  guid: 1,
  onActivate: 1,
  onActivated: 1,
  onDeactivate: 1,
  onDeactivated: 1,
}

/**
 * `createUtilityClasses` filters and transforms Componentry utility props into
 * utility classes.
 * @example
 * ```tsx
 * const { filteredProps, utilityClasses } = createUtilityClasses(props)
 * return (
 *   <div className={clsx('some-custom-class', utilityClasses)} {...filteredProps}>
 *     {children}
 *   </div>
 * )
 * ```
 */
export function createUtilityClasses<Props extends { [prop: string]: any }>(
  props: Props,
) {
  const filteredProps: { [prop: string]: any } = {}
  const classes: string[] = []

  Object.keys(props).forEach((prop) => {
    const value = props[prop]
    // If a props has a key, but the prop value is undefined or false we can bail early
    if (value === undefined || value === false) return

    switch (prop) {
      // LAYOUT
      case 'position':
      case 'display':
        classes.push(value)
        break
      case 'invisible':
        classes.push('invisible')
        break
      case 'visible':
        classes.push('visible')
        break
      case 'zIndex':
        classes.push('z-' + value)
        break

      // FLEXBOX/GRID
      case 'alignContent':
        classes.push('content-' + value)
        break
      case 'flexDirection':
        classes.push('flex-' + value.replace('column', 'col'))
        break
      case 'flexGrow':
        classes.push(value === true ? 'grow' : 'grow-' + value)
        break
      case 'flexShrink':
        classes.push(value === true ? 'shrink' : 'shrink-' + value)
        break
      case 'flexWrap':
        classes.push('flex-' + value)
        break
      case 'alignItems':
        classes.push('items-' + value)
        break
      case 'justifyContent':
        classes.push('justify-' + value)
        break
      case 'justifyItems':
        classes.push('justify-items-' + value)
        break
      case 'justifySelf':
        classes.push('justify-self-' + value)
        break
      case 'alignSelf':
        classes.push('self-' + value)
        break

      // SPACING
      case 'm':
        classes.push('m-' + value)
        break
      case 'mt':
        classes.push('mt-' + value)
        break
      case 'mr':
        classes.push('mr-' + value)
        break
      case 'mb':
        classes.push('mb-' + value)
        break
      case 'ml':
        classes.push('ml-' + value)
        break
      case 'mx':
        classes.push('mx-' + value)
        break
      case 'my':
        classes.push('my-' + value)
        break
      case 'p':
        classes.push('p-' + value)
        break
      case 'pt':
        classes.push('pt-' + value)
        break
      case 'pr':
        classes.push('pr-' + value)
        break
      case 'pb':
        classes.push('pb-' + value)
        break
      case 'pl':
        classes.push('pl-' + value)
        break
      case 'px':
        classes.push('px-' + value)
        break
      case 'py':
        classes.push('py-' + value)
        break
      case 'gap':
        classes.push('gap-' + value)
        break
      case 'columnGap':
        classes.push('gap-x-' + value)
        break
      case 'rowGap':
        classes.push('gap-y-' + value)
        break

      // SIZING
      case 'height':
        classes.push('h-' + value)
        break
      case 'minHeight':
        classes.push('min-h-' + value)
        break
      case 'maxHeight':
        classes.push('max-h-' + value)
        break
      case 'width':
        classes.push('w-' + value)
        break
      case 'minWidth':
        classes.push('min-w-' + value)
        break
      case 'maxWidth':
        classes.push('max-w-' + value)
        break

      // TYPOGRAPHY
      case 'bold':
        classes.push('font-bold')
        break
      case 'italic':
        classes.push('italic')
        break
      case 'fontFamily':
        classes.push('font-' + value)
        break
      case 'fontWeight':
        classes.push('font-' + value)
        break
      case 'lineHeight':
        classes.push('leading-' + value)
        break
      case 'color':
        classes.push('text-' + value)
        break
      case 'fontSize':
        classes.push('text-' + value)
        break
      case 'textAlign':
        classes.push('text-' + value)
        break
      case 'letterSpacing':
        classes.push('tracking-' + value)
        break
      case 'textTransform':
        classes.push(value)
        break

      // BACKGROUNDS
      case 'backgroundColor':
        classes.push('bg-' + value)
        break
      case 'boxShadow':
        classes.push(value === true ? 'shadow' : 'shadow-' + value)
        break

      // BORDERS
      case 'border':
        classes.push('border') // 1px borderWidth
        break
      case 'borderBottom':
        classes.push('border-b') // 1px borderWidth
        break
      case 'borderLeft':
        classes.push('border-l') // 1px borderWidth
        break
      case 'borderRight':
        classes.push('border-r') // 1px borderWidth
        break
      case 'borderTop':
        classes.push('border-t') // 1px borderWidth
        break
      case 'borderWidth':
        classes.push('border-' + value)
        break
      case 'borderColor':
        classes.push('border-' + value)
        break
      case 'borderRadius':
        classes.push(value === true ? 'rounded' : 'rounded-' + value)
        break

      // STATES (eg https://mui.com/customization/how-to-customize/#state-classes)
      case 'active':
        classes.push('C9Y-active')
        break
      case 'disabled':
        classes.push('C9Y-disabled')
        // Pass through disabled to final element as it's a valid HTML attribute
        filteredProps.disabled = true
        break

      default:
        if (!(prop in activeProps)) {
          // The prop doesn't map to a library utility prop, pass it through
          filteredProps[prop] = props[prop]
        }
    }
  })

  return {
    filteredProps,
    utilityClasses: classes.join(' '),
  }
}
