/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import { Block } from '../index'
import './vertical-align-stories.scss'

const alignments = [
  'top',
  'middle',
  'bottom',
  'baseline',
  'text-top',
  'text-bottom',
  'super',
  'sub',
]

const Icon = ({ className }) => (
  <svg viewBox='0 0 24 24' id='award' className={className} width={18} height={18}>
    <title>award</title>
    <path
      fill='#007bff'
      d='M16.863 14.35c1.906-1.463 3.138-3.769 3.138-6.35 0-4.413-3.588-8-8-8s-8 3.588-8 8c0 2.588 1.231 4.887 3.138 6.35l-1.131 8.519c-0.050 0.381 0.119 0.756 0.444 0.969 0.319 0.213 0.731 0.219 1.062 0.019l4.488-2.694 4.488 2.694c0.156 0.094 0.337 0.144 0.513 0.144 0.194 0 0.381-0.056 0.55-0.162 0.319-0.213 0.494-0.588 0.444-0.969l-1.131-8.519zM6 8c0-3.306 2.694-6 6-6s6 2.694 6 6c0 2.088-1.069 3.925-2.694 5.006-0.044 0.025-0.081 0.050-0.119 0.075-0.925 0.581-2.019 0.919-3.188 0.919-3.306 0-6-2.694-6-6zM12.513 19.144c-0.319-0.188-0.713-0.188-1.031 0l-3.219 1.931 0.75-5.65c0.925 0.375 1.931 0.575 2.988 0.575s2.063-0.206 2.988-0.575l0.75 5.656-3.225-1.938z'
    />
  </svg>
)

storiesOf('Design System', module).add('Vertical align', () => (
  <Block className='align-self-start'>
    <h2>Vertical align</h2>
    <Block className='border-300 border-top border-left border-right rounded p-3'>
      <h2 className='vertical-align-guides'>
        {alignments.map(alignment => (
          <>
            {alignment}:
            <Icon className={`align-${alignment}`} />
          </>
        ))}
      </h2>
    </Block>
  </Block>
))