import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface GridPropsOverrides {}

export interface GridPropsDefaults {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `justify-items` style */
  justify?: 'start' | 'end' | 'center' | 'stretch'
}

export type GridPropsBase<Elem extends React.ElementType = 'div'> = UtilityProps &
  MergeTypes<GridPropsDefaults, GridPropsOverrides> & { as?: Elem }

export type GridProps<Elem extends React.ElementType = 'div'> = GridPropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof GridPropsBase<Elem>>

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
  <Elem extends React.ElementType = 'div'>(props: GridProps<Elem>): React.ReactElement
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
