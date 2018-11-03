import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import HomePageTemplate from '../templates/home-page'
import Content, { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {

    const { markdownRemark } = this.props.data
    
    return (
      <Layout image={markdownRemark.frontmatter.image} homepage={true}>   
        <HomePageTemplate
          title={markdownRemark.frontmatter.title}
          content={markdownRemark.html}
          image={markdownRemark.frontmatter.image}
          imageBanner={markdownRemark.frontmatter.imageBanner}
        />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const HomePageQuery = graphql`
  {
    markdownRemark(frontmatter: { path: { eq: "/" }}) {
      html
      frontmatter {
        title
        image
        templateKey
        imageBanner {
          image
        }
      }
      excerpt
    }
  }
`