import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export class ContactPageTemplate extends React.Component {
  constructor (props) {
    super(props);
  };


  render () {
    return (
      <div className="container-fluid pl-0">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form-container">
              <div className="contact-form">
              <h1 className="full-width pb-5">Contact Us</h1>
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
            </div>
          </div>
          <div className="col-lg-6 fix-col">
          <iframe className="map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAUIIW5SBqG4uZLPEYbMhJqHj-7k10hGhw&q=Hamilton,New+Zealand" allowfullscreen>
          </iframe>
          </div>
        </div>
    </div>
    )
  }
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout image={post.frontmatter.heroImage}>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        pageDescription={post.frontmatter.pageDescription}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heroImage
        pageDescription
      }
    }
  }
`
