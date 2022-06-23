import { type ComponentPropsWithRef, forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface PaperPropsOverrides {}

export interface PaperPropsDefaults {
  variant?: 'flat'
}

export type PaperProps = Resolve<MergeTypes<PaperPropsDefaults, PaperPropsOverrides>> &
  UtilityProps &
  ComponentPropsWithRef<'div'>

// ✨ Nice display type for IntelliSense
export interface Paper {
  (props: PaperProps): React.ReactElement | null
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
