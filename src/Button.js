import React, { PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Function to handle removing default Bootstrap box-shadow focus style only on click
 * of button by attaching function to the `onMouseDown` event (which is only
 * fired for mouse events).
 *
 * Function overrides default browser outline css, then attaches a blur
 * listener to element that returns outline control to browser on blur and
 * self destructs listener. This allows the element to regain focus if the
 * user switches to keyboard.
 *
 * _Note that Bootstrap overrides the default browser **outline** to none for button
 * focus and replaces it with a box shadow. This targets that box shadow for click
 * events **only**. On keyboard focus, the default Bootstrap box shadow is still
 * shown. This provides A++ Accessibility for keyboard users._
 * @param {Object} evt React synthetic event
 */
const suppressBoxShadowOnClick = evt => {
  function blurHandler(event) {
    // Remove box-shadow override to enable possibility of keyboard focus
    event.target.style.boxShadow = '';
    // Remove this blur listener
    event.target.removeEventListener('blur', blurHandler);
  }

  evt.target.style.boxShadow = 'none';
  evt.target.addEventListener('blur', blurHandler);
};

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
 * @param {boolean} [large=false]   Pass true to render a size large button
 * @param {boolean} [link=false]    Pass true to render a button that looks like an
 *                                  anchor element (use for A++ Accessibility)
 * @param {?Function} [onMouseDown] Any function passed will be called on mousedown
 *                                  event
 * @param {boolean} [outline=false] Pass true to render an outline style button
 * @param {boolean} [small=false]   Pass true to render a size small button
 * @param {string} [type='button']  Pass a type to override button `type` attribute
 * @return {Component}
 */
const Button = ({
  children=null,
  className='',
  color='',
  large=false,
  link=false,
  outline=false,
  small=false,
  type='button',
  onMouseDown,
  ...other
}) => {
  let _onMouseDown;
  let _className = classnames('btn', className, {
    [`btn-${color}`]: color && !outline,
    'btn-link': link,
    'btn-unstyled': link,
    [`btn-outline-${color}`]: outline && color,
    'btn-lg': large,
    'btn-sm': small
  });

  // If an onMouseDown was passed in, call it, then call our blur handler
  if (onMouseDown) {
    _onMouseDown = function(evt) {
      onMouseDown.call(this, evt);
      suppressBoxShadowOnClick(evt);
    };
  // Otherwise just attach our blur handler
  } else {
    _onMouseDown = suppressBoxShadowOnClick;
  }

  return(
    <button className={_className} onMouseDown={_onMouseDown} type={type} {...other}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  large: PropTypes.bool,
  link: PropTypes.bool,
  onMouseDown: PropTypes.func,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  type: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: null,
  color: '',
  large: false,
  link: false,
  onMouseDown: null,
  outline: false,
  small: false,
  type: 'button'
};

export default Button;
