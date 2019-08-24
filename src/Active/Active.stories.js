/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Active from './Active'
import Block from '../Block/Block'

storiesOf('Core|Active', module).add('<Active />', () => (
  <Block>
    <h2 className='storybook-section-header'>Uncontrolled component</h2>
    <Active
      onActivate={action('onActivate event')}
      onActivated={action('onActivated event')}
      onDeactivate={action('onDeactivate event')}
      onDeactivated={action('onDeactivated event')}
    >
      <Active.Trigger>Toggle</Active.Trigger>
      <Active.Content>Active component content</Active.Content>
    </Active>

    <h2 className='storybook-section-header'>Controlled</h2>
    <Active activate={action('activate event')}>
      <Active.Trigger>Toggle</Active.Trigger>
      <Active.Content>Active component content</Active.Content>
    </Active>

    <h2 className='storybook-section-header'>Default active override</h2>
    <Active defaultActive Trigger='Toggle' Content='Active component content' />

    <h2 className='storybook-section-header'>Shorthand subcomponents</h2>
    <Active Trigger='Toggle' Content='Active component content' />

    <h2 className='storybook-section-header'>Size</h2>
    <Active size='sm'>
      <Active.Trigger>Toggle</Active.Trigger>
      <Active.Content>Active component content</Active.Content>
    </Active>
  </Block>
))
