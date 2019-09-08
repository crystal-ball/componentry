/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import { Header } from './index'

const Welcome = () => (
  <div className='d-flex min-100vh'>
    <Header textAlign='center' mt={150}>
      It&apos;s hacking time{' '}
      <span role='img' aria-label='wave'>
        👾
      </span>
    </Header>
  </div>
)

storiesOf('Componentry', module).add('Welcome', () => <Welcome />)
