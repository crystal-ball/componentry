import { type FC } from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'

export interface BlockProps extends ComponentBaseProps<'div'> {}

/**
 * **[📝 Block docs](https://componentry.design/docs/components/block)**
 *
 * `Block` provides block level elements with access to theme utility props.
 * @example
 * ```tsx
 * <Block mt={2} mx={3}>
 *   ...
 * </Block>
 * ```
 */
export const Block: FC<BlockProps> = (props) => {
  const rest = {
    ...useTheme<BlockProps>('Block'),
    ...props,
  }

  return element(rest)
}
Block.displayName = 'Block'
