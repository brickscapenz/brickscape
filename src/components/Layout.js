import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './all.scss'

const TemplateWrapper = ({ children, image }) => (
  <div className="fullPageWrap">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <Hero image={image} />
    <div className="container pb-5">{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
