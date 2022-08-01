import React, { forwardRef } from 'react'
import { element } from '../../utils/element-creator'
import { MergeTypes, Resolve } from '../../utils/types'
import { UtilityProps } from '../../utils/utility-classes'
import { useThemeProps } from '../Provider/Provider'

// --------------------------------------------------------
// ICON ELEMENTS MAP

/** Mapping of icon IDs to components rendered by Icon */
export type IconElementsMap = { [ID: string]: React.ComponentType<unknown> }

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
  /** External path to symbol sprite  */
  externalURI?: string
  /** ID for the `iconElementsMap` or href attribute for symbol sprites */
  id: string
  /** Display variant */
  variant?: 'font'
}

export type IconProps<Elem extends React.ElementType = 'svg'> = Resolve<
  MergeTypes<IconPropsDefaults, IconPropsOverrides>
> &
  UtilityProps &
  React.ComponentPropsWithRef<Elem> & { as?: Elem }

/**
 * Icon provides consistently themed iconography elements.
 * @example
 * ```tsx
 * <Icon id="coffee" />
 * ```
 * @see [📝 Icon](https://componentry.design/docs/components/icon)
 */
export interface Icon {
  <Elem extends React.ElementType = 'svg'>(
    props: IconProps<Elem>,
  ): React.ReactElement | null
  displayName?: string
}

export const Icon: Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
  const {
    externalURI = '',
    id,
    variant = 'font',
    ...rest
  } = { ...useThemeProps('Icon'), ...props }

  const hasMappedElement = id in iconElementsMap

  return element({
    ref,
    as: hasMappedElement ? iconElementsMap[id] : 'svg',
    children: hasMappedElement ? undefined : <use href={`${externalURI}#${id}`} />,
    componentCx: `C9Y-Icon-base C9Y-Icon-${variant} icon-${id}`,
    role: 'img',
    'aria-label': id,
    ...rest,
  })
})
Icon.displayName = 'Icon'
