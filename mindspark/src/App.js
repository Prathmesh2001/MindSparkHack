
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,

} from "react-router-dom";

import './CSS/styles.css';
import './CSS/bootstrap.min.css';
import PeriodicTable from "./components/PeriodicTable"
import Photoelectric from './components/Sample';
import Home from './components/Home';
import Bonding from './components/Bonding';
import Sample from './components/Sample';
// import './CSS/bootstrap.bundle.js';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <header className="header">
      <div className="brand">
        {/* <button onclick="openMenu()">
          &#9776;
        </button> */}
        <Link to="/">EasyChemistry</Link>
      </div>
      <div className="header-links">
      <Link to="/PeriodicTable">
              PeriodicTable
            </Link>
            <Link to="/photoelectric">
              photoElectric
            </Link>
            <Link to="/Sample">
              Sample
            </Link>
      </div>
    </header>
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

          
          <Route exact path="/Sample">
            
            <Sample />
          </Route>
        </Switch>
      </Router>

    </div>
    </BrowserRouter>

  );
}


export default App;
