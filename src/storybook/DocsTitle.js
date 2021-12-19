import React from 'react'
import { Text } from '../Text/Text'

// eslint-disable-next-line react/prop-types
export function DocsTitle({ title, experimental }) {
  return (
    <div>
      <Text variant='heading-1'>{title}</Text>
      <div>
        <small>
          Status:{' '}
          <Text fontColor={experimental ? 'warning' : 'success'} inline>
            {experimental ? 'Experimental' : 'Stable'}
          </Text>
        </small>
      </div>
      <hr />
    </div>
  )
}
