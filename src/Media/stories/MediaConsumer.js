import React from 'react'
import { useMedia } from '../Media'

export default function MediaConsumer() {
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
