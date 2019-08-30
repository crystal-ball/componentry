/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Active from './ActiveComponent'
import Block from '../Block/Block'

storiesOf('Active', module).add('<Active />', () => (
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

    <h2 className='storybook-section-header'>Deactivate on external clicks</h2>
    <Active clickEvents Trigger='Toggle' Content='Active component content' />

    <h2 className='storybook-section-header'>Deactivate on esc</h2>
    <Active escEvents Trigger='Toggle' Content='Active component content' />

    <h2 className='storybook-section-header'>Handle mouse events</h2>
    <Active mouseEvents Trigger='Toggle' Content='Active component content' />

    <h2 className='storybook-section-header'>Shorthand subcomponents</h2>
    <Active Trigger='Toggle' Content='Active component content' />

    <h2 className='storybook-section-header'>Size and direction</h2>
    <Active size='sm' direction='up'>
      <Active.Trigger>Toggle</Active.Trigger>
      <Active.Content>Active component content</Active.Content>
    </Active>

    <h2 className='storybook-section-header'>FaCC pattern</h2>
    <Active>
      {({ active, activate, deactivate }) => (
        <>
          <div>{String(active)}</div>
          <button type='button' onClick={activate}>
            activate
          </button>
          <button type='button' onClick={deactivate}>
            deactivate
          </button>
        </>
      )}
    </Active>
  </Block>
))
