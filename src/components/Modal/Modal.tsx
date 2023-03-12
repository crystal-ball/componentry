import clsx from 'clsx'
import { nanoid } from 'nanoid'
import React, { createContext, useContext, useRef } from 'react'

import { useActive, useActiveScrollReset, useNoScroll, useVisible } from '../../hooks'
import { createElement } from '../../utils/create-element'
import { createStaticComponent } from '../../utils/create-static-component'
import { UtilityProps } from '../../utils/utility-props'
import { closeBase } from '../Close/Close'
import { useThemeProps } from '../Provider/Provider'

type ModalCtx = {
  active: string | boolean
  deactivate: (event: KeyboardEvent | MouseEvent | TouchEvent | React.MouseEvent) => void
  guid: string
}

const ModalCtx = createContext<null | ModalCtx>(null)

export interface ModalProps extends UtilityProps, React.ComponentPropsWithoutRef<'div'> {
  /** Sets modal screen alignment to centered */
  align?: 'center'
  /**
   * Controls the Modal overflow scrolling.
   * - `overlay` - modal scrolls within the screen overlay
   * - `container` - modal contents scroll inside modal container, including the header and footer
   * - `body` - modal body only scrolls header and footer remain visible
   */
  scroll?: 'overlay' | 'container' | 'body'
  /** Sets modal width */
  size?: 'sm' | 'lg'
  /**
   * Controls when the component content is mounted where:
   * - `'always'` - The content will be mounted when the element is both visible
   *   and not visible
   * - `'visible'` - The content will only be mounted when visible, when not
   *   visible the contents are not rendered for performance.
   */
  mounted?: 'always' | 'visible'
  /** Controls modal transition duration timing */
  transitionDuration?: number
}

export interface ModalBodyProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface ModalCloseProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'button'> {}

export interface ModalFooterProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {}

export interface ModalHeaderProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'div'> {
  close?: (evt: React.MouseEvent<HTMLButtonElement>) => void
}

export interface ModalTitleProps
  extends UtilityProps,
    React.ComponentPropsWithoutRef<'h2'> {
  id?: string
}

export interface Modal {
  (props: ModalProps): React.ReactElement | null
  displayName: 'Modal'
  /**
   * [Modal body component 📝](https://componentry.design/components/modal)
   */
  Body: React.FC<ModalBodyProps>
  /**
   * [Modal close component 📝](https://componentry.design/components/modal)
   */
  Close: React.FC<ModalCloseProps>
  /**
   * [Modal footer component 📝](https://componentry.design/components/modal)
   */
  Footer: React.FC<ModalFooterProps>
  /**
   * [Modal header component 📝](https://componentry.design/components/modal)
   */
  Header: React.FC<ModalHeaderProps>
  /**
   * [Modal title component 📝](https://componentry.design/components/modal)
   */
  Title: React.FC<ModalTitleProps>
}

/**
 * [Modal component 📝](https://componentry.design/components/modal)
 * @experimental
 */
export const Modal = ((props: ModalProps) => {
  // Guid instance property will be uniquely assigned once for each modal
  // instance, this unique id is then passed to all children through context
  // where it can be used to wire together title aria attributes
  const { current: guid } = useRef(nanoid())

  const {
    active: propsActive,
    align,
    children,
    deactivate,
    mounted = 'visible',
    scroll = 'overlay',
    size,
    transitionDuration,
  } = {
    ...useThemeProps('Modal'),
    ...useActive(),
    ...props,
  }

  // Generate timed active/visible values for css property animations
  const { active, visible } = useVisible(propsActive, transitionDuration)

  // Disable scrolling on the body when the modal is open to allow long modals
  // to scroll within the `.modal` container.
  useNoScroll(active)

  // Handle resetting scrolled modal content on modal open
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  useActiveScrollReset(active, containerRef)
  useActiveScrollReset(active, contentRef)

  if (!active && mounted === 'visible') return null

  // Elements structure
  // div.ModalOverlay      - Modal overlay background with close handler
  // div.ModalPositioner   - Manages positioning of modal container
  //   div.ModalContainer  - Contains the modal header,body,footer elements
  return (
    <ModalCtx.Provider value={{ active, deactivate, guid }}>
      <div className={clsx('C9Y-ModalOverlay', { 'C9Y-active': visible })} />
      <div
        ref={containerRef}
        className={clsx(`C9Y-ModalPositioner C9Y-Modal-${scroll}Scroll`, {
          'C9Y-active': active,
          'C9Y-visible': visible,
        })}
        role='presentation'
        tabIndex={-1}
        onClick={deactivate}
      >
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events -- onClick for stopPropagation only */}
        <div
          ref={contentRef}
          aria-hidden={!active}
          aria-labelledby={guid}
          className={clsx('C9Y-ModalContainer', align, {
            'C9Y-active': visible,
            [`C9Y-ModalContainer-${size}Size`]: size,
          })}
          role='dialog'
          onClick={(evt) => {
            // Prevent clicks bubbling to the Positioner which will close the modal
            evt.stopPropagation()
          }}
        >
          {children}
        </div>
      </div>
    </ModalCtx.Provider>
  )
}) as Modal
Modal.displayName = 'Modal'

// --------------------------------------------------------
// Close

Modal.Close = createStaticComponent<ModalCloseProps>('ModalClose', closeBase)

// --------------------------------------------------------
// Header

Modal.Header = function ModalHeader(props: ModalHeaderProps) {
  const { children, close, ...rest } = {
    ...useThemeProps('ModalHeader'),
    ...props,
  }
  const ctx = useContext(ModalCtx)
  assertContext(ctx)

  return createElement({
    componentClassName: 'C9Y-ModalHeader',
    children: (
      <>
        {children}
        {/* Modal header close is a shorthand for enabling the default close button,
        For custom close components, the component must be passed as a header child */}
        {close && <Modal.Close onClick={ctx.deactivate} />}
      </>
    ),
    ...rest,
  })
}
Modal.Header.displayName = 'ModalHeader'

// --------------------------------------------------------
// Title

Modal.Title = function ModalTitle(props) {
  const ctx = useContext(ModalCtx)
  assertContext(ctx)

  return createElement({
    as: 'h2',
    id: ctx.guid,
    componentClassName: 'C9Y-ModalTitle',
    ...useThemeProps('ModalTitle'),
    ...props,
  })
}
Modal.Title.displayName = 'ModalTitle'

// --------------------------------------------------------
// Body

Modal.Body = function ModalBody(props) {
  const bodyRef = useRef(null)
  const ctx = useContext(ModalCtx)
  assertContext(ctx)

  useActiveScrollReset(ctx.active, bodyRef)

  return createElement({
    ref: bodyRef,
    componentClassName: 'C9Y-ModalBody',
    ...useThemeProps('ModalBody'),
    ...props,
  })
}
Modal.Body.displayName = 'ModalBody'

// --------------------------------------------------------
// Footer

Modal.Footer = createStaticComponent<ModalFooterProps>('ModalFooter')

// --------------------------------------------------------
// Utils

/**
 * Utility asserts ctx presence for safe access
 */
function assertContext(ctx: null | ModalCtx): asserts ctx is ModalCtx {
  if (!ctx) throw new Error('Modal context cannot be used outside of Modal component')
}
