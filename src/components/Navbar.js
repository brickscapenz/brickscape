import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <div className="row">
        <div>
          <Link className="nav-link text-dark" to="/">
            <figure className="image">
              <h1>Brickscape</h1>
            </figure>
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item">
              <Link className="nav-link" to="/projects">
                Gallery
        </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about">
                About
        </Link>
            </li>
            <li class="nav-item">
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
