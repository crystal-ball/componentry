// @flow
import React, { Component } from 'react'
import { object } from 'prop-types'
import * as Componentry from 'componentry'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

// Import SVG font icons used in application without an Icon component instance
import 'media/icons/close.svg'
import 'media/icons/chevron.svg'

// App Components
import registry from 'registry'
import AppNav from 'components/universal/AppNav'
import ScrollToTop from 'components/universal/ScrollToTop'

// Screens
import ComponentsScreen from '../ComponentsScreen'
import ConceptsScreen from '../ConceptsScreen'
import FourOhFourScreen from '../FourOhFourScreen'
import GettingStartedScreen from '../GettingStartedScreen'
import HomeScreen from '../HomeScreen'

// ========================================================
// Componentry Theme Customization
// ========================================================

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
const theme = {
  transitionDuration: 350,
  Button: {
    // Buttons for documentation site are primary theme color as default
    color: 'primary',
  },
}

// ========================================================
// Magic Markdown Registry Setup
// ========================================================

// Register all Componentry components for convenience
Object.keys(Componentry).forEach(component => {
  if (component === 'ThemeProvider') return // Application only component
  registry.register(Componentry[component], component)
})

// Registry React Router <Link /> for convenience
registry.register(Link, 'Link')

/**
 * Application class component:
 *
 * 1. Adds the Magic Markdown registry to React's context
 * 2. Creates the application React Router router instance
 * 3. Sets up application level routing and components
 */
export default class App extends Component<{}> {
  static childContextTypes = { REGISTRY: object }

  getChildContext() {
    return { REGISTRY: registry.getRegistry() }
  }

  render() {
    return (
      <DocumentTitle title="Componentry">
        <BrowserRouter basename={process.env.PUBLIC_PATH}>
          <Componentry.ThemeProvider theme={theme}>
            {/* Restores scroll position to page top on route change */}
            <ScrollToTop />

            {/* Show app navigation on every page but home page */}
            <Route path="/:path" component={AppNav} />

            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/getting-started" component={GettingStartedScreen} />
              <Route path="/concepts/:concept?" component={ConceptsScreen} />
              <Route path="/components/:component?" component={ComponentsScreen} />
              <Route component={FourOhFourScreen} />
            </Switch>
          </Componentry.ThemeProvider>
        </BrowserRouter>
      </DocumentTitle>
    )
  }
}