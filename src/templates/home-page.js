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

const HomePageTemplate = ({ image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className='container content-container'>
        <h3 className="page-title pb-3">{title}</h3>
        <div class="text-center" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 pl-0 pr-0">
            <div className="background-image" style={SetImage(image)}></div>
          </div>
          <div className="col-md-4 pl-0 pr-0">
            <div className="background-image" style={SetImage(image)}></div>
          </div>
          <div className="col-md-4 pl-0 pr-0">
            <div className="background-image" style={SetImage(image)}></div>
          </div>
        </div>
        <div className="row">
          <div className="content-block">
            <div className="jumbotron-container text-center">
              <div className="container hero-content">
                <h1 className="display-4">Contact Us</h1>
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
}

export default HomePageTemplate