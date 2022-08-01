import { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface PaperPropsOverrides {}

export interface PaperPropsDefaults {
  /** Display variant */
  variant?: 'flat'
}

export type PaperProps<Elem extends React.ElementType = 'div'> = Resolve<
  MergeTypes<PaperPropsDefaults, PaperPropsOverrides>
> &
  UtilityProps &
  React.ComponentPropsWithRef<Elem> & { as?: Elem }

/**
 * Paper provides containers for custom elements.
 * @example
 * ```tsx
 * <Paper variant="flat">
 *   ...
 * </Paper>
 * ```
 * @see [📝 Paper](https://componentry.design/docs/components/paper)
 */
export interface Paper {
  <Elem extends React.ElementType = 'div'>(
    props: PaperProps<Elem>,
  ): React.ReactElement | null
  displayName?: string
}

export const Paper: Paper = forwardRef<HTMLElement, PaperProps>((props, ref) => {
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
