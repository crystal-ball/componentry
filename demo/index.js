import React from 'react'
import { render } from 'react-dom'
import svgSymbolSpriteLoader from 'svg-symbol-sprite-loader'

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
svgSymbolSpriteLoader()

render(<App />, document.getElementById('root'))
