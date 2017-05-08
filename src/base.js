import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function component factory for elements with simple properties. Eg:
 * ```javascript
 * export default base({ className: 'card-block' });
 * ```
 *
 * The above will return a functional component with all of the proptypes and
 * bindings needed for a simple element
 * @method base
 * @param {string} [className] Optional base class name
 * @param {string} [tagName]   Optional wrapping tag element
 * @return {function} Functional React component
 */
const base = ({
  className: _passedClassName,
  tagName='div',
}) => {
  const component = ({
    className,
    children,
    ...other
  }) => {
    let _className = classnames(_passedClassName, className);
    let TagName = tagName;

    console.log('class: ', _className);

    return (
      <TagName className={_className} {...other}>
        {children}
      </TagName>
    );
  };

  component.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  component.defaultProps = {
    children: null,
    className: '',
  };

  return component;
};

export default base;
