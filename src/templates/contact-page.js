import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export class ContactPageTemplate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      message: '',
      emailInvalid: false,
      nameInvalid: false,
      messageInvalid: false,
      validated: false,
    }
  };

  setValue (event) {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({
      [id]: value
    }, () => this.validate())
  };

  validate () {
    if (!this.state.validated) {
      return;
    }

    this.setState({
      emailInvalid: false,
      nameInvalid: false,
      messageInvalid: false,
    })

    if (!this.state.email) {
      this.setState({
        emailInvalid: true
      });
    }
    if (!this.state.name) {
      this.setState({
        nameInvalid: true
      });
    }
    if (!this.state.message) {
      this.setState({
        messageInvalid: true
      });
    }
  }

  submit (event) {    
    event.preventDefault();
    this.setState({ validated: true}, () => this.validate());

    if (this.state.emailInvalid || this.state.nameInvalid || this.state.messageInvalid) {      
      return;
    }
    
    const form = event.target;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        'form-name': 'contact',
        'name': this.state.name,
        'email': this.state.email,
        'message': this.state.message,
      }
    })
    .then(() => window.location.href = '/contact')
    .catch(error => alert(error));
  }

  render () {
    return (
      <div className="container-fluid pl-0">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-form-container">
              <div className="contact-form">
              <h1 className="full-width pb-5">Contact Us</h1>
              <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input onChange={(event) => this.setValue(event)} className="form-control" id="name" style={this.state.nameInvalid ? {border: 'solid 1px red'} : {}} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" onChange={(event) => this.setValue(event)} className="form-control" id="email" placeholder="name@example.com" style={this.state.emailInvalid ? {border: 'solid 1px red'} : {}} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea onChange={(event) => this.setValue(event)} value={this.state.message} className="form-control" id="message" rows="5" style={this.state.messageInvalid ? {border: 'solid 1px red'} : {}}></textarea>
                </div>
                <div className="form-group float-right">
                  <input id="submit" onClick={(event) => this.submit(event)} type="submit" className="btn btn-default" />
                </div>
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
