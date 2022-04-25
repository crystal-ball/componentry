import { forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { useThemeProps } from '../Provider/Provider'

export interface BlockProps extends ComponentBaseProps<'div'> {}

// ✨ Nice display type for IntelliSense
export interface Block {
  (props: BlockProps & { ref?: React.ForwardedRef<unknown> }): React.ReactElement | null
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
