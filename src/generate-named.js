import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Function component factory for elements with class names only. Eg:
 * ```javascript
 * const Header = generateNamed({ name: 'card-header'});
 * export default base({ className: 'card-block' });
 * ```
 *
 * The above will return a functional component with all of the proptypes and
 * bindings needed for a simple element
 * @method base
 * @param {string} [className] Optional base class name
 * @param {string} [As]        Override wrapping tag element
 * @return {function} Functional React component
 */
const base = ({
  name='',
}) => {
  const Named = ({
    As='div',
    className,
    children,
    ...other
  }) => {
    let _className = classnames(name, className);

    return (
      <As className={_className} {...other}>
        {children}
      </As>
    );
  };

  Named.propTypes = {
    As: PropTypes.any,
    children: PropTypes.node,
    className: PropTypes.string,
  };

  Named.defaultProps = {
    As: 'div',
    children: null,
    className: '',
  };

  return Named;
};

export default base;
