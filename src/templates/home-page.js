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
  
  return images && images.map((image, index) => {
    return (
      <div className="col-md-4 pl-0 pr-0">
        <div className="background-image" key={index} style={SetImage(image.image)}></div>
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
        <div class="text-center" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {AddImage(imageBanner)}
        </div>
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
          <div className="content-block bg-white">
           
          </div>
        </div>
        <div className="row">
          <div className="content-block">
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