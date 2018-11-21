import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import HomePageTemplate from '../templates/home-page'
import Content, { HTMLContent } from '../components/Content'

export default class IndexPage extends React.Component {
  render() {

    const { markdownRemark } = this.props.data;
    const props = markdownRemark.frontmatter;

    return (
      <Layout 
        image={markdownRemark.frontmatter.heroImage} 
        homepage={true}
        heroTitle={markdownRemark.frontmatter.heroTitle}
        herContent={markdownRemark.frontmatter.herContent}>   
        <HomePageTemplate
          data={props}
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
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" }}) {
      html
      frontmatter {
        heroTitle
        heroContent
        heroImage
        bodyTitle
        bodyContent
        templateKey
        contactUsTitle
        contactUsImage
        imageBanner {
          image
        }
      }
    }
  }
`