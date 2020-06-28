import cx from 'classnames'

import elem from '../elem-factory'
import { useTheme } from '../Theme/Theme'

/**
 * Creates an interaction component
 */
export default function interactionComponentFactory(name, baseCx) {
  function InteractionComponent(props) {
    const { variant = 'primary', active, color, disabled, size, ...merged } = {
      ...useTheme(name),
      ...props,
    }

    // If an href or to is passed, this instance should render an anchor tag
    const anchorInstance = Boolean(merged.href || merged.to)

    return elem({
      as: anchorInstance ? 'a' : 'button',
      type: anchorInstance ? undefined : 'button',
      elemClassName: cx(baseCx, `${baseCx}-${variant}`, {
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
