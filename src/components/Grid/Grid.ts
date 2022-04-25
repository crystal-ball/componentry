import { forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { useThemeProps } from '../Provider/Provider'

export interface GridPropsDefaults {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `justify-items` style */
  justify?: 'start' | 'end' | 'center' | 'stretch'
}

export type GridProps = GridPropsDefaults & ComponentBaseProps<'div'>

// ✨ Nice display type for IntelliSense
export interface Grid {
  (props: GridProps & { ref?: React.ForwardedRef<unknown> }): React.ReactElement | null
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
