import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface BlockPropsOverrides {}

export interface BlockPropsDefaults {}

export type BlockPropsBase<Elem extends React.ElementType = 'div'> = UtilityProps &
  MergeTypes<BlockPropsDefaults, BlockPropsOverrides> & { as?: Elem }

export type BlockProps<Elem extends React.ElementType = 'div'> = BlockPropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof BlockPropsBase<Elem>>

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
export interface Block {
  <Elem extends React.ElementType = 'div'>(props: BlockProps<Elem>): React.ReactElement
  displayName?: string
}

export const Block = forwardRef<HTMLElement, BlockProps>((props, ref) => {
  return createElement({
    ref,
    ...useThemeProps('Block'),
    ...props,
  })
}) as Block
Block.displayName = 'Block'
