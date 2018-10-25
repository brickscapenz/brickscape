import React from 'react'

const toRender = () => {
  return typeof window !== 'undefined' && window.location.pathname == '/' ? "jumbotron-hero jumbotron-fluid home-hero mb-0" : "jumbotron-hero jumbotron-fluid hero mb-0";
}

const backgroundImage = (image) => {
  return {
    backgroundImage: `url('${image.image}')`
  }
}

const Hero = (image) => (
  <div className={toRender()}>
      <div className={typeof window !== 'undefined' && window.location.pathname == '/' ? 'overlay-home' : 'overlay'}></div>
      <div className="jumbotron-container text-white" style={backgroundImage(image)}>
        <div className="container hero-content">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    </div>
)

export default Hero
