import React from 'react'

const toRender = () => {
  return window.location.pathname == '/' ? "jumbotron jumbotron-fluid home-hero" : "jumbotron jumbotron-fluid hero";
}

const backgroundImage = (image) => {
  return {
    backgroundImage: `url('${image.image}')`
  }
}

const Hero = (image) => (
  <div class={toRender()}>
      <div className={window.location.pathname == '/' ? 'overlay-home' : 'overlay'}></div>
      <div class="jumbotron-container text-white" style={backgroundImage(image)}>
        <div className="container hero-content">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    </div>
)

export default Hero
