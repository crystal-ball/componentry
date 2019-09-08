/* global module */
/* eslint-disable react/no-multi-comp */

import React from 'react'
import { storiesOf } from '@storybook/react'

import { Block, Button, Theme } from './index'

const LoadingButton = ({ children, loading, ...rest }) => (
  <button type='button' {...rest}>
    {loading ? 'Loading... ' : null}
    {children}
  </button>
)

const Welcome = () => (
  <Block width={800}>
    <h1 className='text-center'>Library conventions</h1>
    <p className='text-italic'>
      This story has examples of the core library component APIs and conventions.
    </p>

    <h2>Render as</h2>
    <p className='text-italic'>
      All components accept an <code>as</code> prop that will override the container
      element passed to <code>React.createElement</code>. This can be useful for
      customizing how a component is rendered or layering additional logic onto a
      component instance.
    </p>
    <Button as={LoadingButton} color='primary' loading>
      Render As
    </Button>
    <p>
      This override layers on a conditional loading display, note that passing all of the
      props to the button element in LoadingButton is required
    </p>

    <h2>Class names</h2>
    <p className='text-italic'>
      Class names for each component are layered together from the theme context, JSX
      props, component computed class names and library computed class names.
    </p>
    <Theme
      theme={{
        Button: {
          themeClassName: 'context-class',
        },
      }}
    >
      <Button className='jsx-prop-class' color='primary' uppercase>
        ClassNames Button
      </Button>
    </Theme>
  </Block>
)

storiesOf('Componentry', module).add('Library Standards', () => <Welcome />)
