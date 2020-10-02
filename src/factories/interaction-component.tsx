import cx from 'classnames'
import { useTheme } from '../Theme/Theme'
import { UtilityProps } from '../base-types'
import { element } from './element'

interface InteractionProps extends UtilityProps {
  /** Adds an `active` className */
  active?: boolean
  /** Sets the display color for the variant */
  color?: 'primary' | 'secondary'
  /** Disables the element, preventing mouse and keyboard events */
  disabled?: boolean
  /** Sets the HTML element to an anchor */
  href?: string
  /** Sets the display size */
  size?: 'sm' | 'lg'
  /** Sets the HTML element to an anchor */
  to?: string
  /** Display variant */
  variant?: string
}

/**
 * Creates an interaction component
 * @param name Component display and theme name
 * @param baseCX Base className for scoping component classes
 */
export function interactionComponent<T extends InteractionProps>(
  name: string,
  baseCx: string,
): React.FC<T> {
  function InteractionComponent(props) {
    const { variant = 'primary', active, color, disabled, size, ...merged } = {
      ...useTheme(name),
      ...props,
    } as T

    // If an href or to is passed, this instance should render an anchor tag
    const anchorInstance = Boolean(merged.href || merged.to)

    return element({
      as: anchorInstance ? 'a' : 'button',
      type: anchorInstance ? undefined : 'button',
      disabled,
      componentCx: cx(`🅲-${baseCx}`, `${baseCx}-${variant}`, {
        [`${baseCx}-${size}`]: size,
        [`${baseCx}-color-${color}`]: color,
        active,
        // We include a disabled class AND pass disabled prop to element for a11y
        disabled,
      }),
      ...merged,
    })
  }
  InteractionComponent.displayName = name

  return InteractionComponent
}
