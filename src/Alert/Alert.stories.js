import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Alert from './Alert'
import Active from '../Active/Active'
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

storiesOf('Alert', module)
  .add('<Alert />', () => (
    <Active defaultActive>
      <Alert
        color={select('Color', colors, 'primary')}
        outline={boolean('Outline', false)}
        dismissible={boolean('Dismissible', true)}
      >
        <h4 className="alert-heading">Well done!</h4>
        <p className="mb-0">You successfully read this important alert message.</p>
        <hr className="hr" />
        <Anchor href="#" className="alert-link">
          Go home
        </Anchor>
      </Alert>
    </Active>
  ))
  .add('Collection', () => (
    <>
      <div>
        <h2 className="storybook-section-header">Colors</h2>
        <div className="d-flex flex-column">
          {Object.keys(colors).map(color => (
            <Active defaultActive key={color}>
              <Alert color={colors[color]} dismissible>
                {color} - Provide contextual info with an alert.
              </Alert>
            </Active>
          ))}
        </div>

        <h2 className="storybook-section-header">Outline</h2>
        <div className="d-flex flex-column">
          {Object.keys(colors).map(color => (
            <Active defaultActive key={color}>
              <Alert color={colors[color]} outline dismissible>
                {color} - Provide contextual info with an alert.
              </Alert>
            </Active>
          ))}
        </div>

        <h2 className="storybook-section-header">Aria title</h2>
        <Alert
          color="primary"
          ariaTitle="Alert provides context on setting the aria title"
        >
          Pass an <code>ariaTitle</code> to provide more context.
        </Alert>
      </div>
    </>
  ))
