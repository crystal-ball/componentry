/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import { Block, Flex } from '../index'

const colors = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'background',
  'foreground',
]
const grayscale = [100, 200, 300, 400, 500, 600, 700, 800, 900]

storiesOf('Design System', module).add('Backgrounds', () => (
  <Block className='align-self-start'>
    <h2>Backgrounds</h2>

    <h4>Theme colors</h4>
    <Flex justify='center'>
      {colors.map(color => (
        <div key={color}>
          <Block width={100} height={100} bg={color} className='rounded mx-2' />
          <small className='small ml-2'>.bg-{color}</small>
        </div>
      ))}
    </Flex>

    <h4>Grayscale</h4>
    <Flex justify='center'>
      {grayscale.map(gray => (
        <div key={gray}>
          <Block width={75} height={75} bg={gray} className='rounded mx-2' />
          <small className='small ml-2'>.bg-{gray}</small>
        </div>
      ))}
    </Flex>

    <h4>Transparent</h4>
    <p>
      Add <code>.bg-transparent</code> to override the background to be transparent.
    </p>
  </Block>
))
