import React from 'react';

import Landing from './components/landing';
import Pricing from './components/pricing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">        
        <Switch>
          <Route path='/pricing'>
            <Pricing />
          </Route>
          <Route path='/payments'>
            Payments Coming Soon...
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
