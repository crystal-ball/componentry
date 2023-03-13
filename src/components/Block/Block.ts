import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface BlockPropsOverrides {}

export interface BlockPropsDefaults {}

export type BlockProps<As extends React.ElementType = 'div'> = Resolve<
  MergeTypes<BlockPropsDefaults, BlockPropsOverrides> & { as?: As } & UtilityProps
> &
  ElementTypeProps<As>

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
  <As extends React.ElementType = 'div'>(props: BlockProps<As>): React.ReactElement
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
