import React from 'react'
import cx from 'classnames'
import { useTheme } from '../Theme/Theme'
import { element } from './element-creator'

type StaticOptions<Props> = Props & {
  componentCx?: Parameters<typeof cx>[0]
}

/**
 * Generates a static component. Used for components that just set a className
 * and HTML attributes
 * @param displayName Component name
 * @param defaultProps Componentry library default prop values
 */
export function staticComponent<Props>(
  displayName: string,
  defaultProps?: StaticOptions<Props>,
): React.FC<Props> {
  function Component(props: Props) {
    return element(displayName, {
      ...defaultProps,
      ...useTheme<Props>(displayName),
      ...props,
    })
  }

  Component.displayName = displayName

  return Component
}
