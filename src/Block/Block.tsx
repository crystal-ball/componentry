import React from 'react'
import { useTheme } from '../Theme/Theme'
import { BaseProps } from '../utils/base-types'
import { element } from '../utils/element-creator'

export interface BlockProps
  extends BaseProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'className'> {
  /** Switches between display between an inline and block element */
  inline?: boolean
}

/**
 * [Block component 📝](https://componentry.design/components/block)
 */
export const Block: React.FC<BlockProps> = (props) => {
  const { inline = false, ...rest } = { ...useTheme<BlockProps>('Block'), ...props }

  return element({
    componentCx: {
      // ℹ️ Block is a helper component so it doesn't have a 🅲-block class
      'd-block': !inline,
      'd-inline-block': inline,
    },
    ...rest,
  })
}
Block.displayName = 'Block'
