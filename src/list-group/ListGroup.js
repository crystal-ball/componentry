import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListGroupItem from './ListGroupItem';

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
    children: PropTypes.node,
    className: PropTypes.string,
    tagName: PropTypes.string,
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

    let _className = classNames('list-group', className);

    return(
      <TagName className={_className} {...other}>
        {children}
      </TagName>
    );
  }
}
