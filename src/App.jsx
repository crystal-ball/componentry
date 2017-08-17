import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '../lib';

import Home from './Home';
import Installation from './Installation';
import Components from './Components';
import FourOhFour from './FourOhFour';

const urlBase = process.env.NODE_ENV === 'production' ? '/componentry/' : '/';

// Componentry configuration defaults can be updated using the ThemeProvider
// component and passing a theme configuration object
// TODO: Docs
const theme = {
  visibilityTransitionLength: 350,
  svgDefinitionsFilePath: `${urlBase}assets/icons.svg`
};

export default function App() {
  return (
    <BrowserRouter basename={urlBase}>
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
    </BrowserRouter>
  );
}
