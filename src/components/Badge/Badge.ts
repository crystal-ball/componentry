import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface BadgePropsOverrides {}

export interface BadgePropsDefaults {
  /** Display style */
  variant?: 'filled'
  /** Theme color for display variant */
  color?: 'primary'
  /** Display size */
  size?: 'small' | 'large'
}

export type BadgeProps<As extends React.ElementType = 'div'> = Resolve<
  MergeTypes<BadgePropsDefaults, BadgePropsOverrides> & { as?: As } & Omit<
      UtilityProps,
      'color'
    >
> &
  ElementTypeProps<As>

/**
 * Badge provides a short label for describing elements.
 * @example
 * ```tsx
 * <Badge color="success">
 *   Delightful
 * </Badge>
 * ```
 * @see [📝 Badge docs](https://componentry.design/docs/components/badge)
 */
export interface Badge {
  <As extends React.ElementType = 'div'>(props: BadgeProps<As>): React.ReactElement
  displayName?: string
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    color,
    size,
    variant = 'filled',
    ...rest
  } = {
    ...useThemeProps('Badge'),
    ...props,
  }

  return createElement({
    ref,
    componentClassName: [
      `C9Y-Badge-base C9Y-Badge-${variant}`,
      {
        [`C9Y-Badge-${color}Color`]: color,
        [`C9Y-Badge-${size}Size`]: size,
      },
    ],
    ...rest,
  })
}) as Badge
Badge.displayName = 'Badge'
