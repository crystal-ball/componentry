import { useTheme } from '../Theme/Theme'
import { ComponentBaseProps } from '../../utils/types'
import { element } from '../../utils/element-creator'

interface LinkProps extends ComponentBaseProps<'a'> {
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** HTML element href */
  href?: string
  /** Routing to */
  to?: string
  /** Display variant */
  variant?: 'text'
}

/**
 * [Link component 📝](https://componentry.design/components/link)
 * @experimental
 */
export const Link: React.FC<LinkProps> = (props) => {
  const { variant = 'text', ...merged } = {
    ...useTheme<LinkProps>('Link'),
    ...props,
  }

  return element('Link', {
    as: merged.href ? 'a' : 'button',
    type: merged.href ? undefined : 'button',
    componentCx: `🅲Link-base 🅲Link-${variant}`,
    ...merged,
  })
}
Link.displayName = 'Link'
