import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface LinkPropsOverrides {}

export interface LinkPropsDefaults {
  /** Display variant */
  variant?: 'text'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
}

export type LinkProps<As extends React.ElementType = 'a'> = Resolve<
  MergeTypes<LinkPropsDefaults, LinkPropsOverrides> & { as?: As } & Omit<
      UtilityProps,
      'color'
    >
> &
  ElementTypeProps<As>

/**
 * Link provides action elements styled as links.
 * @example
 * ```tsx
 * <Link to="/">
 *   Componentry
 * <Link>
 * ```
 * @see [📝 Link component](https://componentry.design/docs/components/link)
 */
export interface Link {
  <As extends React.ElementType = 'a'>(props: LinkProps<As>): React.ReactElement
  displayName?: string
}

export const Link = forwardRef<HTMLElement, LinkProps>((props, ref) => {
  const {
    disabled,
    variant = 'text',
    ...merged
  } = {
    ...useThemeProps('Link'),
    ...props,
  }

  return createElement({
    ref,
    disabled,
    as: merged.href ? 'a' : 'button',
    // @ts-expect-error - Ensure button works for router library usage even though to isn't in props
    type: merged.href || merged.to ? undefined : 'button',
    componentClassName: `C9Y-Link-base C9Y-Link-${variant}`,
    ...merged,
  })
}) as Link
Link.displayName = 'Link'
