import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer class="page-footer font-small stylish-color-dark pt-4">
    <div class="container text-center text-md-left">

      <div class="row">
        <div class="col-lg-12 d-flex justify-content-between flex-wrap">
          <div className="col-lg-2 pt-3 pb-3">
            <h5 class="font-weight-bold text-uppercase m-0 footer-heading">Brickscape</h5>
          </div>
          <div className="pt-3 pb-3 col-lg-auto offset-lg-auto d-flex justify-content-between">
            <span className="pl-2 pr-2">Gallery</span>
            <span className="pl-2 pr-2">Services</span>
            <span className="pl-2 pr-2">About</span>
            <span className="pl-2 pr-2">Contact</span>
          </div>
        </div>
      </div>

    </div>

    <hr />

    <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <h5 class="mb-1">Contact us now</h5>
      </li>
      <li class="list-inline-item">
        <Link className="btn btn-default btn-rounded" to="/contact">
          Lets go!
        </Link>
      </li>
    </ul>

    <hr />

    <ul class="list-unstyled list-inline text-center pb-4 pt-4">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1 p-2">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1 p-2">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1 p-2">
          <i class="fab fa-google-plus fa-2x"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1 p-2">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1 p-2">
          <i class="fab fa-dribbble fa-2x"></i>
        </a>
      </li>
    </ul>
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
        <span> Brickscape.com</span>
    </div>

  </footer>
)

export default Footer
