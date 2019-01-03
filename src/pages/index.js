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
      <div>
      <Layout 
        image={markdownRemark.frontmatter.heroImage} 
        homepage={true}
        heroTitle={markdownRemark.frontmatter.heroTitle}
        heroContent={markdownRemark.frontmatter.heroContent}>
        <HomePageTemplate
          data={props}
          pageDescription={markdownRemark.frontmatter.pageDescription}
        />
      </Layout>
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />
        <textarea name="message" />
        <button>Send</button>
      </form>
      </div>
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
        pageDescription
        imageBanner {
          image
        }
      }
    }
  }
`