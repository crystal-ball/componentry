/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Media, { useMedia } from './Media'

const MediaConsumer = () => {
  const media = useMedia()

  return (
    <div>
      <h3>Media values:</h3>
      <div>Small: {String(media.sm)}</div>
      <div>Medium: {String(media.md)}</div>
      <div>Large: {String(media.lg)}</div>
      <pre>
        <code>{JSON.stringify(media, null, 2)}</code>
      </pre>
    </div>
  )
}

storiesOf('Providers|Media', module).add('<Media />', () => (
  <Media>
    <div>
      <MediaConsumer />
    </div>
  </Media>
))
