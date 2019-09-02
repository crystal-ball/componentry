/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

import Active from '../Active/Active'
import Button from '../Button/Button'
import Modal from './Modal'

const footerContent = (
  <Modal.Footer className='btn-container-x'>
    <Active.Trigger button color='link'>
      Close
    </Active.Trigger>
    <Button color='primary'>Save Changes</Button>
  </Modal.Footer>
)

const scrollContent = (
  <>
    <Modal.Header close>
      <Modal.Title>Demo modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        I gave it a cold? I gave it a virus. A computer virus. Yes, Yes, without the oops!
        So you two dig up, dig up dinosaurs? My dad once told me, laugh and the world
        laughs with you, Cry, and I&apos;ll give you something to cry about you little
        bastard! Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates
        don’t eat the tourists.
      </p>
      <p>
        I gave it a cold? I gave it a virus. A computer virus. Hey, you know how
        I&apos;xm, like, always trying to save the planet? Here&apos;s my chance. This
        thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power
        windows. Remind me to thank John for a lovely weekend.
      </p>
      <p>
        Forget the fat lady! You&apos;rre obsessed with the fat lady! Drive us out of
        here! They&apos;re using our own satellites against us. And the clock is ticking.
        Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat
        the tourists. Eventually, you do plan to have dinosaurs on your dinosaur tour,
        right?
      </p>
      <p>
        Did he just throw my cat out of the window? I gave it a cold? I gave it a virus. A
        computer virus. We gotta burn the rain forest, dump toxic waste, pollute the air,
        and rip up the OZONE! &apos;rCause maybe if we screw up this planet enough, they
        won&apos;t want it anymore!
      </p>
      <p>
        Must go faster. I gave it a cold? I gave it a virus. A computer virus. God help
        us, we&apos;re in the hands of engineers. I gave it a cold? I gave it a virus. A
        computer virus. Eventually, you do plan to have dinosaurs on your dinosaur tour,
        right? My dad once told me, laugh and the world laughs with you, Cry, and
        I&apos;ll give you something to cry about you little bastard!
      </p>
    </Modal.Body>
  </>
)

storiesOf('Modal', module)
  .add('<Modal />', () => (
    <Active>
      <>
        <Active.Trigger>Open Modal</Active.Trigger>
        <Modal size={select('Size', ['sm', 'lg', null], null)}>
          <Modal.Header close>
            <Modal.Title>Demo modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              This is an uncontrolled modal that will automatically manage its active
              state using the parent Active component.
            </p>
          </Modal.Body>
          <Modal.Footer className='btn-container-x'>
            <Active.Trigger button color='link'>
              Close
            </Active.Trigger>
            <Button color='primary'>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    </Active>
  ))
  .add('Collection', () => (
    <div className='w-50'>
      <h2>Screen top aligned modal</h2>
      <Active>
        <>
          <Active.Trigger>Open Modal</Active.Trigger>
          <Modal>
            <Modal.Body>
              <p className='mb-0'>
                This is an uncontrolled modal that will automatically manage its active
                state using the parent Active component.
              </p>
            </Modal.Body>
          </Modal>
        </>
      </Active>

      <h2>Center aligned modal</h2>
      <Active>
        <>
          <Active.Trigger>Open Modal</Active.Trigger>
          <Modal align='center'>
            <Modal.Body>
              <p className='mb-0'>This modal will be centered in the screen</p>
            </Modal.Body>
          </Modal>
        </>
      </Active>

      <h2>Scrolling modal</h2>
      <div className='d-flex w-100'>
        <Active>
          <>
            <div className='w-33'>
              <Active.Trigger>Open scroll-body modal</Active.Trigger>
            </div>
            <Modal scroll='overlay'>
              {scrollContent}
              {footerContent}
            </Modal>
          </>
        </Active>
        <Active>
          <>
            <div className='w-33'>
              <Active.Trigger>Open modal-scroll modal</Active.Trigger>
            </div>
            <Modal scroll='container'>
              {scrollContent}
              {footerContent}
            </Modal>
          </>
        </Active>
        <Active>
          <>
            <div className='w-33'>
              <Active.Trigger>Open modal-scroll modal</Active.Trigger>
            </div>
            <Modal scroll='body'>
              {scrollContent}
              {footerContent}
            </Modal>
          </>
        </Active>
      </div>
    </div>
  ))
