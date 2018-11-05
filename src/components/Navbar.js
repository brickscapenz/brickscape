import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import "jquery"
import 'bootstrap';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <div className="row d-flex justify-content-between" style={{ width: '100%' }}>
        <div>
          <Link className="nav-link text-black" to="/">
              <h1 className="heading"><strong>Brickscape</strong></h1>
          </Link>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " style={{ 'margin-right': '-20px' }} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
            </Link>
            </li>
            <li className="nav-item pr-0">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
