import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface LinkPropsOverrides {}

export interface LinkPropsDefaults {
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
  /** Display variant */
  variant?: 'text'
}

export type LinkProps = Resolve<MergeTypes<LinkPropsDefaults, LinkPropsOverrides>> &
  UtilityProps &
  React.ComponentPropsWithRef<'a'>

// ✨ Nice display type for IntelliSense
export interface Link {
  (props: LinkProps): React.ReactElement | null
  displayName?: string
}

/**
 * #### [📝 Link component](https://componentry.design/docs/components/link)
 *
 * Link provides actionable elements in the style of hyperlinks.
 * @example
 * ```tsx
 * <Link to="/">
 *   Home
 * <Link>
 * ```
 */
export const Link: Link = forwardRef((props, ref) => {
  const {
    disabled,
    variant = 'text',
    ...merged
  } = {
    ...useThemeProps('Link'),
    ...props,
  }

  return element({
    ref,
    disabled,
    as: merged.href ? 'a' : 'button',
    // @ts-expect-error - Ensure button works for router library usage even though to isn't in props
    type: merged.href || merged.to ? undefined : 'button',
    componentCx: `C9Y-Link-base C9Y-Link-${variant}`,
    ...merged,
  })
})
Link.displayName = 'Link'
