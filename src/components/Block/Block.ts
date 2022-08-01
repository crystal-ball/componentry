import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface BlockPropsOverrides {}

export interface BlockPropsDefaults {}

export type BlockProps<Elem extends React.ElementType = 'div'> = Resolve<
  MergeTypes<BlockPropsDefaults, BlockPropsOverrides>
> &
  UtilityProps &
  React.ComponentPropsWithRef<Elem> & { as?: Elem }

// ✨ Nice display type for IntelliSense
export interface Block {
  <Elem extends React.ElementType = 'div'>(
    props: BlockProps<Elem>,
  ): React.ReactElement | null
  displayName?: string
}

/**
 * Block provides block layout elements.
 * @example
 * ```tsx
 * <Block mt={2} mx={3}>
 *   ...
 * </Block>
 * ```
 * @see [📝 Block](https://componentry.design/docs/components/block)
 */
export const Block: Block = forwardRef<HTMLElement, BlockProps>((props, ref) => {
  return element({
    ref,
    ...useThemeProps('Block'),
    ...props,
  })
})
Block.displayName = 'Block'
