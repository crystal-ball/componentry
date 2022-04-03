import React from 'react'
import { type ClassValue } from 'clsx'
import { useCtxProps } from '../components/Provider/Provider'
import { element } from './element-creator'

type StaticOptions<Props> = Props & {
  componentCx?: ClassValue
}

/**
 * Generates a static component. Used for components that just set a className
 * and HTML attributes
 * @param displayName - Component name
 * @param defaultProps - Componentry library default prop values
 */
export function staticComponent<Props>(
  displayName: string,
  defaultProps?: StaticOptions<Props>,
): React.FC<Props> {
  function Component(props: Props) {
    return element({
      componentCx: `C9Y-${displayName}`,
      ...defaultProps,
      // @ts-expect-error -- TODO: can update displayName type to keyof components, but
      // that requires adding _every_ subcomponent to the Components map
      ...useCtxProps(displayName),
      ...props,
    })
  }

  Component.displayName = displayName

  return Component
}
