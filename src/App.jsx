import './App.css';
import Nav from './components/nav'
import Landing from './components/landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/pricing'>
            Coming Soon...
          </Route>
          <Route path='/perks'>
            Coming Soon...
          </Route>
          <Route path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
