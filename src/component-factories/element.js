// @flow
import { createElement } from 'react'
import type { ComponentType, Node } from 'react'
import { object, shape } from 'prop-types'
import classNames from 'classnames'

export type ElementProps = {
  /** Active state of element */
  active?: boolean,
  /** Component parent element render type, can be an HMTL tag or component type */
  as?: ComponentType<any> | string,
  /** Component children */
  children?: Node,
  /** Component class names, handled with classnames */
  className?: string,
}

type Context = { [string]: { [string]: any } }

/**
 *
 * @export
 * @returns {Component} React functional stateless component with base classes.
 */
export default (name: string, elementComputer: Function | Object) => {
  const Element = (
    { className: propsClassName, ...props }: ElementProps,
    ctx: Context = { THEME: {} },
  ) => {
    const ctxProps = ctx.THEME ? ctx.THEME[name] : null
    let mergedProps = props
    let ctxClassName = null

    if (ctxProps) {
      mergedProps = { ...ctxProps, ...props }
      // We handle merging classNames in this function, don't pass through the
      // ctx className to elementComputer or it may override and specified
      // className
      delete mergedProps.className
      ctxClassName = ctxProps.className
    }

    const computed =
      typeof elementComputer === 'function'
        ? elementComputer(mergedProps, ctx)
        : { ...elementComputer, ...props }

    const { as, children, className, tag, ...computedProps } = computed

    return createElement(
      as || tag || 'div',
      {
        className: classNames(ctxClassName, className, propsClassName),
        ...computedProps,
      },
      children,
    )
  }

  Element.displayName = name
  Element.contextTypes = { THEME: shape({ [name]: object }), [name]: object }
  return Element
}
