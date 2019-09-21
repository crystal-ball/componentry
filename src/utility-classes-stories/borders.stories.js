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

storiesOf('Design System', module).add('Borders', () => (
  <Block className='align-self-start'>
    <h2>Borders</h2>

    <h4>Theme colors</h4>
    <Flex justify='center'>
      {colors.map(color => (
        <div key={color}>
          <Block width={100} height={15} className={`border-${color} mx-2`} />
          <small className='small ml-2'>.bg-{color}</small>
        </div>
      ))}
    </Flex>

    <h4>Grayscale</h4>
    <Flex justify='center'>
      {grayscale.map(gray => (
        <div key={gray}>
          <Block width={75} height={10} className={`border-${gray} mx-2`} />
          <small className='small ml-2'>.bg-{gray}</small>
        </div>
      ))}
    </Flex>

    <h2>Border radius</h2>
    <Flex justify='center'>
      {[
        'rounded',
        'rounded-top',
        'rounded-right',
        'rounded-bottom',
        'rounded-left',
        'rounded-circle',
      ].map(className => (
        <div key={className}>
          <Block width={100} height={100} className={`border ${className} mx-2`} />
          <small className='small ml-2'>.${className}</small>
        </div>
      ))}
    </Flex>

    <p>Border radius Rounded</p>
  </Block>
))
