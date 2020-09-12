import cx from 'classnames'
import { useTheme } from '../Theme/Theme'
import { element } from './element'

/**
 * Creates an interaction component
 */
export function interactionComponent(name, baseCx) {
  function InteractionComponent(props) {
    const { variant = 'primary', active, color, disabled, size, ...merged } = {
      ...useTheme(name),
      ...props,
    }

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
