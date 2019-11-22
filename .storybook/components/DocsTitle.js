import React from 'react'

export default function DocsTitle({ title, experimental }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <small>
          Status:{' '}
          <span className={`text-${experimental ? 'warning' : 'success'}`}>
            {experimental ? 'Experimental' : 'Stable'}
          </span>
        </small>
      </div>
      <hr />
    </div>
  )
}
