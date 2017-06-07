import React from 'react';
import { any, node } from 'prop-types';

Content.propTypes = {
  As: any,
  children: node,
};

Content.defaultProps = {
  As: 'div',
  children: null,
};

/**
 * The base component for rendering content in an HTML element. Defaults to a div.
 * @export
 * @param {Object} Props
 * @returns {Component}
 */
export default function Content ({
  As='div',
  children,
  ...other
}) {
  return (
    <As {...other}>
      {children}
    </As>
  );
}
