import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../../utils/types'
import { element } from '../../utils/element-creator'

export interface FlexProps extends ComponentBaseProps<'div'> {
  /** Sets an `align-items` style */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Sets a `flex-direction` flex style */
  direction?: 'column' | 'column-reverse' | 'row-reverse' | 'row'
  /** Switches between display between an inline and block element */
  inline?: boolean
  /** Sets a `justify-content` style */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** Sets a `flex-wrap` flex style */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const { align, direction, inline, justify, wrap, ...rest } = {
    ...useTheme<FlexProps>('Flex'),
    ...props,
  }
  // Tailwind uses a flex-col class but direction="col" is super wonky
  // => so props use "column" and we replace with "col"
  const computedDirection = direction?.replace('column', 'col')

  return element({
    componentCx: {
      'flex': !inline,
      'inline-flex': inline,
      [`flex-${computedDirection}`]: computedDirection,
      [`flex-${wrap}`]: wrap,
    },
    alignItems: align,
    justifyContent: justify,
    ...rest,
  })
}
Flex.displayName = 'Flex'
