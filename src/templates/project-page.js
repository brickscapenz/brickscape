import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const AddImages = (imageGallery) => {
  var a = imageGallery.map((image) => {
    return (
      <div className="col-lg-6 gallery-image">
       <img src={image.image} style={{ width: '100%', height: 'auto' }} />
      </div>
    )
  })
  return a
}

export const ProjectPageTemplate = ({
  image,
  title,
  heading,
  description,
  imageGallery,
}) => (
  <div className="container content-container">
    <div className="row">
        {AddImages(imageGallery)}
    </div>
  </div>
)

ProjectPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  imageGallery: PropTypes.array,
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        imageGallery={frontmatter.imageGallery}
      />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description        
        imageGallery {
          image
        }
      }
    }
  }
`
