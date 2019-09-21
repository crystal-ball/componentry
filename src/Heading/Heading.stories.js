/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Heading from './Heading'

storiesOf('Heading', module).add('<Heading />', () => (
  <Heading>Componentry heading</Heading>
))
