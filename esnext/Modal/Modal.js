/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { createContext, useContext, useRef } from 'react';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { closeBase } from '../Close/Close';
import { useTheme } from '../Theme/Theme';
import { useActive, useActiveSrollReset, useNoScroll, useVisible } from '../hooks';
import { element } from '../utils/element-creator';
import { staticComponent } from '../utils/static-component-builder';
const ModalCtx = /*#__PURE__*/createContext(null);

/**
 * [Modal component 📝](https://componentry.design/components/modal)
 * @experimental
 */
export const Modal = props => {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  const {
    current: guid
  } = useRef(nanoid());
  const {
    active: propsActive,
    align,
    children,
    deactivate,
    scroll = 'overlay',
    size,
    transitionDuration,
    ...rest
  } = { ...useTheme('Modal'),
    ...useActive(),
    ...props
  }; // Generate timed active/visible values for css property animations

  const {
    active,
    visible
  } = useVisible(propsActive, transitionDuration); // Disable scrolling on the body when the modal is open to allow long modals
  // to scroll within the `.modal` container.

  useNoScroll(active); // Handle resetting scrolled modal content on modal open

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  useActiveSrollReset(active, containerRef);
  useActiveSrollReset(active, contentRef); // Modal elements structure
  // div.modal-overlay       - Modal overlay background with close handler
  //   div.modal-positioner  - Manages positioning of modal container
  //     div.modal-container - Contains the modal header,body,footer elements

  return /*#__PURE__*/React.createElement(ModalCtx.Provider, {
    value: {
      active,
      deactivate,
      guid
    }
  }, element('ModalOverlay', {
    'onClick': deactivate,
    'componentCx': ['fade', `modal-${scroll}-scroll`, {
      visible
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
      className: clsx('modal-container', align, {
        visible,
        [`modal-${size}`]: size
      }),
      role: "dialog",
      onClick: evt => {
        evt.stopPropagation();
      }
    }, children))
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
    ,
    ...rest
  }));
};
Modal.displayName = 'Modal'; // --------------------------------------------------------
// Close

Modal.Close = staticComponent('ModalClose', closeBase); // --------------------------------------------------------
// Header

Modal.Header = function ModalHeader(props) {
  const {
    children,
    close,
    ...rest
  } = { ...useTheme('ModalHeader'),
    ...props
  };
  const ctx = useContext(ModalCtx);
  assertContext(ctx);
  return element('ModalHeader', {
    children: /*#__PURE__*/React.createElement(React.Fragment, null, children, close && /*#__PURE__*/React.createElement(Modal.Close, {
      onClick: ctx.deactivate
    })),
    ...rest
  });
};

Modal.Header.displayName = 'ModalHeader'; // --------------------------------------------------------
// Title

Modal.Title = function ModalTitle(props) {
  const ctx = useContext(ModalCtx);
  assertContext(ctx);
  return element('ModalTitle', {
    as: 'h2',
    id: ctx.guid,
    ...useTheme('Modaltitle'),
    ...props
  });
};

Modal.Title.displayName = 'ModalTitle'; // --------------------------------------------------------
// Body

Modal.Body = function ModalBody(props) {
  const bodyRef = useRef(null);
  const ctx = useContext(ModalCtx);
  assertContext(ctx);
  useActiveSrollReset(ctx.active, bodyRef);
  return element('ModalBody', {
    ref: bodyRef,
    ...useTheme('ModalBody'),
    ...props
  });
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