/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './Card'
import Anchor from '../Anchor/Anchor'

storiesOf('Card', module).add('<Card />', () => (
  <div className='d-flex flex-column'>
    <Card maxWidth='50%'>
      <Card.Header>Card Header</Card.Header>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <h5 className='card-subtitle'>Card subtitle</h5>
        <p className='card-text'>
          Card.Body example content. Note: If content with the <code>card-text</code>{' '}
          class is the last child of the body the margin will be set to 0 for whitespace
          consistency
        </p>

        <p className='card-text'>
          <Anchor className='card-link' href='#'>
            Card link
          </Anchor>
          <Anchor className='card-link' href='#'>
            Another link
          </Anchor>
        </p>
      </Card.Body>
      <Card.Footer>2 days ago</Card.Footer>
    </Card>

    <br />

    <Card maxWidth='50%'>
      <svg
        className='bd-placeholder-img card-img-top'
        width='100%'
        height='180'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='xMidYMid slice'
        focusable='false'
        role='img'
        aria-label='Placeholder: Image cap'
      >
        <title>Placeholder</title>
        <rect width='100%' height='100%' fill='#fef' />
        <text x='50%' y='50%' fill='#6c757d' dx='-38px' dy='8px'>
          Image cap
        </text>
      </svg>
      {/* <Card.Header>Card Header</Card.Header> */}
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <h5 className='card-subtitle'>Card subtitle</h5>
        <p className='card-text'>
          Card.Body example content. Note: If content with the <code>card-text</code>{' '}
          class is the last child of the body the margin will be set to 0 for whitespace
          consistency
        </p>

        <p className='card-text'>
          <Anchor className='card-link' href='#'>
            Card link
          </Anchor>
          <Anchor className='card-link' href='#'>
            Another link
          </Anchor>
        </p>
      </Card.Body>
    </Card>
  </div>
))
