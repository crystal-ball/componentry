import React from 'react'
import { string } from 'prop-types'

export default function Close({ title, ...other }) {
  return (
    <svg
      role="img"
      className="icon font close"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...other}
    >
      <title>
        {title || 'Close Button'}
      </title>
      <path d="M19 4q.43 0 .715.285T20 5q0 .422-.289.711L13.414 12l6.297 6.289Q20 18.578 20 19q0 .43-.285.715T19 20q-.422 0-.711-.289L12 13.414l-6.289 6.297Q5.422 20 5 20q-.43 0-.715-.285T4 19q0-.422.289-.711L10.586 12 4.289 5.711Q4 5.422 4 5q0-.43.285-.715T5 4q.422 0 .711.289L12 10.586l6.289-6.297Q18.578 4 19 4z" />
    </svg>
  )
}

Close.propTypes = { title: string }
Close.defaultProps = { title: '' }
