/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'

import Flex from './Flex'

const directions = {
  column: 'column',
  'column-reverse': 'column-reverse',
  row: 'row',
  'row-reverse': 'row-reverse',
  None: null,
}

const wrap = {
  wrap: 'wrap',
  'wrap-reverse': 'wrap-reverse',
  nowrap: 'nowrap',
  None: null,
}

const align = {
  start: 'start',
  end: 'end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
  None: null,
}

const justify = {
  start: 'start',
  end: 'end',
  center: 'center',
  around: 'around',
  between: 'between',
  evenly: 'evenly',
  None: null,
}

storiesOf('Flex', module).add('<Flex />', () => (
  <div className='w-100 min-100vh' style={{ height: 1 }}>
    <Flex
      className='w-100 h-100'
      inline={boolean('Inline', false)}
      direction={select('Direction', directions, null)}
      wrap={select('Wrap', wrap, null)}
      align={select('Align', align, null)}
      justify={select('Justify', justify, null)}
    >
      {[1, 2, 3].map(key => (
        <div className='border' key={key}>
          Flex content #{key}
        </div>
      ))}
    </Flex>
  </div>
))
