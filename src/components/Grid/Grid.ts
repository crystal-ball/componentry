import { type ComponentPropsWithRef, forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface GridPropsOverrides {}

export interface GridPropsDefaults {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `justify-items` style */
  justify?: 'start' | 'end' | 'center' | 'stretch'
}

export type GridProps = Resolve<MergeTypes<GridPropsDefaults, GridPropsOverrides>> &
  UtilityProps &
  ComponentPropsWithRef<'div'>

// ✨ Nice display type for IntelliSense
export interface Grid {
  (props: GridProps): React.ReactElement | null
  displayName?: string
}

/**
 * #### [📝 Grid](https://componentry.design/docs/components/grid)
 *
 * Grid provides consistent CSS grid layouts using a grid container with
 * utility props.
 * @example
 * ```tsx
 * <Grid gap={2}>
 *   ...
 * </Grid>
 * ```
 */
export const Grid: Grid = forwardRef((props, ref) => {
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
