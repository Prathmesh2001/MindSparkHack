
import React, { Component } from 'react';
import './CSS/styles.css';
import './CSS/bootstrap.min.css';
import PeriodicTable from "./components/PeriodicTable"
// import './CSS/bootstrap.bundle.js';

function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <small> with React + CSS Grid</small>
      <PeriodicTable />
    </div>
  );
}


export default App;
