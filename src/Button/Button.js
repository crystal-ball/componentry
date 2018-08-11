// @flow
import { createElement } from 'react'
import classnames from 'classnames'
import withTheme from '../withTheme/withTheme'
import { type ElementProps } from '../component-factories/element'
import type { ThemeColors } from '../utils/theme'

export type Props = {
  /** Creates a full-width button */
  block?: boolean,
  /** Theme color used to compute BS color class */
  color?: ThemeColors | 'link' | '',
  /**
   * Semi-private internal prop that determines if component is deocrated with
   * base `btn` class
   */
  decorated: boolean,
  /** Computes the button as anchor class */
  link?: boolean,
  /** Creates outline style button, uses `color` for outline theme. */
  outline?: boolean,
  /** Create a small or large style button */
  size?: 'small' | 'large',
} & ElementProps

const Button = ({
  as,
  children,
  className,
  decorated,
  block,
  color,
  link,
  outline,
  size,
  ...rest
}: Props) =>
  createElement(
    as || 'button',
    {
      type: 'button',
      className: classnames(className, {
        btn: decorated,
        'btn-anchor': link,
        'btn-block': block,
        // btn-<COLOR> class is only for regular themed buttons, suppress for other
        // btn theme flavors
        [`btn-${color}`]: color && !link && !outline,
        [`btn-outline-${color}`]: outline,
        'btn-sm': size === 'small',
        'btn-lg': size === 'large',
      }),
      ...rest,
    },
    children,
  )
Button.displayName = 'Button'
Button.defaultProps = {
  decorated: true,
}
export default withTheme(Button)
