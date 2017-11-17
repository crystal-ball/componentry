// @flow
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

import cleanProps from '../utils/clean-props'

type Options = {
  /**
   * Class names that will be merged with passed class names
   */
  classes?: string,
  /**
   * Props to remove from object spread
   */
  clean?: Array<string>,
  /**
   * Function for computing component className
   */
  computedClassName?: Function,
  /**
   * Function for computing the tag to createElement with
   */
  computedTag?: Function,
  /**
   * Custom display name assigned to return component for better debugging
   */
  name: string,
  /**
   * HTML tag specifying container element
   */
  tag?: ComponentType<any> | string
}

export type ElementProps = {
  /**
   * Component parent element render type, can be an HMTL tag or component type
   */
  as?: ComponentType<any> | string,
  /**
   * Component children
   */
  children?: Node,
  /**
   * Component class names, handled with classnames
   */
  className?: string
}

type Context = { [string]: { [string]: any } }

/**
 * This factory returns a FSC with the specified HTML element and base classes. It
 * can be used to create simple components with default class names and attributes.
 *
 * Notes:
 * - A `displayName should be passed for improved debugging
 * - The `attrs` param is an escape hatch to pass any other attribute values.
 * @export
 * @returns {Component} React functional stateless component with base classes.
 */
export default (
  {
    classes,
    clean,
    computedClassName,
    computedTag,
    name,
    tag,
    ...optionsRest
  }: Options = {}
) => {
  const Element = (props: ElementProps, { THEME = {} }: Context) => {
    const componentCtx = THEME[name] || {}
    const { as, children, className, ...rest }: ElementProps = {
      ...componentCtx,
      ...props
    }
    const spread = clean ? cleanProps(rest, clean) : rest

    return createElement(
      // If the tag is computed call computed with props, else use default priority
      // Props have precedence, use factory tag as default
      as || (computedTag ? computedTag(props) : tag || 'div'),
      {
        className: computedClassName
          ? computedClassName(componentCtx.className, props.className, rest)
          : classNames(classes, className),
        ...optionsRest,
        ...spread
      },
      children
    )
  }

  Element.displayName = name
  Element.contextTypes = { THEME: shape({ [name]: object }) }
  return Element
}
