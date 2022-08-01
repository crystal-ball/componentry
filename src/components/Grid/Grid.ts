import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface GridPropsOverrides {}

export interface GridPropsDefaults {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `justify-items` style */
  justify?: 'start' | 'end' | 'center' | 'stretch'
}

export type GridProps<Elem extends React.ElementType = 'div'> = Resolve<
  MergeTypes<GridPropsDefaults, GridPropsOverrides>
> &
  UtilityProps &
  React.ComponentPropsWithRef<Elem> & { as?: Elem }

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
  <Elem extends React.ElementType = 'div'>(
    props: GridProps<Elem>,
  ): React.ReactElement | null
  displayName?: string
}

export const Grid: Grid = forwardRef<HTMLElement, GridProps>((props, ref) => {
  const { align, justify, ...rest } = {
    ...useThemeProps('Grid'),
    ...props,
  }

  return element({
    ref,
    display: 'grid',
    alignItems: align,
    justifyItems: justify,
    ...rest,
  })
})
Grid.displayName = 'Grid'
