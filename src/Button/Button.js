import componentryElem from '../elem-factory'
import withTheme from '../withTheme'
import type { ThemeColors } from '../types'

export type Props = {
  /** Creates a full-width button */
  block?: boolean,
  /** Sets button background or link font color */
  color?: ThemeColors | 'link' | 'body',
  /** Creates outline style button, uses `color` for outline theme. */
  outline?: boolean,
  /** Create a small or large style button */
  size?: 'sm' | 'lg',

  // --- Anchor+Text props
  /** Sets button to display as an anchor */
  anchor?: boolean,
  /** Sets font size inline style */
  fontSize?: number | string,
  /** Sets font weight class */
  fontWeight: 'light' | 'normal' | 'bold',
  /** Sets letter spacing inline style */
  letterSpacing?: number | string,
  /** Sets line height inline style */
  lineHeight?: number | string,
  /** Sets text alignment class */
  textAlign?: 'justify' | 'right' | 'center' | 'left',
  italic?: boolean,
  monospace?: boolean,
  uppercase?: boolean,
}

export const btnClasses = p => ({
  btn: !p.anchor,
  'btn-anchor': p.anchor,
  'btn-block': p.block,
  'btn-outline': p.outline,
  [`btn-${p.color}`]: !p.anchor && p.color,
  [`btn-${p.size}`]: p.size,
  disabled: p.disabled,
  // --- Typography
  // When rendering an anchor style button use the typography classes
  'font-italic': p.italic,
  'text-monospace': p.monospace,
  'text-uppercase': p.uppercase,
  [`font-weight-${p.fontWeight}`]: p.fontWeight,
  [`text-${p.color}`]: p.anchor && p.color,
  [`text-${p.textAlign}`]: p.textAlign,
})

export const cleanBtnClasses = ({
  anchor,
  block,
  color,
  fontSize,
  fontWeight,
  italic,
  letterSpacing,
  lineHeight,
  monospace,
  outline,
  size,
  textAlign,
  uppercase,
  ...rest
}) => rest

const Button = ({ fontSize, letterSpacing, lineHeight, ...rest }: Props) =>
  componentryElem({
    defaultAs: 'button',
    type: 'button',
    style: { fontSize, letterSpacing, lineHeight },
    classes: btnClasses(rest),
    ...cleanBtnClasses(rest),
  })

export default withTheme('Button', Button)
