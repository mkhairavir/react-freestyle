import React from 'react';
import './App.css';
import Home from './pages/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header/Header'
import Burger from './pages/Burger'
import Pizza from './pages/Pizza'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
            <Burger />
            <Pizza />
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
