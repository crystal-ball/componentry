/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Close from './Close'

storiesOf('Close', module).add('<Close />', () => <Close onClick={action('close')} />)
