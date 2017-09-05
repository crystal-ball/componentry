import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { AppNav } from 'shared/Navigations'
import Home from '../Home'
import { ThemeProvider } from '../../lib'
import Installation from '../Installation'
import Accessibility from '../Accessibility'
import Components from '../Components'
import FourOhFour from '../FourOhFour'
import svgIconsPath from '../media/icons.svg'

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
// TODO: Docs
const theme = {
  defaultButtonColor: 'primary',
  svgDefinitionsFilePath: svgIconsPath,
  visibilityTransitionLength: 350
}

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <ThemeProvider theme={theme}>
        <div>
          <Route path="/:path(accessibility|getting-started)" component={AppNav} />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/getting-started" component={Installation} />
              <Route path="/accessibility" component={Accessibility} />
              <Route path="/components/:component?" component={Components} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}
