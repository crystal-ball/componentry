import React from 'react'
import { useTheme } from '../Theme/Theme'
import { type ComponentBaseProps } from '../../utils/base-types'
import { type MergePropTypes } from '../../utils/types'
import { element } from '../../utils/element-creator'

// Module augmentation interface for overriding component props' types
export interface IconPropsOverrides {}

interface IconPropsDefaults {
  /** External path to symbol sprite  */
  externalURI?: string
  /** ID for the `iconElementsMap` or href attribute for symbol sprites */
  id: string
  /** Display variant */
  variant?: 'font'
}

type IconProps = MergePropTypes<IconPropsDefaults, IconPropsOverrides> &
  ComponentBaseProps<'svg'>

type ElementsMap = { [ID: string]: () => JSX.Element }
let iconElementsMap: ElementsMap = {}

/**
 * [Icon component 📝](https://componentry.design/components/icon)
 */
export const Icon: React.FC<IconProps> = (props) => {
  const {
    externalURI = '',
    id,
    variant = 'font',
    ...rest
  } = { ...useTheme<IconProps>('Icon'), ...props }

  const hasMappedElement = id in iconElementsMap

  return element({
    as: hasMappedElement ? iconElementsMap[id] : 'svg',
    children: hasMappedElement ? undefined : <use href={`${externalURI}#${id}`} />,
    componentCx: `🅲Icon-base 🅲Icon-${variant} icon-${id}`,
    role: 'img',
    'aria-label': id,
    ...rest,
  })
}
Icon.displayName = 'Icon'

/**
 * Configuration method for defining the elements to render for each Icon ID.
 * @remarks
 * Configuring an icon elements map isn't necessary if you've setup an SVG
 * symbol sprite.
 * @example
 * import Info from './info.svg'
 * import Coffee from './coffee.svg'
 *
 * configureIconElementsMap({
 *   info: Info,
 *   coffee: Coffee
 * })
 */
export function configureIconElementsMap(elementsMap: ElementsMap) {
  iconElementsMap = elementsMap
}
