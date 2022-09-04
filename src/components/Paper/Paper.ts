import { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface PaperPropsOverrides {}

export interface PaperPropsDefaults {
  /** Display variant */
  variant?: 'flat'
}

export type PaperPropsBase<Elem extends React.ElementType = 'div'> = UtilityProps &
  MergeTypes<PaperPropsDefaults, PaperPropsOverrides> & { as?: Elem }

export type PaperProps<Elem extends React.ElementType = 'div'> = PaperPropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof PaperPropsBase<Elem>>

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
  <Elem extends React.ElementType = 'div'>(props: PaperProps<Elem>): React.ReactElement
  displayName?: string
}

export const Paper = forwardRef<HTMLElement, PaperProps>((props, ref) => {
  const { variant = 'flat', ...rest } = {
    ...useThemeProps('Paper'),
    ...props,
  }

  return element({
    ref,
    componentCx: ['C9Y-Paper-base', `C9Y-Paper-${variant}`],
    ...rest,
  })
}) as Paper
Paper.displayName = 'Paper'
