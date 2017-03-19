import React, { PropTypes } from 'react';

/**
 * Function to handle removing default browser outline style only on click of
 * button by attaching function to the `onMouseDown` event (which is only
 * fired for mouse events).
 *
 * Function overrides default browser outline css, then attaches a blur
 * listener to element that returns outline control to browser on blur and
 * self destructs listener. This allows the element to regain focus if the
 * user switches to keyboard.
 * @param {Object} evt React synthetic event
 */
const suppressFocusOnClick = evt => {
  function blurHandler(event) {
    // Remove outline override to enable possibility of keyboard focus
    event.target.style.outline = '';
    // Remove this blur listener
    event.target.removeEventListener('blur', blurHandler);
  }

  evt.target.style.outline = 'none';
  evt.target.addEventListener('blur', blurHandler);
};

/**
 * The `Button` component is the base for any interactable element in the library.
 *
 * To Document:
 * - Link buttons
 * - Mousedown handler for outlines
 * @param {?Function} [onMouseDown]
 * @param {string} [className='']
 * @param {string} [color='']
 * @param {string} [type='button']
 * @param {Object} [children]
 * @param {boolean} [link]
 */
export const Button = ({
    onMouseDown,
    className='',
    color='',
    type='button',
    children=null,
    link=false,
    ...other
  }) => {
  let _onMouseDown;
  className = className ? `${className} btn` : 'btn'; // Attach btn class for styling
  className += link ? ' btn-link btn-unstyled' : ''; // Attach link class for link buttons
  className += color ? ` btn-${color}`: ''; // Attach color type classes

  // If an onMouseDown was passed in, call it, then call our blur handler
  if (onMouseDown) {
    _onMouseDown = function(evt) {
      onMouseDown.call(this, evt);
      suppressFocusOnClick(evt);
    };
  // Otherwise just attach our blur handler
  } else {
    _onMouseDown = suppressFocusOnClick;
  }

  return(
    <button className={className} onMouseDown={_onMouseDown} type={type} {...other}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.bool,
  onMouseDown: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  children: null,
  className: null,
  color: '',
  link: false,
  type: 'button',
  onMouseDown: null
};
