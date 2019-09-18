/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import Popover from './Popover'

storiesOf('Popover', module).add('<Popover />', () => (
  <Popover
    direction={select('direction', ['top', 'right', 'bottom', 'left'], 'right')}
    onActivate={action('onActivate event')}
    onActivated={action('onActivated event')}
    onDeactivate={action('onDeactivate event')}
    onDeactivated={action('onDeactivated event')}
  >
    <Popover.Trigger>Toggle</Popover.Trigger>
    <Popover.Content>
      <Popover.Header>Fun Fact!</Popover.Header>
      <Popover.Body>
        <span>
          The new Texas Instrument calculators have ABC keyboards because if they had
          QWERTY keyboards, they would be considered computers and wouldn’t be allowed for
          standardized test taking.
        </span>
        <hr />
        <img
          src='https://media.giphy.com/media/KVUhxQAqrAV3i/giphy.gif'
          className='img-fluid mw-100'
          alt="that's awesome"
        />
      </Popover.Body>
    </Popover.Content>
  </Popover>
))