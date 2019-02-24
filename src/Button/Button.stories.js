import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module).add('<Button />', () => (
  <Button color="primary">Componentry button</Button>
))
