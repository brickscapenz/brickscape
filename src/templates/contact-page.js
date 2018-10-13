import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
        <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <form method="post" action="#">
                  <div className="column is-10 is-offset-1">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="column is-10 is-offset-1">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="column is-10 is-offset-1">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="6"></textarea>
                  </div>
                  <ul className="actions">
                    <li><input type="submit" value="Send Message" className="special" /></li>
                    <li><input type="reset" value="Clear" /></li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    <Layout>
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
      }
    }
  }
`