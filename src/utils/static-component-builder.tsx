import React from 'react'
import cx from 'classnames'

import { useTheme } from '../Theme/Theme'
import { element } from './element-creator'

type StaticOptions<TProps> = TProps & {
  componentCx?: Parameters<typeof cx>[0]
}

/**
 * Generates a static component. Used for components that just set a className
 * and HTML attributes
 * @param {string} displayName Component name
 * @param {Object} defaultProps Library default prop values
 */
export function staticComponent<P>(
  displayName: string,
  defaultProps: StaticOptions<P>,
): React.FC<P> {
  function Component(props: P) {
    return element({ ...defaultProps, ...useTheme(displayName), ...props })
  }
  Component.displayName = displayName

  return Component
}
