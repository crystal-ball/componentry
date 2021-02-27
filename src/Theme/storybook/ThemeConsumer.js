import React from 'react'
import { useTheme } from '../Theme'

export function ThemeConsumer() {
  const theme = useTheme()

  return (
    <div>
      <h3>Theme values:</h3>
      <pre>
        <code>{JSON.stringify(theme, null, 2)}</code>
      </pre>
    </div>
  )
}
