/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Drawer from './Drawer'

storiesOf('Drawer', module)
  .add('<Drawer />', () => (
    <Drawer>
      <Drawer.Trigger>Toggle drawer</Drawer.Trigger>
      <Drawer.Content>Drawer content</Drawer.Content>
    </Drawer>
  ))
  .add('Collection', () => (
    <div>
      <h2>Drawer</h2>
      <div>
        <Drawer>
          <Drawer.Trigger>Toggle drawer</Drawer.Trigger>
          <Drawer.Content>Drawer content</Drawer.Content>
        </Drawer>
      </div>

      <h2>Multiple drawers</h2>
      <div>
        <Drawer>
          <Drawer.Trigger activeId='one'>Toggle drawer</Drawer.Trigger>
          <Drawer.Content activeId='one'>Drawer content</Drawer.Content>

          <Drawer.Trigger activeId='two'>Toggle drawer</Drawer.Trigger>
          <Drawer.Content activeId='two'>Drawer content</Drawer.Content>

          <Drawer.Trigger activeId='three'>Toggle drawer</Drawer.Trigger>
          <Drawer.Content activeId='three'>Drawer content</Drawer.Content>
        </Drawer>
      </div>
    </div>
  ))
