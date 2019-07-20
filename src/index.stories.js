/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import LinkTo from '@storybook/addon-links/react'

import { Block, Header } from './index'

const Welcome = () => (
  <Block>
    <Header textAlign='center' mt={50}>
      It&apos;s hacking time{' '}
      <span role='img' aria-label='wave'>
        👾
      </span>
    </Header>
    <Block>
      <ul>
        <li>
          <LinkTo kind='Core|Button' story='Button'>
            Button
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Providers|Media' story='Media'>
            Media Provider
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Providers|Theme' story='Theme'>
            Theme Provider
          </LinkTo>
        </li>
      </ul>
    </Block>
  </Block>
)

storiesOf('Overview|Welcome', module).add('Componentry Storybook', () => <Welcome />)
