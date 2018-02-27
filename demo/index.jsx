import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import localStorageSVGLoader from 'svg-symbol-sprite-loader/src/local-storage-svg-loader'

// Vendor Libs
import './vendor/prism' // Prism uses a global on the window

// ========================================================
// Application Core Elements
// ========================================================
// ⚠️ Import application styles before application components so that base CSS
// styles are included before component styles.
import './styles/index.scss'
import App from './components/App'

// Inject SVG symbol sprite into document from local storage if exists, otherwise
// fetch, cache in local storage and inject. Manifest is inlined to index.html by
// webpack
localStorageSVGLoader(
  `${process.env.PUBLIC_PATH}${window.webpackManifest['icon-sprite.svg']}`,
)

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
