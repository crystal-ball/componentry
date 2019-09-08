/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Tab from './Tab'

storiesOf('Tab', module).add('<Tab />', () => (
  <Tab defaultActive='one' className='w-100'>
    <Tab.Nav fill={boolean('fill', false)} justify={boolean('justify', false)}>
      <Tab.Trigger activeId='one'>Item 1</Tab.Trigger>
      <Tab.Trigger activeId='two'>Tab with long name</Tab.Trigger>
      <Tab.Trigger activeId='three'>Item 3</Tab.Trigger>
      <Tab.Trigger activeId='four' disabled>
        Disabled
      </Tab.Trigger>
    </Tab.Nav>
    <Tab.ContentContainer>
      <Tab.Content activeId='one'>Tab 1</Tab.Content>
      <Tab.Content activeId='two'>Tab 2</Tab.Content>
      <Tab.Content activeId='three'>Tab 3</Tab.Content>
      <Tab.Content activeId='four'>This tab has been disabled</Tab.Content>
    </Tab.ContentContainer>
  </Tab>
))
