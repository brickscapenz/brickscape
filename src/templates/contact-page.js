import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="container-fluid pl-0">
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-form-container">
            <div className="contact-form">
            <h1 className="full-width pb-5">Contact Us</h1>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5"></textarea>
              </div>
              <div className="form-group float-right">
                <input type="submit" className="btn btn-default" />
              </div>
            </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        <iframe className="map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAUIIW5SBqG4uZLPEYbMhJqHj-7k10hGhw&q=7+Gardenia+Close,Melville,New+Zealand" allowfullscreen>
    </iframe>
        </div>
      </div>
  </div>
  )
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
      }
    }
  }
`
