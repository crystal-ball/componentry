import React, { Component, Children } from 'react';
import { any, node, string } from 'prop-types';

import ListGroupItem from './ListGroupItem';
import classNames from '../utils/classnames';

/**
 * To Document:
 * - There are different wrappers for clickable vs non-clickable list groups. (this
 *   seems less than ideal Bootstrap, can we always do a div?)
 * - Only the first child is checked for an href or onClick for perf. If it is variable,
 *   (which is probably not good in the first place), pass a specific As.
 */
export default class ListGroup extends Component {
  static Item = ListGroupItem

  static propTypes = {
    As: any,
    children: node,
    className: string,
  }

  static defaultProps = {
    As: null,
    children: null,
    className: '',
  }

  render() {
    let {
      As,
      children,
      className,
      ...other
    } = this.props;

    className = classNames('list-group', className);

    // If As has been configured, use it regardless
    if (!As && children) {
      let { href, onClick } = Children.toArray(children)[0].props;
      // If children have an href or onClick, we need a div wrapper b/c children will
      // be either <button> or <a> elements and not <li> elements
      As = href || onClick ? 'div' : 'ul';
    } else {
      As = As || 'ul';
    }

    return(
      <As className={className} {...other}>
        {children}
      </As>
    );
  }
}
