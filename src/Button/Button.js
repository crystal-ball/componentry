import componentryElem from '../elem-factory'
import withTheme from '../withTheme'
import type { ThemeColors } from '../types'

export type Props = {
  /** Creates a full-width button */
  block?: boolean,
  /** Theme color used to compute BS color class */
  color?: ThemeColors | 'link',
  /** Computes the button as anchor class */
  link?: boolean,
  /** Creates outline style button, uses `color` for outline theme. */
  outline?: boolean,
  /** Create a small or large style button */
  size?: 'small' | 'large',
}

const Button = ({
  block = false,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  link = false,
  outline = false,
  size,
  textAlign,
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
      [`font-weight-${fontWeight}`]: fontWeight,
      [`text-${textAlign}`]: textAlign,
    },
    ...rest,
  })

export default withTheme('Button', Button)
