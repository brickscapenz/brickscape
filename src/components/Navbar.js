import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navWrap">
    <div className="navInner">
      <div className="navbar-brand">
        <Link to="/">
          <figure className="image">
            <h1 className="brandLogo">Brickscape</h1>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbarItem" to="/projects">
          Projects
        </Link>
        <Link className="navbarItem" to="/about">
          About
        </Link>
        <Link className="navbarItem" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbarItem"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
