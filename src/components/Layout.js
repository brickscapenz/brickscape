import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './all.scss'

const RenderHomeContent = () => {
  return typeof window !== 'undefined' && window.location.pathname == '/' ? 'container pt-5 pb-5' : '';
}

const TemplateWrapper = ({ children, image }) => (
  <div className="fullPageWrap">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <Hero image={image} />
      <div className={RenderHomeContent()}>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
