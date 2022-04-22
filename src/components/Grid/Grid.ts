/* eslint-disable react/no-unused-prop-types */
import { forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { useThemeProps } from '../Provider/Provider'

export interface GridPropsBase {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `justify-items` style */
  justify?: 'start' | 'end' | 'center' | 'stretch'
}

export type GridProps = GridPropsBase & ComponentBaseProps<'div'>

/**
 * **[📝 Grid docs](https://componentry.design/docs/components/grid)**
 *
 * `Grid` provides consistent CSS grid layouts using a grid container with
 * utility props.
 * @example
 * ```tsx
 * <Grid gap={2}>
 *   ...
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
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
