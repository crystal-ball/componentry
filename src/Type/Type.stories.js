import React from 'react'
import { storiesOf } from '@storybook/react'

import { Anchor, Header, Text } from './Type'

storiesOf('Core|Typography')
  .add('<Anchor />', () => <Anchor href='#'>Componentry anchor</Anchor>)
  .add('<Header />', () => <Header>Componentry header</Header>)
  .add('<Text />', () => <Text>Componentry text</Text>)
