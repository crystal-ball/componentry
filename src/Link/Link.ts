import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../utils/types'
import { element } from '../utils/element-creator'

interface LinkProps extends ComponentBaseProps<'a'> {
  /** Toggles an active element style */
  active?: boolean
  /** Link variant color */
  color?: 'primary' | 'secondary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
  /** Routing to */
  to?: string
  /** Display variant */
  variant?: 'primary'
}

/**
 * [Link component 📝](https://componentry.design/components/link)
 */
export const Link: React.FC<LinkProps> = (props) => {
  const { variant = 'primary', color, active, disabled, ...merged } = {
    ...useTheme<LinkProps>('Link'),
    ...props,
  }

  // If an href or to is passed, this instance should render an anchor tag
  const asAnchor = Boolean(merged.href || merged.to)

  return element('Link', {
    as: asAnchor ? 'a' : 'button',
    type: asAnchor ? undefined : 'button',
    disabled,
    componentCx: [
      `link-${variant}`,
      {
        // Include a color class so that users can create link colors with hover and active
        // styles without affecting the general font color utility class
        [`link-color-${color}`]: color,
        active,
        disabled, // We include a disabled class AND pass disabled prop to element for a11y
      },
    ],
    ...merged,
  })
}
Link.displayName = 'Link'
