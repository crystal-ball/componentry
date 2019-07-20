import React from 'react'
import { storiesOf } from '@storybook/react'
import LinkTo from '@storybook/addon-links/react'
import { Block, Header } from '../src'

const Welcome = () => (
  <Block>
    <Header textAlign="center" mt={50}>
      It&apos;s hacking time{' '}
      <span role="img" aria-label="wave">
        👾
      </span>
    </Header>
    <Block>
      <ul>
        <li>
          <LinkTo kind="Core|Button" story="Button">
            Button
          </LinkTo>
        </li>
      </ul>
    </Block>
  </Block>
)

storiesOf('Overview|Welcome', module).add('Componentry Storybook', () => <Welcome />)
