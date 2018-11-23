import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'



export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      expanded: false,  
    };
  }

  expand = () => {
    this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true });
  }

  expandedNavbar = () => {
    return this.state.expanded ? 'navbar-expanded collapse navbar-collapse' : 'collapse navbar-collapse';
  }
  render() {
  return (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container">
      <div className="row d-flex justify-content-between" style={{ width: '100%' }}>
        <div>
          <Link className="nav-link text-black" to="/">
              <h1 className="heading"><strong>Brickscape</strong></h1>
          </Link>
        </div>
        <button className="navbar-toggler" type="button" onClick={this.expand}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.expandedNavbar()} style={{ 'marginRight': '-20px' }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Services
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
  )}
};
