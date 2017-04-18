import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Home';
import Nav from './Nav';
import Alerts from './Alerts';
import Buttons from './Buttons';
import Cards from './Cards';
import Dropdowns from './Dropdowns';
import Icons from './Icons';
import ListGroups from './ListGroups';
import FourOhFour from './FourOhFour';
import Clear from './Clear';

export default class App extends Component {

  // Example app configuration using context, TODO: docs
  static childContextTypes = {
    visibilityTransitionLength: PropTypes.number
  };

  getChildContext() {
    return {
      visibilityTransitionLength: 350
    };
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/alerts' exact component={Alerts} />
            <Route path='/buttons' exact component={Buttons} />
            <Route path='/cards' exact component={Cards} />
            <Route path='/dropdowns' exact component={Dropdowns} />
            <Route path='/icons' exact component={Icons} />
            <Route path='/list-groups' exact component={ListGroups} />
            <Route path='/clear' exact component={Clear} />
            <Route component={FourOhFour} />
          </Switch>
          <Nav />
        </div>
      </Router>
    );
  }
}
