import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="page-footer font-small stylish-color-dark pt-4">
    <div className="container">
      <div className="row footer-row">
        <div className="col-md footer-col">
          <h3 className="pb-3">Contact Us</h3>
          <p className="mb-2"><a href="mailto:ben@brickscape.co.nz">Ben@brickscape.co.nz</a></p>
          <p className="mb-2"><a href="mailto:felicity@brickscape.co.nz">Felicity@brickscape.co.nz</a></p>
        </div>
        <div className="col-md footer-col">
          <h3 className="pb-3">Quick Links</h3>
          <ul className="navbar-nav">
            <li className="mb-2">
              <Link to="">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/projects">
                Gallery
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/products">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about">
                About
            </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md footer-col">
          <h3 className="pb-3">Brickscape</h3>
          <p>A company whose primary focus is quality and optimum customer satisfaction. The team will tackle any brick and block laying project with professionalism and dedication.</p>
        </div>
        <div className="col-md footer-logo-container">
          <img className="footer-logo" src="img/logo.png" />
        </div>
      </div>
    </div>
    <div className="footer-copyright py-3">
      <div className="container">
        © 2018 Copyright:
        <span> Brickscape.com</span>
      </div>
    </div>

  </footer>
)

export default Footer
