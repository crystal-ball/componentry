import { forwardRef } from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { type MergePropTypes } from '../../utils/types'
import { element } from '../../utils/element-creator'

// Module augmentation interface for overriding component props' types
export interface LinkPropsOverrides {}

interface LinkPropsDefaults {
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
  /** Routing to */
  to?: string
  /** Display variant */
  variant?: 'text' | 'inherit'
}

type LinkProps = MergePropTypes<LinkPropsDefaults, LinkPropsOverrides> &
  ComponentBaseProps<'a'>

/**
 * [Link component 📝](https://componentry.design/components/link)
 * @experimental
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { variant = 'text', ...merged } = {
    ...useTheme<LinkProps>('Link'),
    ...props,
  }

  return element({
    ref,
    as: merged.href ? 'a' : 'button',
    type: merged.href ? undefined : 'button',
    componentCx: `C9Y-Link-base C9Y-Link-${variant}`,
    ...merged,
  })
})
Link.displayName = 'Link'
