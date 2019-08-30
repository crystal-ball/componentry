/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ListGroup from './ListGroup'
import Block from '../Block/Block'

const colors = {
  primary: 'Primary',
  secondary: 'Secondary',
  info: 'Info',
  light: 'Light',
  dark: 'Dark',
  success: 'Success',
  warning: 'Warning',
  danger: 'Danger',
}

storiesOf('Display|ListGroup', module)
  .add('<ListGroup />', () => (
    <ListGroup>
      <ListGroup.Item>Radical React</ListGroup.Item>
      <ListGroup.Item>Component Library</ListGroup.Item>
      <ListGroup.Item>Design System</ListGroup.Item>
    </ListGroup>
  ))
  .add('Collection', () => (
    <Block>
      <h2 className='storybook-section-header'>UL list</h2>
      <ListGroup>
        <ListGroup.Item>Radical React</ListGroup.Item>
        <ListGroup.Item>Component Library</ListGroup.Item>
        <ListGroup.Item>Design System</ListGroup.Item>
      </ListGroup>

      <h2 className='storybook-section-header'>Anchor list</h2>
      <ListGroup>
        <ListGroup.Item href='#'>Radical React</ListGroup.Item>
        <ListGroup.Item href='#'>Component Library</ListGroup.Item>
        <ListGroup.Item href='#'>Design System</ListGroup.Item>
      </ListGroup>

      <h2 className='storybook-section-header'>Button list</h2>
      <ListGroup>
        <ListGroup.Item onClick={action('item-click')}>Radical React</ListGroup.Item>
        <ListGroup.Item onClick={action('item-click')}>Component Library</ListGroup.Item>
        <ListGroup.Item onClick={action('item-click')}>Design System</ListGroup.Item>
      </ListGroup>

      <h2 className='storybook-section-header'>List items</h2>
      <ListGroup.Item active>Active list item</ListGroup.Item>
      <ListGroup.Item disabled>Disabled list item</ListGroup.Item>
      {Object.keys(colors).map(color => (
        <ListGroup.Item color={color} key={color}>
          {colors[color]} themed list item
        </ListGroup.Item>
      ))}
    </Block>
  ))
