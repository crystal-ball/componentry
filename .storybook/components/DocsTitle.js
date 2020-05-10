import React from 'react'
import { Typography } from '../../src'

export default function DocsTitle({ title, experimental }) {
  return (
    <div>
      <Typography variant='heading-1'>{title}</Typography>
      <div>
        <small>
          Status:{' '}
          <Typography inline fontColor={experimental ? 'warning' : 'success'}>
            {experimental ? 'Experimental' : 'Stable'}
          </Typography>
        </small>
      </div>
      <hr />
    </div>
  )
}
