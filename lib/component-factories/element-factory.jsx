// @flow
/* flowlint
 *   sketchy-null:off
 */
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import classNames from 'classnames'

type Options = {
  /**
   * Wildcard object for spreading any additional attributes onto return component
   */
  attrs?: {},
  /**
   * Class names that will be merged with passed class names
   */
  classes?: string,
  /**
   * Custom display name assigned to return component for better debugging
   */
  displayName?: string,
  /**
   * HTML tag specifying container element
   */
  tag?: ComponentType<any> | string
}

type Props = {
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
export default ({ attrs = {}, classes, displayName, tag }: Options = {}) => {
  const Element = ({ as, children, className, ...rest }: Props) =>
    createElement(
      // Props have precedence, use factory tag as default
      as || tag || 'div',
      {
        className: classNames(classes, className),
        ...attrs,
        ...rest
      },
      children
    )
  Element.displayName = displayName || 'Element'

  return Element
}
