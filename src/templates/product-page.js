import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'



export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  //services,
}) => (
  <div className="container-fluid">
    <div className="row services-row">
      <div className="col-lg-6" style={{ 'background-color': 'blue' }}></div>
      <div className="col-lg-6" style={{ 'background-color': 'red' }}></div>
    </div>
    <div className="row services-row">
      <div className="col-lg-6" style={{ 'background-color': 'blue' }}></div>
      <div className="col-lg-6" style={{ 'background-color': 'red' }}></div>
    </div>
    <div className="row services-row">
      <div className="col-lg-6" style={{ 'background-color': 'blue' }}></div>
      <div className="col-lg-6" style={{ 'background-color': 'red' }}></div>
    </div>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  //testimonials: PropTypes.array,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        //services={frontmatter.services}
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
        image
        heading
        description      
      }
    }
  }
`
