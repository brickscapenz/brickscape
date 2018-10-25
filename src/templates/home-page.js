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
        <h3 className="page-title">{title}</h3>
        {content}
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