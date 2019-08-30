/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from './Header'

storiesOf('Header', module).add('<Header />', () => <Header>Componentry header</Header>)
