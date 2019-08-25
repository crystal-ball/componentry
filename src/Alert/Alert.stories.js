/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'

import Alert from './Alert'
import Active from '../Active/ActiveComponent'
import { Anchor } from '../Type/Type'

const colors = {
  Primary: 'primary',
  Secondary: 'secondary',
  Info: 'info',
  Light: 'light',
  Dark: 'dark',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
}

storiesOf('Active|Alert', module)
  .add('<Alert />', () => (
    <Active defaultActive>
      <Alert
        color={select('Color', colors, 'primary')}
        outline={boolean('Outline', false)}
        dismissible={boolean('Dismissible', true)}
      >
        <h4 className='alert-heading'>Well done!</h4>
        <p className='mb-0'>You successfully read this important alert message.</p>
        <hr className='hr' />
        <Anchor href='#' className='alert-link'>
          Go home
        </Anchor>
      </Alert>
    </Active>
  ))
  .add('Collection', () => (
    <>
      <div>
        <h2 className='storybook-section-header'>Colors</h2>
        <div className='d-flex flex-column'>
          {Object.keys(colors).map(color => (
            <Alert color={colors[color]} key={color}>
              <h4 className='alert-heading'>Well done!</h4>
              <p className='mb-0'>You successfully read this important alert message.</p>
              <hr className='hr' />
              <Anchor href='#' className='alert-link'>
                Go home
              </Anchor>
              .
            </Alert>
          ))}
        </div>

        <h2 className='storybook-section-header'>Outline</h2>
        <div className='d-flex flex-column'>
          {Object.keys(colors).map(color => (
            <Alert color={colors[color]} outline key={color}>
              <h4 className='alert-heading'>Well done!</h4>
              <p className='mb-0'>You successfully read this important alert message.</p>
              <hr className='hr' />
              <Anchor href='#' className='alert-link'>
                Go home
              </Anchor>
              .
            </Alert>
          ))}
        </div>

        <h2 className='storybook-section-header'>Dismissible</h2>
        <Active defaultActive>
          <Alert color='primary' dismissible>
            <h4 className='alert-heading'>Well done!</h4>
            <p className='mb-0'>You successfully read this important alert message.</p>
            <hr className='hr' />
            <Anchor href='#' className='alert-link'>
              Go home
            </Anchor>
            .
          </Alert>
        </Active>

        <h2 className='storybook-section-header'>Aria title</h2>
        <Alert
          color='primary'
          ariaTitle='Alert provides context on setting the aria title'
        >
          Pass an <code>ariaTitle</code> to provide more context.
        </Alert>
      </div>
    </>
  ))
