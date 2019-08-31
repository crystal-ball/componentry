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
          <LinkTo kind='Active' story='Active'>
            Active
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Alert' story='Alert'>
            Alert
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Anchor' story='Anchor'>
            Anchor
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Block' story='Block'>
            Block
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Button' story='Button'>
            Button
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Card' story='Card'>
            Card
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Close' story='Close'>
            Close
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Drawer' story='Drawer'>
            Drawer
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Dropdown' story='Dropdown'>
            Dropdown
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Flex' story='Flex'>
            Flex
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Header' story='Header'>
            Header
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Icon' story='Icon'>
            Icon
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Input' story='Input'>
            Input
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='ListGroup' story='ListGroup'>
            ListGroup
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Media' story='Media'>
            Media Provider
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Text' story='Text'>
            Text
          </LinkTo>
        </li>
        <li>
          <LinkTo kind='Theme' story='Theme'>
            Theme Provider
          </LinkTo>
        </li>
      </ul>
    </Block>
  </Block>
)

storiesOf('Overview|Welcome', module).add('Componentry Storybook', () => <Welcome />)
