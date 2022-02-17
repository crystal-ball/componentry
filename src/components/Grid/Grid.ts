import React from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'

export interface GridProps extends ComponentBaseProps<'div'> {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `justify-items` style */
  justify?: 'start' | 'end' | 'center' | 'stretch'
}

/**
 * [Grid component 📝](https://componentry.design/components/grid)
 */
export const Grid: React.FC<GridProps> = (props) => {
  const { align, justify, ...rest } = {
    ...useTheme<GridProps>('Grid'),
    ...props,
  }

  return element({
    display: 'grid',
    alignItems: align,
    justifyItems: justify,
    ...rest,
  })
}
Grid.displayName = 'Grid'
