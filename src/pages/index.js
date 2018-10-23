import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { markdownRemark } = this.props.data
    
    return (
      <Layout image={markdownRemark.frontmatter.image}>   
        <div>
          {markdownRemark.html}
        </div>  
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
      }
      excerpt
    }
  }
`