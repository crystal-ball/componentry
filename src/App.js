import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './demo/Home';
import Nav from './demo/Nav';
import Buttons from './demo/Buttons';
import Icons from './demo/Icons';
import FourOhFour from './demo/FourOhFour';

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/buttons' exact component={Buttons} />
          <Route path='/icons' exact component={Icons} />
          <Route component={FourOhFour} />
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}
