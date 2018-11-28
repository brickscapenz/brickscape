import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

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


export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  imageBanner,
}) => (
  <div className="container-fluid">
    <div className="container content-container">
      <h1 className="page-title pb-5 text-center">Brickscape services</h1>
      <ul className="text-center" style={{ listStyle: "none" }}>
        <li>Block foundations/basements</li>
        <li>New build brick veneer</li>
        <li>Garden / Retaining / Boundary Walls</li>
        <li>Brickwork repairs and maintenance</li>
        <li>Planters boxes - Brickwork renovations</li>
        <li>Alterations and conversions</li>
        <li>Porches, garages and extensions</li>
        <li>BBQ’s and Pizza Ovens</li>
        <li>Alfresco Areas</li>
        <li>Letterboxes</li>
        <li>Ability to work worth a large range of brick, block, schist and stone.</li>
      </ul>
    </div>       
      <div className="row image-banner">
        {AddImage(imageBanner)}
      </div> 
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  imageBanner: PropTypes.array,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout image={frontmatter.heroImage}>
      <ProductPageTemplate        
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        imageBanner={frontmatter.imageBanner}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroImage
        heading
        description   
        imageBanner {
          image
        }
      }
    }
  }
`
