import React from 'react'
import { useTheme } from '../Theme/Theme'
import { element } from '../factories/element'
import { BaseProps } from '../utils/base-types'

interface FlexProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
  /** Sets an `align-items` flex style */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  /** sets a `flex-direction` flex style */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  /** Switches between display between an inline and block element */
  inline?: boolean
  /** Sets a `justify-content` flex style */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  /** Sets a `flex-wrap` flex style */
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
}

/**
 * [Flex component 📝](https://componentry.design/components/flex)
 */
export const Flex: React.FC<FlexProps> = (props) => {
  const { align, direction, inline = false, justify, wrap, ...rest } = {
    ...useTheme<FlexProps>('Flex'),
    ...props,
  }

  return element({
    componentCx: {
      // ℹ️ Flex is a helper component so it doesn't have a 🅲-flex class
      'd-flex': !inline,
      'd-inline-flex': inline,
      // column, column-reverse, row, row-reverse
      [`flex-${direction}`]: direction,
      // wrap, wrap-reverse, nowrap
      [`flex-${wrap}`]: wrap,
      // start, end, center, baseline, stretch
      [`align-items-${align}`]: align,
      // start, end, center, around, between, evenly
      [`justify-content-${justify}`]: justify,
    },
    ...rest,
  })
}
Flex.displayName = 'Flex'
