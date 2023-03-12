import React from 'react'
import { useThemeProps } from '../components/Provider/Provider'
import { createElement } from './create-element'

/**
 * Convenience function for creating components with only static props
 * @param displayName - Component name
 * @param defaultProps - Componentry library default prop values
 */
export function createStaticComponent<Props>(
  displayName: string,
  defaultProps?: Props,
): React.FC<Props> {
  function Component(props: Props) {
    return createElement({
      componentClassName: `C9Y-${displayName}`,
      ...defaultProps,
      // @ts-expect-error -- TODO: can update displayName type to keyof components, but
      // that requires adding _every_ subcomponent to the Components map
      ...useThemeProps(displayName),
      ...props,
    })
  }

  Component.displayName = displayName

  return Component
}
