import React from 'react'
import { storiesOf } from '@storybook/react'

import { Anchor, Header, Text } from './Type'

storiesOf('Typography', module).add('<Header />', () => (
  <Header>Componentry header</Header>
))
