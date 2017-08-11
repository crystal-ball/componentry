import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '../lib';

import Home from './Home';
import Installation from './Installation';
import Components from './Components';
import FourOhFour from './FourOhFour';

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
// TODO: Docs
const theme = {
  visibilityTransitionLength: 350,
  svgDefinitionsFilePath: '/assets/icons.svg'
};

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/getting-started" component={Installation} />
            <Route path="/components/:component?" component={Components} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}
