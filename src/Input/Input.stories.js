/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Input from './Input'

storiesOf('Input', module).add('<Input />', () => (
  <div className='form-group'>
    <Input>
      <Input.Label>Storybook</Input.Label>
      <Input.Field />
      <Input.Description aria-hidden={!boolean('Description', true)}>
        Really important input!
      </Input.Description>
      <Input.Error aria-hidden={!boolean('Error', false)}>Oh no!</Input.Error>
    </Input>
  </div>
))
