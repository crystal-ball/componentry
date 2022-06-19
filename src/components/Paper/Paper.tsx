import { forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { type MergePropTypes } from '../../utils/types'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface PaperPropsOverrides {}

export interface PaperPropsDefaults {
  variant?: 'flat'
}

export type PaperProps = MergePropTypes<PaperPropsDefaults, PaperPropsOverrides> &
  ComponentBaseProps<'div'>

// ✨ Nice display type for IntelliSense
export interface Paper {
  (props: PaperProps & { ref?: React.ForwardedRef<unknown> }): React.ReactElement | null
  displayName?: string
}

/**
 * #### [📝 Paper](https://componentry.design/docs/components/paper)
 *
 * Paper provides containers for custom elements.
 * @example
 * ```tsx
 * <Paper variant="flat">
 *   ...
 * </Paper>
 * ```
 */
export const Paper: Paper = forwardRef((props, ref) => {
  const { variant = 'flat', ...rest } = {
    ...useThemeProps('Paper'),
    ...props,
  }

  return element({
    ref,
    componentCx: ['C9Y-Paper-base', `C9Y-Paper-${variant}`],
    ...rest,
  })
})
Paper.displayName = 'Paper'
