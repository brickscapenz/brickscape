import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <div className="row d-flex justify-content-between" style={{ width: '100%'}}>
        <div>
          <Link className="nav-link text-white" to="/">
            <figure className="image">
              <h1>Brickscape</h1>
            </figure>
          </Link>
        </div>
        <div className="collapse navbar-collapse d-flex justify-content-end" style={{ 'margin-right': '-20px'}} id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">
                Gallery
        </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
        </Link>
            </li>
            <li className="nav-item pr-0">
              <Link className="nav-link text-white" to="/contact">
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
