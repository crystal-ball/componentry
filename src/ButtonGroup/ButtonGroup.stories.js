/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ButtonGroup from './ButtonGroup'

storiesOf('Form|ButtonGroup', module).add('<ButtonGroup />', () => (
  <ButtonGroup>
    <ButtonGroup.Option color='primary'>One</ButtonGroup.Option>
    <ButtonGroup.Option color='primary'>Two</ButtonGroup.Option>
    <ButtonGroup.Option color='primary'>Three</ButtonGroup.Option>
  </ButtonGroup>
))
