// @flow
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import SVG font icons used in application without a component instance
import 'media/icons/close.svg'
import 'media/icons/chevron.svg'

import AppNav from 'components/universal/navigation/AppNav'
import ScrollToTop from 'components/universal/ScrollToTop'
import { ThemeProvider } from 'componentry-lib'

// Screens
import HomeScreen from '../HomeScreen'
import GettingStartedScreen from '../GettingStartedScreen'
import ConceptsScreen from '../ConceptsScreen'
import ComponentsScreen from '../ComponentsScreen'
import FourOhFourScreen from '../FourOhFourScreen'

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
// TODO: Docs
const theme = {
  transitionDuration: 350,
  Button: {
    // Buttons for documentation site are primary theme color as default
    color: 'primary',
  },
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
            <Route path="/" exact component={HomeScreen} />
            <Route path="/getting-started" component={GettingStartedScreen} />
            <Route path="/concepts/:concept?" component={ConceptsScreen} />
            <Route path="/components/:component?" component={ComponentsScreen} />
            <Route component={FourOhFourScreen} />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)
