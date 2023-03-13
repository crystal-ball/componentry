import React, { forwardRef } from 'react'
import { createElement } from '../../utils/create-element'
import { MergeTypes, Resolve } from '../../utils/types'
import { ElementTypeProps, UtilityProps } from '../../utils/utility-props'
import { useThemeProps } from '../Provider/Provider'

// --------------------------------------------------------
// ICON ELEMENTS MAP

/** Mapping of icon IDs to components rendered by Icon */
export type IconElementsMap = { [ID: string]: React.ComponentType }

let iconElementsMap: IconElementsMap = {}

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
export function configureIconElementsMap(elementsMap: IconElementsMap): void {
  iconElementsMap = elementsMap
}

// --------------------------------------------------------
// ICON COMPONENT

/** Module augmentation interface for overriding component props' types */
export interface IconPropsOverrides {}

export interface IconPropsDefaults {
  /** Display variant */
  variant?: 'font'
  /** External path to symbol sprite  */
  externalURI?: string
  /** ID for the `iconElementsMap` or href attribute for symbol sprites */
  id: string
}

export type IconProps<As extends React.ElementType = 'svg'> = Resolve<
  MergeTypes<IconPropsDefaults, IconPropsOverrides> & { as?: As } & UtilityProps
> &
  ElementTypeProps<As>

/**
 * Icon provides consistently themed iconography elements.
 * @example
 * ```tsx
 * <Icon id="coffee" />
 * ```
 * @see [📝 Icon](https://componentry.design/docs/components/icon)
 */
export interface Icon {
  <As extends React.ElementType = 'svg'>(props: IconProps<As>): React.ReactElement
  displayName?: string
}

export const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
  const {
    externalURI = '',
    id,
    variant = 'font',
    ...rest
  } = { ...useThemeProps('Icon'), ...props }

  const hasMappedElement = id in iconElementsMap

  return createElement({
    ref,
    as: hasMappedElement ? iconElementsMap[id] : 'svg',
    children: hasMappedElement ? undefined : <use href={`${externalURI}#${id}`} />,
    componentClassName: `C9Y-Icon-base C9Y-Icon-${variant} icon-${id}`,
    role: 'img',
    'aria-label': id,
    ...rest,
  })
}) as Icon
Icon.displayName = 'Icon'
