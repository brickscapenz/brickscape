import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import './all.scss'

const TemplateWrapper = ({ children, image, homepage }) => (
  <div className="fullPageWrap">
    <Helmet>
      <title>{`Brickscape - ${children.props.title ? children.props.title : 'Home'} | Hamilton Bricklaying Masters`}</title> 
      <meta name="description" content={children.props.pageDescription} />
    </Helmet>      
    <Navbar />
    <Hero 
      image={image} 
      heading={children.props.title}
      isHomepage={homepage}
      />       
      {children}
    <Footer />
  </div>
)

export default TemplateWrapper
