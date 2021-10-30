import React from 'react'
import { Link, Route } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="logo  px-5">
            <img src="/static/images/chem2.png" alt="logo" />
            <Link to='/' className="navbar-brand">EasyChemistry</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/periodicTable">Periodic Table</Link>
              </li>
              <li className="nav-item">
                <Link to="/photoElectric">Photo Electric</Link>
              </li>
              <li className="nav-item">
                <Link to='/bonding'>Chemical Bonding</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
