/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Dropdown from './Dropdown'

const directions = ['top', 'right', 'bottom', 'left', 'overlay']

storiesOf('|Dropdown', module).add('<Dropdown />', () => (
  <Dropdown
    onActivate={action('activating')}
    onDeactivate={action('deactivating')}
    direction={select('direction', directions, 'bottom')}
  >
    <Dropdown.Trigger>Trigger</Dropdown.Trigger>
    <Dropdown.Content>
      <Dropdown.Item value='hecka'>Item 1</Dropdown.Item>
      <Dropdown.Item value='rad'>Item 2</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown>
))
