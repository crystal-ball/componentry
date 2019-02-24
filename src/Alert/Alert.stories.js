import React from 'react'
import { storiesOf } from '@storybook/react'

import Alert from './Alert'

storiesOf('Alert', module).add('<Alert />', () => <Alert>An alert!</Alert>)
