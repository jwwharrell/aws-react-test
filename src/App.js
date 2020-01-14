import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import Stager from './components/Stager.js'


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Stager} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
