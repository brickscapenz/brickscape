import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const AddImages = (images) => {
  let columnOne = '';
  let columnTwo = '';

  debugger

  images.forEach((image, index) => {
    if (index % 2 == 0) {
      columnOne += `<div class="background-image background-image-display gallery-image" style="background-image: url(${image.image})"></div>`;
    } else {
      columnTwo += `<div class="background-image background-image-display gallery-image" style="background-image: url(${image.image})"></div>`;
    }
  });

  var a = {
    __html: `<div class="row"><div class="col-lg-6">${columnOne}</div><div class="col-lg-6">${columnTwo}</div></div>`
  }
  return a;
}

export const ProjectPageTemplate = ({
  image,
  title,
  heading,
  description,
  imageGallery,
}) => (
  <div className="container content-container">
    <div className="gallery-heading-container">
      <h3 className="page-title pb-3">Gallery</h3>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
    <div dangerouslySetInnerHTML={AddImages(imageGallery)}>
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
    <Layout image={frontmatter.heroImage}>
      <ProjectPageTemplate
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
        heroImage
        heading
        description        
        imageGallery {
          image
        }
      }
    }
  }
`
