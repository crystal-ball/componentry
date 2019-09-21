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
      <h4 className='dropdown-heading'>Available actions</h4>
      <Dropdown.Item>Interactive Item 1</Dropdown.Item>
      <Dropdown.Item>Interactive Item 2</Dropdown.Item>
      <Dropdown.Item href='https://github.com/crystal-ball/componentry'>
        Componentry
      </Dropdown.Item>
      <Dropdown.Item onClick={action('item click')} disabled>
        Disabled Item
      </Dropdown.Item>
      <div className='dropdown-divider' />
      <span className='dropdown-item-text'>Dropdown item text is not interactive</span>
    </Dropdown.Content>
  </Dropdown>
))
