import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, image, description }) => {

  return (
  <div className="container content-container">
    <div className="row">
      <div className="col-lg-12">
        <div className="about-heading-container">
          <h1 className="page-title pb-3">Brickscape</h1>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className="background-image background-image-display m-0" style={{ 'background-image': `url('${image}')`}}></div>
      </div>
    </div>
  </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout image={post.frontmatter.heroImage}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        pageDescription={post.frontmatter.pageDescription}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
        heroImage
        description
        pageDescription
      }
    }
  }
`
