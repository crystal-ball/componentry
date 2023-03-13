import { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface PaperPropsOverrides {}

export interface PaperPropsDefaults {
  /** Display variant */
  variant?: 'flat'
}

export type PaperProps<As extends React.ElementType = 'div'> = Resolve<
  MergeTypes<PaperPropsDefaults, PaperPropsOverrides> & { as?: As } & UtilityProps
> &
  ElementTypeProps<As>

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
  <As extends React.ElementType = 'div'>(props: PaperProps<As>): React.ReactElement
  displayName?: string
}

export const Paper = forwardRef<HTMLElement, PaperProps>((props, ref) => {
  const { variant = 'flat', ...rest } = {
    ...useThemeProps('Paper'),
    ...props,
  }

  return createElement({
    ref,
    componentClassName: ['C9Y-Paper-base', `C9Y-Paper-${variant}`],
    ...rest,
  })
}) as Paper
Paper.displayName = 'Paper'
