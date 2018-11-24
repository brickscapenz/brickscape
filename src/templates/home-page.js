import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import animate from 'animate.css'

const SetImage = (image) => {
  return {
    backgroundImage: `url('${image}')`
  }
}

const AddImage = (images) => {

  return images && images.map((image) => {
    return (
      <div className="col-md-4 pl-0 pr-0">
        <div className="background-image background-image-display" style={SetImage(image.image)}></div>
      </div>
    );
  });
}


const HomePageTemplate = ({ data }) => {
  debugger
  return (
    <div>
      <div className='container content-container'>
        <h1 className="page-title pb-4">{data && data.bodyTitle}</h1>
        <div className="text-center" dangerouslySetInnerHTML={{  __html: data && data.bodyContent }}></div>
      </div>

      <div className="container-fluid">        
        <div className="row image-banner">
          {AddImage(data && data.imageBanner)}
        </div>       
        <div className="row">
          <div className="content-block bg-white">
            <div className="container">
              <div className="row pb-4">
                <h1 className="text-center full-width">Why choose us?</h1>
              </div>
              <div className="row pb-5">
              <div class="card col-lg-4 bg-white text-center">
                  <div class="card-body">
                    <i class="fas fa-plus fa-3x pb-3"></i>
                    <h5 class="card-title">Saftey First</h5>
                    <p class="card-text">Brickscape is HazardCo registered with Health &amp; Safety Policy and Procedures in place</p>
                  </div>
                </div>   
                <div class="card col-lg-4 bg-white text-center">
                  <div class="card-body">
                  <i class="fas fa-trophy fa-3x pb-3"></i>
                    <h5 class="card-title">Top Rated</h5>
                    <p class="card-text">We pride ourselves in customer satisfaction</p>
                  </div>
                </div>    
                <div class="card col-lg-4 bg-white text-center">
                  <div class="card-body">
                  <i class="fas fa-home fa-3x pb-3"></i>
                    <h5 class="card-title">Experts</h5>
                    <p class="card-text">Over 15 years experience from all around the world and a Licenced Building Practitioner</p>
                  </div>
                </div>   
                <div class="card col-lg-4 bg-white text-center">
                  <div class="card-body">
                    <i class="fas fa-dollar-sign fa-3x pb-3"></i>
                    <h5 class="card-title">Affordable</h5>
                    <p class="card-text">On time and on budget</p>
                  </div>
                </div>    
                <div class="card col-lg-4 bg-white text-center">
                  <div class="card-body">
                    <i class="fas fa-heart fa-3x pb-3"></i>
                    <h5 class="card-title">Satisfaction</h5>
                    <p class="card-text">We work closely with our clients to provide them with a service nothing short of exceptional</p>
                  </div>
                </div>    
                <div class="card col-lg-4 bg-white text-center">
                  <div class="card-body">
                    <i class="fas fa-thumbs-up fa-3x pb-3"></i>
                    <h5 class="card-title">Trusted and Friendly</h5>
                    <p class="card-text">You can count on Ben and the team to be reliable and professional</p>
                  </div>
                </div>             
              </div>
            </div>
          </div>
        </div>
        <div className="row relative">
          <div className="overlay"></div>
          <div className="content-block bg-white background-image" style={{ backgroundImage: `url(${data && data.contactUsImage})` }}>
            <div className="contact-container">
              <div className="jumbotron-container jumbotron-container-info text-white">
                <div className="container contact-content">
                  <p className="contact-text">{data && data.contactUsTitle}</p>
                  <Link className="btn btn-default btn-rounded" to="/contact">
                    Lets go
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageTemplate