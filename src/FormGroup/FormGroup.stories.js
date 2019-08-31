/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import FormGroup from './FormGroup'

storiesOf('FormGroup', module).add('<FormGroup />', () => (
  <FormGroup>Form stuff</FormGroup>
))
