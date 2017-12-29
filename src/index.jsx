import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './vendor/prism' // Prism uses a global on the window

import App from './components/App'
import './styles.scss'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

/* global module */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
