import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface BadgePropsOverrides {}

export interface BadgePropsDefaults {
  color?: 'primary'
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
 * Badge provides a label for describing elements.
 * @example
 * ```tsx
 * <Badge color="success">
 *   Delightful
 * </Badge>
 * ```
 * @see [📝 Badge docs](https://componentry.design/docs/components/badge)
 */
export interface Badge {
  (props: BadgeProps): React.ReactElement | null
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

  return element({
    ref,
    componentCx: [
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
