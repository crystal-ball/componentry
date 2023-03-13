import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface GridPropsOverrides {}

export interface GridPropsDefaults {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `justify-items` style */
  justify?: 'start' | 'end' | 'center' | 'stretch'
}

export type GridProps<As extends React.ElementType = 'div'> = Resolve<
  MergeTypes<GridPropsDefaults, GridPropsOverrides> & { as?: As } & UtilityProps
> &
  ElementTypeProps<As>

/**
 * Grid provides CSS grid layout elements
 * @example
 * ```tsx
 * <Grid gap={2}>
 *   ...
 * </Grid>
 * ```
 * @see [📝 Grid](https://componentry.design/docs/components/grid)
 */
export interface Grid {
  <As extends React.ElementType = 'div'>(props: GridProps<As>): React.ReactElement
  displayName?: string
}

export const Grid = forwardRef<HTMLElement, GridProps>((props, ref) => {
  const { align, justify, ...rest } = {
    ...useThemeProps('Grid'),
    ...props,
  }

  return createElement({
    ref,
    display: 'grid',
    alignItems: align,
    justifyItems: justify,
    ...rest,
  })
}) as Grid
Grid.displayName = 'Grid'
