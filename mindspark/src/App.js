
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import './CSS/styles.css';
import './CSS/bootstrap.min.css';
import Photoelectric from './components/Photoelectric';
import PeriodicTable from "./components/PeriodicTable"
import Element from "./components/Element"
import Home from './components/Home';
import Bonding from './components/Bonding';
import Sample from './components/Sample';
import Navbar from './components/Navbar';
// import './CSS/bootstrap.bundle.js';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/periodicTable">
            <PeriodicTable />
          </Route>

          <Route exact path="/photoElectric">
            <Photoelectric />
          </Route>

          <Route exact path="/element">
            <Element />
          </Route>

          <Route exact path="/bonding">
            <Bonding />
          </Route>


          <Route exact path="/Sample">

            <Sample />
          </Route>

          <Route>404</Route>
        </Switch>
      </Router>

    </div>

  );
}


export default App;
