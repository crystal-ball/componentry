import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface BadgePropsOverrides {}

export interface BadgePropsDefaults {
  /** Theme color for display variant */
  color?: 'primary'
  /** Display size */
  size?: 'small' | 'large'
  /** Display style */
  variant?: 'filled'
}

export type BadgePropsBase<Elem extends React.ElementType = 'div'> = Omit<
  UtilityProps,
  'color'
> &
  MergeTypes<BadgePropsDefaults, BadgePropsOverrides> & { as?: Elem }

export type BadgeProps<Elem extends React.ElementType = 'div'> = BadgePropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof BadgePropsBase<Elem>>

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
  <Elem extends React.ElementType = 'div'>(props: BadgeProps<Elem>): React.ReactElement
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
