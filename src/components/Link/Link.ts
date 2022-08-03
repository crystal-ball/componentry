import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { DistributiveOmit, MergeTypes } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface LinkPropsOverrides {}

export interface LinkPropsDefaults {
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
  /** Display variant */
  variant?: 'text'
}

export type LinkPropsBase<Elem extends React.ElementType = 'a'> = UtilityProps &
  MergeTypes<LinkPropsDefaults, LinkPropsOverrides> & { as?: Elem }

export type LinkProps<Elem extends React.ElementType = 'a'> = LinkPropsBase<Elem> &
  DistributiveOmit<React.ComponentPropsWithRef<Elem>, keyof LinkPropsBase<Elem>>

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
  <Elem extends React.ElementType = 'a'>(
    props: LinkProps<Elem>,
  ): React.ReactElement | null
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

  return element({
    ref,
    disabled,
    as: merged.href ? 'a' : 'button',
    // @ts-expect-error - Ensure button works for router library usage even though to isn't in props
    type: merged.href || merged.to ? undefined : 'button',
    componentCx: `C9Y-Link-base C9Y-Link-${variant}`,
    ...merged,
  })
}) as Link
Link.displayName = 'Link'
