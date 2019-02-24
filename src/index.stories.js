import React from 'react'
import { storiesOf } from '@storybook/react'
import { Block, Header } from '.'

const Welcome = () => (
  <Block>
    <Header textAlign="center" mt={50}>
      It&apos;s hacking time{' '}
      <span role="img" aria-label="wave">
        👾
      </span>
    </Header>
  </Block>
)

storiesOf('Welcome', module).add('to Storybook development', () => <Welcome />)
