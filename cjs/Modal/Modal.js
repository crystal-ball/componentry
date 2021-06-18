"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _nanoid = require("nanoid");

var _Close = require("../Close/Close");

var _Theme = require("../Theme/Theme");

var _hooks = require("../hooks");

var _elementCreator = require("../utils/element-creator");

var _staticComponentBuilder = require("../utils/static-component-builder");

var _excluded = ["active", "align", "children", "deactivate", "scroll", "size", "transitionDuration"],
    _excluded2 = ["children", "close"];
var ModalCtx = /*#__PURE__*/(0, _react.createContext)(null);

/**
 * [Modal component 📝](https://componentry.design/components/modal)
 * @experimental
 */
var Modal = function Modal(props) {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  var _useRef = (0, _react.useRef)((0, _nanoid.nanoid)()),
      guid = _useRef.current;

  var _useTheme$useActive$p = (0, _objectSpread2["default"])((0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('Modal')), (0, _hooks.useActive)()), props),
      propsActive = _useTheme$useActive$p.active,
      align = _useTheme$useActive$p.align,
      children = _useTheme$useActive$p.children,
      deactivate = _useTheme$useActive$p.deactivate,
      _useTheme$useActive$p2 = _useTheme$useActive$p.scroll,
      scroll = _useTheme$useActive$p2 === void 0 ? 'overlay' : _useTheme$useActive$p2,
      size = _useTheme$useActive$p.size,
      transitionDuration = _useTheme$useActive$p.transitionDuration,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$useActive$p, _excluded); // Generate timed active/visible values for css property animations


  var _useVisible = (0, _hooks.useVisible)(propsActive, transitionDuration),
      active = _useVisible.active,
      visible = _useVisible.visible; // Disable scrolling on the body when the modal is open to allow long modals
  // to scroll within the `.modal` container.


  (0, _hooks.useNoScroll)(active); // Handle resetting scrolled modal content on modal open

  var containerRef = (0, _react.useRef)(null);
  var contentRef = (0, _react.useRef)(null);
  (0, _hooks.useActiveSrollReset)(active, containerRef);
  (0, _hooks.useActiveSrollReset)(active, contentRef); // Modal elements structure
  // div.modal-overlay       - Modal overlay background with close handler
  //   div.modal-positioner  - Manages positioning of modal container
  //     div.modal-container - Contains the modal header,body,footer elements

  return /*#__PURE__*/_react["default"].createElement(ModalCtx.Provider, {
    value: {
      active: active,
      deactivate: deactivate,
      guid: guid
    }
  }, (0, _elementCreator.element)('ModalOverlay', (0, _objectSpread2["default"])({
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
    _react["default"].createElement("div", {
      ref: containerRef,
      className: "modal-positioner"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      ref: contentRef,
      className: (0, _clsx2["default"])('modal-container', align, (0, _defineProperty2["default"])({
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

exports.Modal = Modal;
Modal.displayName = 'Modal'; // --------------------------------------------------------
// Close

Modal.Close = (0, _staticComponentBuilder.staticComponent)('ModalClose', _Close.closeBase); // --------------------------------------------------------
// Header

Modal.Header = function ModalHeader(props) {
  var _useTheme$props = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, (0, _Theme.useTheme)('ModalHeader')), props),
      children = _useTheme$props.children,
      close = _useTheme$props.close,
      rest = (0, _objectWithoutProperties2["default"])(_useTheme$props, _excluded2);

  var ctx = (0, _react.useContext)(ModalCtx);
  assertContext(ctx);
  return (0, _elementCreator.element)('ModalHeader', (0, _objectSpread2["default"])({
    children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children, close && /*#__PURE__*/_react["default"].createElement(Modal.Close, {
      onClick: ctx.deactivate
    }))
  }, rest));
};

Modal.Header.displayName = 'ModalHeader'; // --------------------------------------------------------
// Title

Modal.Title = function ModalTitle(props) {
  var ctx = (0, _react.useContext)(ModalCtx);
  assertContext(ctx);
  return (0, _elementCreator.element)('ModalTitle', (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    as: 'h2',
    id: ctx.guid
  }, (0, _Theme.useTheme)('Modaltitle')), props));
};

Modal.Title.displayName = 'ModalTitle'; // --------------------------------------------------------
// Body

Modal.Body = function ModalBody(props) {
  var bodyRef = (0, _react.useRef)(null);
  var ctx = (0, _react.useContext)(ModalCtx);
  assertContext(ctx);
  (0, _hooks.useActiveSrollReset)(ctx.active, bodyRef);
  return (0, _elementCreator.element)('ModalBody', (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    ref: bodyRef
  }, (0, _Theme.useTheme)('ModalBody')), props));
};

Modal.Body.displayName = 'ModalBody'; // --------------------------------------------------------
// Footer

Modal.Footer = (0, _staticComponentBuilder.staticComponent)('ModalFooter', {
  componentCx: 'modal-footer'
}); // --------------------------------------------------------
// Utils

/**
 * Utility asserts ctx presence for safe access
 */

function assertContext(ctx) {
  if (!ctx) throw new Error('Modal context cannot be used outside of Modal component');
}