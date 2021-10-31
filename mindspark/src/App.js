
import React, { Component } from 'react';

import './CSS/styles.css';
import './CSS/bootstrap.min.css';
import Quiz from './components/Quiz';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

import PeriodicTable from "./components/PeriodicTable"
import Photoelectric from './components/Photoelectric';
import Element from "./components/Element"
import Home from './components/Home';
import Bonding from './components/Bonding';
import Sample from './components/Sample';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import './CSS/bootstrap.bundle.js';

import Quizcont from './components/Quizcont';
// import PeriodicTable from '/components/PeriodicTable'
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
          
          <Route exact path = "/quiz">
            <Quiz/>
          </Route>
          
          <Route exact path="/quizcont/:id">
            <Quizcont/>
          </Route>
          
          <Route>404</Route>
        </Switch>
        <Footer/>
      </Router>

    </div>

  );
}


export default App;
