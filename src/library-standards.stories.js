/* global module */
/* eslint-disable react/no-multi-comp */

import React from 'react'
import { storiesOf } from '@storybook/react'

import { Block, Button, Header, Theme } from './index'

const LoadingButton = ({ children, className }) => (
  <div className={className}>{children} Loading</div>
)

const Welcome = () => (
  <Theme
    theme={{
      Button: {
        themeClassName: 'context-class',
      },
    }}
  >
    <Block>
      <Header textAlign='center' mt={50}>
        Library Standards
      </Header>
      <Block>
        <Button as={LoadingButton} color='primary'>
          Render As
        </Button>
      </Block>
      <Block>
        <Button color='primary' uppercase className='rad-example-btn'>
          ClassNames Button
        </Button>
      </Block>
    </Block>
  </Theme>
)

storiesOf('Overview|Library Standards', module).add('Componentry Storybook', () => (
  <Welcome />
))
