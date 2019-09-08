/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

import Nav from './Nav'

storiesOf('Nav', module).add('<Nav />', () => (
  <div className='w-50'>
    <Nav
      fill={boolean('fill', false)}
      justify={boolean('justify', false)}
      pills={boolean('pills', false)}
      vertical={boolean('vertical', false)}
    >
      <Nav.Item href='#' active>
        Active
      </Nav.Item>
      <Nav.Item href='#'>React</Nav.Item>
      <Nav.Item href='#'>Redux</Nav.Item>
      <Nav.Item href='#' disabled>
        Styles
      </Nav.Item>
    </Nav>
  </div>
))
