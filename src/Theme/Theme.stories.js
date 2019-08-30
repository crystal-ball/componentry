/* global module */

import React from 'react'
import { storiesOf } from '@storybook/react'

import Theme, { useTheme } from './Theme'
import Button from '../Button/Button'

const ThemeConsumer = () => {
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

const storyTheme = {
  Button: {
    color: 'success',
    size: 'lg',
  },
}

storiesOf('Theme', module).add('<Theme />', () => (
  <Theme theme={storyTheme}>
    <div>
      <ThemeConsumer />
      <Button>A large successful button!</Button>
    </div>
  </Theme>
))
