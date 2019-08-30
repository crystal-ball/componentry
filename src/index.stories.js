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
        <li>Providers</li>
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

        <li>Layout components</li>
        <li>
          <LinkTo kind='Layout|Block' story='Block'>
            Block
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Layout|Flex' story='Flex'>
            Flex
          </LinkTo>
        </li>

        <li>Core components</li>
        <li>
          <LinkTo kind='Core|Button' story='Button'>
            Button
          </LinkTo>
        </li>

        <li>Display components</li>
        <li>
          <LinkTo kind='Display|Card' story='Card'>
            Card
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Display|Icon' story='Icon'>
            Icon
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Display|Typography' story='Typography'>
            Typography
          </LinkTo>
        </li>

        <li>Active components</li>
        <li>
          <LinkTo kind='Active|Active' story='Active'>
            Active
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Active|Alert' story='Alert'>
            Alert
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Active|Close' story='Close'>
            Close
          </LinkTo>
        </li>
      </ul>
    </Block>
  </Block>
)

storiesOf('Overview|Welcome', module).add('Componentry Storybook', () => <Welcome />)
