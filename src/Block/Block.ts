import React from 'react'
import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'

export interface BlockProps extends ComponentBaseProps<'div'> {
  /** Sets display between to an inline or block element */
  inline?: boolean
}

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export const Block: React.FC<BlockProps> = (props) => {
  const { inline, ...rest } = {
    ...useTheme<BlockProps>('Block', props.__precompile),
    ...props,
  }

  return element('Block', {
    componentCx: {
      'block': !inline,
      'inline-block': inline,
    },
    ...rest,
  })
}
Block.displayName = 'Block'
