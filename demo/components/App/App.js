import React, { Component } from 'react'
import { shape } from 'prop-types'
import * as Componentry from 'componentry'
import DocumentTitle from 'react-document-title'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// App Components
import 'lib/import-icons'
import registry from 'registry'
import AppNav from 'components/universal/AppNav'
import ScrollToTop from 'components/universal/ScrollToTop'
import routesMap from 'lib/routes-map'
import AnchorLink from './AnchorLink'

// Screens
import ComponentsScreen from '../ComponentsScreen'
import ConceptsScreen from '../ConceptsScreen'
import FourOhFourScreen from '../FourOhFourScreen'
import SetupScreen from '../SetupScreen'
import HomeScreen from '../HomeScreen/HomeScreen'
import TestScreen from '../TestScreen/TestScreen'

// ========================================================
// Componentry Theme Customization
// ========================================================

const { Icon } = Componentry

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
const theme = {
  transitionDuration: 350,
  Anchor: {
    as: AnchorLink,
  },
  Alert: {
    outline: true,
  },
  Button: {
    // Buttons for documentation site are primary theme color as default
    color: 'primary',
  },
  ModalHeader: {
    // Include a Close component in all modal headers by default
    close: true,
  },
  DropdownTrigger: {
    // Include the chevron icon decoration by default in all dropdowns
    decoration: <Icon id="chevron" className="ml-1" />,
  },
}

const styledTheme = {
  border: {
    color: '#ced4da',
  },
  spacers: {
    4: '2.25rem',
    5: '4.25rem',
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

const { setup, concepts, components } = routesMap

/**
 * Application class component:
 *
 * 1. Adds the Magic Markdown registry to React's context
 * 2. Creates the application React Router router instance
 * 3. Sets up application level routing and components
 */
class App extends Component<{}> {
  static childContextTypes = { REGISTRY: shape({}) }

  getChildContext() {
    return { REGISTRY: registry.getRegistry() }
  }

  render() {
    return (
      <DocumentTitle title="Componentry">
        <BrowserRouter basename={process.env.PUBLIC_PATH}>
          <ThemeProvider theme={styledTheme}>
            <Componentry.ThemeProvider.Provider value={theme}>
              {/* Restores scroll position to page top on route change */}
              <ScrollToTop />

              {/* Show app navigation on every page but home page */}
              <Route path="/:path" component={AppNav} />

              {/* Application level routing */}
              <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Route path={setup.pathname} component={SetupScreen} />
                <Route
                  path={`${concepts.pathname}/:concept?`}
                  component={ConceptsScreen}
                />
                <Route
                  path={`${components.pathname}/:component?`}
                  component={ComponentsScreen}
                />

                {/* Used for testing components in a normal JSX env */}
                <Route path="/test" component={TestScreen} />
                <Route component={FourOhFourScreen} />
              </Switch>
            </Componentry.ThemeProvider.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </DocumentTitle>
    )
  }
}

export default App
