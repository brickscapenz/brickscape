import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="fullPageWrap">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div className="mainHero">{children}</div>
  </div>
)

export default TemplateWrapper
