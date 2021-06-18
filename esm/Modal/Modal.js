import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["active", "align", "children", "deactivate", "scroll", "size", "transitionDuration"],
    _excluded2 = ["children", "close"];

/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { createContext, useContext, useRef } from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { closeBase } from '../Close/Close';
import { useTheme } from '../Theme/Theme';
import { useActive, useActiveSrollReset, useNoScroll, useVisible } from '../hooks';
import { element } from '../utils/element-creator';
import { staticComponent } from '../utils/static-component-builder';
var ModalCtx = /*#__PURE__*/createContext(null);

/**
 * [Modal component 📝](https://componentry.design/components/modal)
 * @experimental
 */
export var Modal = function Modal(props) {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  var _useRef = useRef(nanoid()),
      guid = _useRef.current;

  var _useTheme$useActive$p = _objectSpread(_objectSpread(_objectSpread({}, useTheme('Modal')), useActive()), props),
      propsActive = _useTheme$useActive$p.active,
      align = _useTheme$useActive$p.align,
      children = _useTheme$useActive$p.children,
      deactivate = _useTheme$useActive$p.deactivate,
      _useTheme$useActive$p2 = _useTheme$useActive$p.scroll,
      scroll = _useTheme$useActive$p2 === void 0 ? 'overlay' : _useTheme$useActive$p2,
      size = _useTheme$useActive$p.size,
      transitionDuration = _useTheme$useActive$p.transitionDuration,
      rest = _objectWithoutProperties(_useTheme$useActive$p, _excluded); // Generate timed active/visible values for css property animations


  var _useVisible = useVisible(propsActive, transitionDuration),
      active = _useVisible.active,
      visible = _useVisible.visible; // Disable scrolling on the body when the modal is open to allow long modals
  // to scroll within the `.modal` container.


  useNoScroll(active); // Handle resetting scrolled modal content on modal open

  var containerRef = useRef(null);
  var contentRef = useRef(null);
  useActiveSrollReset(active, containerRef);
  useActiveSrollReset(active, contentRef); // Modal elements structure
  // div.modal-overlay       - Modal overlay background with close handler
  //   div.modal-positioner  - Manages positioning of modal container
  //     div.modal-container - Contains the modal header,body,footer elements

  return /*#__PURE__*/React.createElement(ModalCtx.Provider, {
    value: {
      active: active,
      deactivate: deactivate,
      guid: guid
    }
  }, element('ModalOverlay', _objectSpread({
    'onClick': deactivate,
    'componentCx': ['fade', "modal-".concat(scroll, "-scroll"), {
      visible: visible
    }],
    'aria-hidden': String(!active),
    'aria-labelledby': guid,
    'role': 'presentation',
    'tabIndex': '-1',
    'children':
    /*#__PURE__*/

    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
    React.createElement("div", {
      ref: containerRef,
      className: "modal-positioner"
    }, /*#__PURE__*/React.createElement("div", {
      ref: contentRef,
      className: clsx('modal-container', align, _defineProperty({
        visible: visible
      }, "modal-".concat(size), size)),
      role: "dialog",
      onClick: function onClick(evt) {
        evt.stopPropagation();
      }
    }, children))
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */

  }, rest)));
};
Modal.displayName = 'Modal'; // --------------------------------------------------------
// Close

Modal.Close = staticComponent('ModalClose', closeBase); // --------------------------------------------------------
// Header

Modal.Header = function ModalHeader(props) {
  var _useTheme$props = _objectSpread(_objectSpread({}, useTheme('ModalHeader')), props),
      children = _useTheme$props.children,
      close = _useTheme$props.close,
      rest = _objectWithoutProperties(_useTheme$props, _excluded2);

  var ctx = useContext(ModalCtx);
  assertContext(ctx);
  return element('ModalHeader', _objectSpread({
    children: /*#__PURE__*/React.createElement(React.Fragment, null, children, close && /*#__PURE__*/React.createElement(Modal.Close, {
      onClick: ctx.deactivate
    }))
  }, rest));
};

Modal.Header.displayName = 'ModalHeader'; // --------------------------------------------------------
// Title

Modal.Title = function ModalTitle(props) {
  var ctx = useContext(ModalCtx);
  assertContext(ctx);
  return element('ModalTitle', _objectSpread(_objectSpread({
    as: 'h2',
    id: ctx.guid
  }, useTheme('Modaltitle')), props));
};

Modal.Title.displayName = 'ModalTitle'; // --------------------------------------------------------
// Body

Modal.Body = function ModalBody(props) {
  var bodyRef = useRef(null);
  var ctx = useContext(ModalCtx);
  assertContext(ctx);
  useActiveSrollReset(ctx.active, bodyRef);
  return element('ModalBody', _objectSpread(_objectSpread({
    ref: bodyRef
  }, useTheme('ModalBody')), props));
};

Modal.Body.displayName = 'ModalBody'; // --------------------------------------------------------
// Footer

Modal.Footer = staticComponent('ModalFooter', {
  componentCx: 'modal-footer'
}); // --------------------------------------------------------
// Utils

/**
 * Utility asserts ctx presence for safe access
 */

function assertContext(ctx) {
  if (!ctx) throw new Error('Modal context cannot be used outside of Modal component');
}