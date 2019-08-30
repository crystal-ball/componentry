/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Anchor from './Anchor'
import Block from '../Block/Block'

const colors = {
  Primary: 'primary',
  Secondary: 'secondary',
  Info: 'info',
  Light: 'light',
  Dark: 'dark',
  Success: 'success',
  Warning: 'warning',
  Danger: 'danger',
}

storiesOf('Anchor', module)
  .add('<Anchor />', () => <Anchor href='#'>Componentry anchor</Anchor>)
  .add('Collection', () => (
    <Block>
      <h2 className='storybook-section-header'>Anchor</h2>
      {Object.keys(colors).map(color => (
        <p key={color}>
          <Anchor color={colors[color]} href='#'>
            {color}
          </Anchor>
        </p>
      ))}

      <h2 className='storybook-section-header'>Disabled</h2>
      <div className='btn-container-x'>
        <Anchor disabled href='#'>
          Disabled
        </Anchor>
      </div>

      <h2 className='storybook-section-header'>Button variant anchor</h2>
      <div className='btn-container-x'>
        {Object.keys(colors).map(color => (
          <Anchor button color={colors[color]} href='#' key={color}>
            {color}
          </Anchor>
        ))}
      </div>

      <h2 className='storybook-section-header'>Outline button variant anchor</h2>
      <div className='btn-container-x'>
        {Object.keys(colors).map(color => (
          <Anchor button outline={colors[color]} href='#' key={color}>
            {color}
          </Anchor>
        ))}
      </div>
    </Block>
  ))
