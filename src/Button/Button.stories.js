/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import Block from '../Block/Block'

const colors = {
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  light: 'light',
  dark: 'dark',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  None: null,
}

const sizes = {
  sm: 'sm',
  lg: 'lg',
  None: null,
}

storiesOf('Button', module)
  .add('<Button />', () => (
    <Button
      color={select('Color', colors, 'primary')}
      outline={select('Outline', colors, null)}
      block={boolean('Block', false)}
      size={select('Size', sizes, null)}
      disabled={boolean('Disabled', false)}
      anchor={boolean('Anchor', false)}
    >
      Componentry button
    </Button>
  ))
  .add('Collection', () => (
    <Block>
      <h2 className='storybook-section-header'>Colors</h2>
      <div className='btn-container-x'>
        {Object.keys(colors).map(
          color =>
            colors[color] && (
              <Button color={colors[color]} onClick={action('button-click')} key={color}>
                {color}
              </Button>
            ),
        )}
      </div>

      <h2 className='storybook-section-header'>Outline</h2>
      <div className='btn-container-x'>
        {Object.keys(colors).map(
          color =>
            colors[color] && (
              <Button
                outline={colors[color]}
                onClick={action('button-click')}
                key={color}
              >
                {color}
              </Button>
            ),
        )}
      </div>

      <h2 className='storybook-section-header'>Sizes</h2>
      <div className='btn-container-y'>
        <Button color='primary' size='lg' onClick={action('button-click')}>
          Large
        </Button>
        <div className='mt-1' />
        <Button color='primary' size='sm' onClick={action('button-click')}>
          Small
        </Button>
      </div>

      <h2 className='storybook-section-header'>Block</h2>
      <Button color='primary' block onClick={action('button-click')}>
        Block
      </Button>

      <h2 className='storybook-section-header'>Disabled</h2>
      <Button color='primary' disabled onClick={action('button-click')}>
        Disabled
      </Button>

      <h2 className='storybook-section-header'>Anchor variant</h2>
      {Object.keys(colors).map(
        color =>
          colors[color] && (
            <p key={color}>
              <Button anchor color={colors[color]} onClick={action('button-click')}>
                Anchor
              </Button>
            </p>
          ),
      )}
    </Block>
  ))
