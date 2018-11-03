import React from 'react'
import PropTypes from 'prop-types'
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
    debugger
    return (
      <div className="col-md-4 pl-0 pr-0">
        <div className="background-image" style={SetImage(image.image)}></div>
      </div>
    );
  });
}

const HomePageTemplate = ({ imageBanner, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className='container content-container'>
        <h1 className="page-title pb-4">{title}</h1>
        <div className="text-center" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <div className="container-fluid">        
        <div className="row">
          {AddImage(imageBanner)}
        </div>
        <div className="row">
          <div className="content-block bg-white content-block-quote">
            <div className="jumbotron-container text-center">
              <div className="container contact-content">
                <p className="lead m-0">We are an integrated team who pride ourselves on providing a professional and personal service to our clients.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="content-block">
            <div className="container">
              <div className="row pb-4">
                <h1 className="text-center full-width">Services</h1>
              </div>
              <div className="row pb-5">
                <p className="text-center full-width">We complete amzing works that inspires</p>
              </div>
              <div className="row pb-5">
                <div class="card col-lg-4 text-center">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
                <div class="card col-lg-4 text-center">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
                <div class="card col-lg-4 text-center">
                  <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-md-center pt-4">
                <a href="#" className="btn btn-default btn-lg btn-center">Discover the full service offering</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row relative">
          <div className="overlay"></div>
          <div className="content-block bg-white" style={{ backgroundImage: `url('/img/coffee-beans.jpg')` }}>
            <div className="contact-container">
              <div className="jumbotron-container text-white" style={{ width: "65%" }}>
                <div className="container contact-content">
                  <p className="contact-text">If you want to find out more about us, please get in contact.</p>
                  <p className="text-white">Perhaps you’re planning to digitize your collection. Or maybe you just need more information about how Veridian digitization, preservation or hosting could work for your organisation. How about a free pilot project and demo installation? Just ask.</p>
                  <button className="btn btn-default">Lets Go</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.string,
  imageBanner: PropTypes.array
}

export default HomePageTemplate