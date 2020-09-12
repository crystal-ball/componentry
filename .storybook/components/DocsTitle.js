import React from 'react'
import { Text } from '../../src'

export function DocsTitle({ title, experimental }) {
  return (
    <div>
      <Text variant='heading-1'>{title}</Text>
      <div>
        <small>
          Status:{' '}
          <Text inline fontColor={experimental ? 'warning' : 'success'}>
            {experimental ? 'Experimental' : 'Stable'}
          </Text>
        </small>
      </div>
      <hr />
    </div>
  )
}
