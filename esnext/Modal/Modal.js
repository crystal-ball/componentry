import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React, { Component, Fragment } from 'react';
import { func, object, shape, string } from 'prop-types';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import withActive from '../withActive/withActive';
import elementFactory from '../component-factories/element';

class Modal extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getChildContext", () => ({
      ModalTitle: {
        guid: this.guid
      },
      ModalHeader: {
        deactivate: this.props.deactivate
      }
    }));

    _defineProperty(this, "guid", nanoid());

    _defineProperty(this, "handleModalClick", evt => {
      const {
        target
      } = evt;

      if (target.classList && target.classList.contains('modal')) {
        this.props.deactivate(evt);
      }
    });
  }

  // Hooks
  // ---------------------------------------------------------------------------

  /**
   * Disable scrolling on the body when the modal is open to allow long modals to
   * scroll within the `.modal` container.
   */
  componentDidUpdate(prevProps) {
    const {
      active
    } = this.props;
    const {
      body
    } = window.document;
    if (active && !prevProps.active) body.classList.add('no-scroll');
    if (!active && prevProps.active) body.classList.remove('no-scroll');
  }
  /**
   * Remove body scroll disabler in case modal is unmounted without closing
   */


  componentWillUnmount() {
    window.document.body.classList.remove('no-scroll');
  } // Methods
  // ---------------------------------------------------------------------------

  /**
   * The `.modal` container has a higher z-index than the `.modal-backdrop`, and
   * receives any clicks targeted at the backdrop. In order to close the modal on
   * any click of the backdrop, this handler checks if any click within the modal is
   * on the `.modal`, if the click is inside of the modal *CONTENT*, then the target
   * will be that content. If the target is outside of the modal content, the target
   * will be the `.modal` container and we know the user is clicking outside the
   * modal to close it.
   */


  // Render
  // ---------------------------------------------------------------------------
  render() {
    const THEME = this.context.THEME || {};
    const componentCtx = THEME.Modal || {};
    const {
      active,
      children,
      size,
      visible
    } = { ...componentCtx,
      ...this.props
    };
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": active ? 'false' : 'true',
      "aria-labelledby": `${this.guid}`,
      className: classNames('modal', 'fade', {
        show: visible
      }),
      role: "dialog",
      tabIndex: "-1",
      onClick: this.handleModalClick
    }, /*#__PURE__*/React.createElement("div", {
      className: classNames('modal-dialog', {
        'modal-sm': size === 'small',
        'modal-lg': size === 'large'
      }),
      role: "document"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-content"
    }, children))), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": active ? 'false' : 'true',
      className: classNames('modal-backdrop', 'fade', {
        show: visible
      }),
      role: "presentation"
    }));
  }

}

_defineProperty(Modal, "Body", elementFactory('ModalBody', {
  className: 'modal-body'
}));

_defineProperty(Modal, "Footer", elementFactory('ModalFooter', {
  className: 'modal-footer'
}));

_defineProperty(Modal, "Header", elementFactory('ModalHeader', ({
  children,
  Close,
  ...props
}, ctx) => ({
  className: 'modal-header',
  children: /*#__PURE__*/React.createElement(Fragment, null, children, Close && /*#__PURE__*/React.createElement(Close, {
    onClick: ctx.ModalHeader.deactivate
  })),
  ...props
})));

_defineProperty(Modal, "Title", elementFactory('ModalTitle', (props, ctx) => ({
  tag: 'h4',
  id: ctx.ModalTitle.guid,
  className: 'modal-title',
  ...props
})));

_defineProperty(Modal, "displayName", 'Modal');

_defineProperty(Modal, "contextTypes", {
  THEME: shape({
    Modal: object
  })
});

_defineProperty(Modal, "childContextTypes", {
  ModalTitle: shape({
    guid: string
  }),
  ModalHeader: shape({
    deactivate: func
  })
});

export default withActive({
  transitionState: true
})(Modal);