import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, image, content }) => {

  return (
  <div className="container content-container">
    <div className="row">
      <div className="col-lg-12">
        <h3 className="page-title pb-3">Brickscape</h3>
        <div className="pb-3" dangerouslySetInnerHTML={{ __html: content }}></div>
        <div className="background-image background-image-display m-0" style={{ 'background-image': `url('${image}')`}}></div>
        <div class="text-center">Our team</div>
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
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
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
      }
    }
  }
`
