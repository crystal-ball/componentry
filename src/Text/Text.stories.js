/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Text from './Text'

storiesOf('Text', module).add('<Text />', () => <Text>Componentry text</Text>)
