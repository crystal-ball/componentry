import componentryElem from '../elem-factory'
import withTheme from '../withTheme'
import type { ThemeColors } from '../types'

export type Props = {
  /** Sets button to display as an anchor */
  anchor?: boolean,
  /** Creates a full-width button */
  block?: boolean,
  /** Sets button background or link font color */
  color?: ThemeColors | 'link' | 'body',
  /** Creates outline style button, uses `color` for outline theme. */
  outline?: ThemeColors | 'link' | 'body',
  /** Create a small or large style button */
  size?: 'sm' | 'lg',
}

export const btnClasses = p => ({
  btn: !p.anchor,
  'btn-anchor': p.anchor,
  'btn-block': p.block,
  [`btn-${p.size}`]: p.size,
  [`btn-outline-${p.outline}`]: p.outline,
  disabled: p.disabled,
  // Button color switching
  [`btn-${p.color}`]: !p.anchor && p.color,
  [`text-${p.color}`]: p.anchor && p.color,
})

export const cleanBtnClasses = ({ anchor, block, color, outline, size, ...rest }) => rest

const Button = props =>
  componentryElem({
    defaultAs: 'button',
    type: 'button',
    classes: btnClasses(props),
    ...cleanBtnClasses(props),
  })

export default withTheme('Button', Button)
