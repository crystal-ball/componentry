import React, { Component } from 'react';
import { node, string } from 'prop-types';

import ListGroupItem from './ListGroupItem';
import classNames from '../utils/classnames';

/**
 * To Document:
 * - There are different wrappers for clickable vs non-clickable list groups. (this
 *   seems less than ideal Bootstrap, can we always do a div?)
 * - Only the first child is checked for an href or onClick for perf. If it is variable,
 *   (which is probably not good in the first place), pass a specific tagName.
 */
export default class ListGroup extends Component {
  static Item = ListGroupItem

  static propTypes = {
    children: node,
    className: string,
    tagName: string,
  }

  static defaultProps = {
    children: null,
    className: '',
    tagName: '',
  }

  render() {
    let {
      children,
      className,
      tagName,
      ...other
    } = this.props;
    let TagName = 'ul';

    // Check if first child (only first child for performance) has an href or an
    // onClick and if so, change wrapper to a div
    if (tagName) {
      TagName = tagName;
    } else if (Array.isArray(children) && children.length) {
      if ('href' in children[0].props || 'onClick' in children[0].props) { TagName = 'div'; }
    } else {
      if ('href' in children.props || 'onClick' in children.props) { TagName = 'div'; }
    }

    className = classNames('list-group', className);

    return(
      <TagName className={className} {...other}>
        {children}
      </TagName>
    );
  }
}
