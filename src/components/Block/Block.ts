import { type ComponentPropsWithRef, forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface BlockPropsOverrides {}

export interface BlockPropsDefaults {}

export type BlockProps = Resolve<MergeTypes<BlockPropsDefaults, BlockPropsOverrides>> &
  UtilityProps &
  ComponentPropsWithRef<'div'>

// ✨ Nice display type for IntelliSense
export interface Block {
  (props: BlockProps): React.ReactElement | null
  displayName?: string
}

/**
 * #### [📝 Block](https://componentry.design/docs/components/block)
 *
 * Block provides block level layout elements with access to theme utility
 * props.
 * @example
 * ```tsx
 * <Block mt={2} mx={3}>
 *   ...
 * </Block>
 * ```
 */
export const Block: Block = forwardRef((props, ref) => {
  return element({
    ref,
    ...useThemeProps('Block'),
    ...props,
  })
})
Block.displayName = 'Block'
