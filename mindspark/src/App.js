
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import './CSS/styles.css';
import './CSS/bootstrap.min.css';
import PeriodicTable from "./components/PeriodicTable"
import Photoelectric from './components/Sample';
import Home from './components/Home';
import Bonding from './components/Bonding';
// import './CSS/bootstrap.bundle.js';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/periodicTable">
            <h1>Periodic Table of Elements</h1>
            <PeriodicTable />
          </Route>

          <Route exact path="/photoElectric">
            <Photoelectric />
          </Route>

          <Route exact path="/bonding">
            <Bonding/>
          </Route>

          
        </Switch>
      </Router>


    </div>
  );
}


export default App;
