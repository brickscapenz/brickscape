import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

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
        <h2 className="page-title pb-3">{title}</h2>
        <div className="text-center" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="content-block content-block-quote">
            <div className="jumbotron-container text-center">
              <div className="container hero-content">
                <p className="lead m-0">We are an integrated team who pride ourselves on providing a professional and personal service to our clients.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {AddImage(imageBanner)}
        </div>
        <div className="content-block">
        <div className="container">
          <div className="row">
            <div class="col-lg-4 animated fade-in-bottom">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row bg-white">
          <div className="content-block bg-white">
            <div className="jumbotron-container text-center">
              <div className="container hero-content">
                <h2>Contact Us</h2>
                <p className="lead">If you want to find out more about us, please get in contact.</p>
                <button className="btn btn-danger btn-lg">Lets Go</button>
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