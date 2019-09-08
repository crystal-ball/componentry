/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Tooltip from './Tooltip'

storiesOf('Tooltip', module).add('<Tooltip />', () => (
  <Tooltip
    onActivate={action('onActivate event')}
    onActivated={action('onActivated event')}
    onDeactivate={action('onDeactivate event')}
    onDeactivated={action('onDeactivated event')}
  >
    <Tooltip.Trigger>Toggle</Tooltip.Trigger>
    <Tooltip.Content>
      Only 8% of the world’s currency is physical money, the rest only exists on
      computers.
    </Tooltip.Content>
  </Tooltip>
))
