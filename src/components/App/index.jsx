// @flow
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import SVG font icons used in application without a component instance
import 'media/icons/close.svg'
import 'media/icons/chevron.svg'

import AppNav from 'components/universal/Navigations/AppNav'
import ScrollToTop from 'components/universal/ScrollToTop'
import Home from '../Home'
import { ThemeProvider } from '../../../lib'
import Installation from '../Installation'
import Concepts from '../Concepts/Concepts'
import Components from '../Components'
import FourOhFour from '../FourOhFour'

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
// TODO: Docs
const theme = {
  defaultButtonColor: 'primary',
  transitionDuration: 350
}

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_PATH}>
    <ThemeProvider theme={theme}>
      {/* Restores scroll position to page top on route change */}
      <ScrollToTop />
      <div>
        {/* Show app navigation on every page but home page */}
        <Route path="/:path" component={AppNav} />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/getting-started" component={Installation} />
            <Route path="/concepts/:concept?" component={Concepts} />
            <Route path="/components/:component?" component={Components} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)
