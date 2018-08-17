// @flow
import elem from '../elem-factory'
import withTheme from '../withTheme'
import type { ThemeColors } from '../types'

export type Props = {
  /** Creates a full-width button */
  block?: boolean,
  /** Theme color used to compute BS color class */
  color?: ThemeColors | 'link' | '',
  /** Computes the button as anchor class */
  link?: boolean,
  /** Creates outline style button, uses `color` for outline theme. */
  outline?: boolean,
  /** Create a small or large style button */
  size?: 'small' | 'large',
}

export default withTheme(
  'Button',
  ({ block, color = '', link, outline, size, ...rest }: Props) =>
    elem({
      defaultAs: 'button',
      type: 'button',
      classes: {
        btn: true,
        'btn-anchor': link,
        'btn-block': block,
        [`btn-${color}`]: color,
        'btn-outline': outline,
        'btn-sm': size === 'small',
        'btn-lg': size === 'large',
      },
      ...rest,
    }),
)
