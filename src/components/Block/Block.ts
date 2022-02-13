import React from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'

export interface BlockProps extends ComponentBaseProps<'div'> {}

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export const Block: React.FC<BlockProps> = (props) => {
  const rest = {
    ...useTheme<BlockProps>('Block'),
    ...props,
  }

  return element(rest)
}
Block.displayName = 'Block'
