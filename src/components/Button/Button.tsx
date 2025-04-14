import React, { Children, forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface ButtonPropsOverrides {}

export interface ButtonPropsDefaults {
  /** Display style */
  variant?: 'filled' | 'outlined'
  /** Theme color for display variant */
  color?: 'primary'
  /** Display size */
  size?: 'small' | 'large'
}

export type ButtonProps<As extends React.ElementType = 'button'> = Resolve<
  MergeTypes<ButtonPropsDefaults, ButtonPropsOverrides> & { as?: As } & Omit<
      UtilityProps,
      'color'
    >
> &
  ElementTypeProps<As>

/**
 * Button provides action elements styled as buttons.
 * @example
 * ```tsx
 * <Button onClick={() => buildSomethingDelightful()}>
 *   Componentry
 * </Button>
 * ```
 * @see [📝 Button](https://componentry.design/docs/components/button)
 */
export interface Button {
  <As extends React.ElementType = 'button'>(props: ButtonProps<As>): React.ReactElement
  displayName?: string
}

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const {
    variant = 'filled',
    children,
    color,
    size,
    ...merged
  } = {
    ...useThemeProps('Button'),
    ...props,
  }

  return createElement({
    ref,
    as: 'button',
    type: 'button',
    componentClassName: [
      `C9Y-Button-base C9Y-Button-${variant}`,
      {
        [`C9Y-Button-${color}Color`]: color,
        [`C9Y-Button-${size}Size`]: size,
      },
    ],
    children: Children.map(children, (child) => {
      // Wrap string children in a span so that CSS child selectors work
      return typeof child === 'string' ? <span>{child}</span> : child
    }),
    ...merged,
  })
}) as Button
Button.displayName = 'Button'
