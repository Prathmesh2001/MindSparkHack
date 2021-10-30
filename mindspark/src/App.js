
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
import Quizcont from './components/Quizcont';
// import PeriodicTable from '/components/PeriodicTable'
// import './CSS/bootstrap.bundle.js';

class App extends Component {
  ele_num = 5;
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path = "/Quiz">
                <Quiz element_no = {this.ele_num}/>
              </Route>
              <Route exact path = "/">
                <h1> Home </h1>
              </Route>
              <Route exact path="/quizcont/:id">
                <Quizcont/>
              </Route>
            </Switch>
            
          </div>
        </Router>
        
      </div>
    );
  }
}


export default App;
