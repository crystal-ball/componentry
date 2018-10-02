import componentryElem from '../elem-factory'
import withTheme from '../withTheme'
import type { ThemeColors } from '../types'

export type Props = {
  /** Creates a full-width button */
  block?: boolean,
  /** Sets button background or link font color */
  color?: ThemeColors | 'link' | 'body',
  /** Sets button to display as a link */
  link?: boolean,
  /** Creates outline style button, uses `color` for outline theme. */
  outline?: boolean,
  /** Create a small or large style button */
  size?: 'small' | 'large',
  // --- Text props
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

const Button = ({
  block = false,
  color,
  fontSize,
  fontWeight,
  italic = false,
  letterSpacing,
  lineHeight,
  link = false,
  monospace = false,
  outline = false,
  size,
  textAlign,
  uppercase = false,
  ...rest
}: Props) =>
  componentryElem({
    defaultAs: 'button',
    type: 'button',
    style: { fontSize, letterSpacing, lineHeight },
    classes: {
      btn: !link,
      'btn-anchor': link,
      'btn-block': block,
      [`btn-${color}`]: color,
      'btn-outline': outline,
      'btn-sm': size === 'small',
      'btn-lg': size === 'large',
      disabled: rest.disabled,
      // --- Typography
      'font-italic': italic,
      'text-monospace': monospace,
      'text-uppercase': uppercase,
      [`font-weight-${fontWeight}`]: fontWeight,
      [`text-${textAlign}`]: textAlign,
      // When rendering a link style button, a passed color should style the
      // color of the link
      [`text-${color}`]: link && color,
    },
    ...rest,
  })

export default withTheme('Button', Button)
