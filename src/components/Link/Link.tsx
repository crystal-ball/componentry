import { forwardRef } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { type MergePropTypes } from '../../utils/types'
import { useThemeProps } from '../Provider/Provider'

// Module augmentation interface for overriding component props' types
export interface LinkPropsOverrides {}

export interface LinkPropsDefaults {
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
  /** Routing to */
  to?: string
  /** Display variant */
  variant?: 'text'
  /** Indicates whether buttons in a disabled state should be wrapped with a span */
  wrapWhenDisabled?: boolean
}

export type LinkProps = MergePropTypes<LinkPropsDefaults, LinkPropsOverrides> &
  ComponentBaseProps<'a'>

// ✨ Nice display type for IntelliSense
export interface Link {
  (props: LinkProps & { ref?: React.ForwardedRef<unknown> }): React.ReactElement | null
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
    wrapWhenDisabled = true,
    ...merged
  } = {
    ...useThemeProps('Link'),
    ...props,
  }

  const contents = element({
    ref,
    as: merged.href ? 'a' : 'button',
    type: merged.href ? undefined : 'button',
    componentCx: `C9Y-Link-base C9Y-Link-${variant}`,
    ...merged,
  })

  return disabled && wrapWhenDisabled ? (
    <span className='C9Y-Link-DisabledWrapper'>{contents}</span>
  ) : (
    contents
  )
})
Link.displayName = 'Link'
