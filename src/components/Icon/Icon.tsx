import { type ComponentType, type FC } from 'react'
import { type ComponentBaseProps } from '../../utils/base-types'
import { element } from '../../utils/element-creator'
import { type MergePropTypes } from '../../utils/types'
import { useThemeProps } from '../Provider/Provider'

/** Module augmentation interface for overriding component props' types */
export interface IconPropsOverrides {}

export interface IconPropsBase {
  /** External path to symbol sprite  */
  externalURI?: string
  /** ID for the `iconElementsMap` or href attribute for symbol sprites */
  id: string
  /** Display variant */
  variant?: 'font'
}

export type IconProps = MergePropTypes<IconPropsBase, IconPropsOverrides> &
  ComponentBaseProps<'svg'>

/** Mapping of icon IDs to components rendered by Icon */
export type IconElementsMap = { [ID: string]: ComponentType<any> }
let iconElementsMap: IconElementsMap = {}

/**
 * **[📝 Icon docs](https://componentry.design/docs/components/icon)**
 *
 * `Icon` provides consistent iconography using SVG icons.
 * @example
 * ```tsx
 * <Icon id="coffee" />
 * ```
 */
export const Icon: FC<IconProps> = (props) => {
  const {
    externalURI = '',
    id,
    variant = 'font',
    ...rest
  } = { ...useThemeProps('Icon'), ...props }

  const hasMappedElement = id in iconElementsMap

  return element({
    as: hasMappedElement ? iconElementsMap[id] : 'svg',
    children: hasMappedElement ? undefined : <use href={`${externalURI}#${id}`} />,
    componentCx: `C9Y-Icon-base C9Y-Icon-${variant} icon-${id}`,
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
 * ```ts
 * import Info from './info.svg'
 * import Coffee from './coffee.svg'
 *
 * configureIconElementsMap({
 *   info: Info,
 *   coffee: Coffee
 * })
 * ```
 */
export function configureIconElementsMap(elementsMap: IconElementsMap) {
  iconElementsMap = elementsMap
}
