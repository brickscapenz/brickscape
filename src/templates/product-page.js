import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'

const ServicesRow = (services) => {
  return services.map((service) => {
    return (
      <div className="row services-row">
        <div className="col-lg-6 background-image background-image-display" style={{ 'background-image': `url(${service.image})` }}></div>
        <div className="col-lg-6 services-content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    );
  });
}

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  services,
}) => (
  <div className="container-fluid">
    <div className="container content-container">
      <h3 className="page-title pb-3">Brickscape services</h3>
      <p>{description}</p>
    </div>
    <div>
    {ServicesRow(services)}
    </div>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.array,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout image={frontmatter.heroImage}>
      <ProductPageTemplate        
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        services={frontmatter.services}
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
        services {
          image
          description
          title
        }  
      }
    }
  }
`
