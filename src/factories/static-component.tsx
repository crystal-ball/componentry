import React from 'react'
import cx from 'classnames'
import { useTheme } from '../Theme/Theme'
import { element } from './element'

type StaticOptions<TProps> = TProps & {
  componentCx?: Parameters<typeof cx>[0]
}

/**
 * Generates a static component. Used for components that just sets a className
 * and HTML attributes
 * @param {string} name Component name
 * @param {Object} propsDefaults Library defaults
 */
export function staticComponent<P>(
  name: string,
  propsDefaults: StaticOptions<P>,
): React.FC<P> {
  function Component(props: P) {
    return element({ ...propsDefaults, ...useTheme(name), ...props })
  }
  Component.displayName = name

  return Component
}
