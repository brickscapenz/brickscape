import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div className="fullPageWrap">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <Hero />
    <div className="mainHero">{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
