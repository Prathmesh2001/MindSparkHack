
import React, { Component } from 'react';
import './CSS/styles.css';
import './CSS/bootstrap.min.css';
import PeriodicTable from "./components/PeriodicTable";
import Sample from './components/Sample';
// import './CSS/bootstrap.bundle.js';


function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <PeriodicTable />
    </div>
  );
}


export default App;
