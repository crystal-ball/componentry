import React from 'react'
import { bool, func, oneOf, shape, string } from 'prop-types'
import classNames from 'classnames'

import elementFactory from '../utils/element-factory'
import { suppressBoxShadowOnClick } from '../utils/dom'

const Container = elementFactory({ tagName: 'button', className: 'btn' })

Button.propTypes = {
  className: string,
  color: string,
  link: bool,
  onMouseDown: func,
  outline: bool,
  size: oneOf(['large', 'small', '']),
  type: string
}

Button.defaultProps = {
  className: '',
  color: '',
  link: false,
  onMouseDown() {},
  outline: false,
  size: '',
  type: 'button'
}

Button.contextTypes = {
  COMPONENTRY_THEME: shape({
    defaultButtonColor: string
  })
}

/**
 * The `Button` component is the base component for any element that has a user
 * interaction in the library. It is important to use either a button element or a
 * valid href for any click target in order to support keyboard users _(See A++
 * Accessibility Guide)_. In cases where a target that looks like a link is required,
 * but the target is causes an in page change, the `Button` component should be used
 * and passed the `link` property.
 *
 * _NOTE: internally component will call function `suppressBoxShadowOnClick` on the
 * mousedown event, which is only triggered by clicks. This will suppress the default
 * Bootstrap box shadow applied to buttons only on click. Keyboard users will still
 * benefit from the box shadow focus styles.
 * @param {Object} [children]
 * @param {string} [className='']
 * @param {string} [color='']       Pass a color for a contextualized button using color
 * @param {boolean} [link=false]    Pass true to render a button that looks like an
 *                                  anchor element (use for A++ Accessibility)
 * @param {?Function} [onMouseDown] Any function passed will be called on mousedown
 *                                  event
 * @param {boolean} [outline=false] Pass true to render an outline style button
 * @param {boolean} [size='']   Pass true to render a size small button
 * @param {string} [type='button']  Pass a type to override button `type` attribute
 * @return {Component}
 */
export default function Button(
  { className, color, link, outline, size, onMouseDown, ...rest },
  { COMPONENTRY_THEME: { defaultButtonColor = 'primary' } }
) {
  const mouseDown = evt => {
    // Call passed mouse down event and then handle blur
    onMouseDown.call(this, evt)
    suppressBoxShadowOnClick(evt)
  }
  color = color || defaultButtonColor

  className = classNames(className, {
    [`btn-${color}`]: !outline,
    'btn-link': link,
    'btn-unstyled': link,
    [`btn-outline-${color}`]: outline,
    'btn-lg': size === 'large',
    'btn-sm': size === 'small'
  })

  return <Container className={className} onMouseDown={mouseDown} {...rest} />
}
