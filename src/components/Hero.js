import React from 'react'

const toRender = () => {
  debugger;
  return window.location.pathname == '/' ? "jumbotron jumbotron-fluid home-hero" : "jumbotron jumbotron-fluid";
}

const Hero = () => (
  <div class={toRender()}>
      <div class="jumbotron-container">
        <div className="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    </div>
)

export default Hero
