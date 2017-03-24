import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './demo/Home';
import Nav from './demo/Nav';
import Alerts from './demo/Alerts';
import Buttons from './demo/Buttons';
import Cards from './demo/Cards';
import Icons from './demo/Icons';
import FourOhFour from './demo/FourOhFour';

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/alerts' exact component={Alerts} />
          <Route path='/buttons' exact component={Buttons} />
          <Route path='/cards' exact component={Cards} />
          <Route path='/icons' exact component={Icons} />
          <Route component={FourOhFour} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}
