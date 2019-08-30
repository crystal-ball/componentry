/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Block from './Block'

storiesOf('Block', module).add('<Block />', () => (
  <div>
    <Block inline={boolean('Inline', false)}>Block content</Block>
    <Block inline={boolean('Inline', false)}>Block content</Block>
  </div>
))
