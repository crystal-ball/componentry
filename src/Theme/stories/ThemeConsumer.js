import React from 'react'
import { useTheme } from '../Theme'

export default function ThemeConsumer() {
  const theme = useTheme()

  console.log(theme)

  return (
    <div>
      <h3>Theme values:</h3>
      <pre>
        <code>{JSON.stringify(theme, null, 2)}</code>
      </pre>
    </div>
  )
}
