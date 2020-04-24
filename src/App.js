import React from 'react';
import './App.css';
import Home from './pages/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './component/Header/Header'
import Navigasi from './component/Navigasi'
import Burger from './pages/Burger'
import Pizza from './pages/Pizza'
import Topping from './pages/Topping'
import Shop from './pages/Shop'
import SignUp from './pages/SignUp'


function App() {
  return (
    <Router>
      <Header />
      <Navigasi />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
