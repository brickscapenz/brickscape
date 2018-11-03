import React from 'react'

const jumboType = (props) => {
  debugger
  return props.isHomepage ? "jumbotron-hero jumbotron-fluid home-hero mb-0" : "jumbotron-hero jumbotron-fluid hero mb-0";
}

const backgroundImage = (props) => {
  return {
    backgroundImage: `url('${props.image}')`
  }
}

const homeContent = (props) => {
  debugger;
  if (!props.isHomepage) {
    return (
      <div className="jumbotron-container text-white" style={backgroundImage(props)}>
      <div className="container contact-content">
        <h1 className="display-4 text-center">{props.heading}</h1>
      </div>
    </div>
    );
  } else {
    return (
      <div className="jumbotron-container text-white" style={backgroundImage(props)}>
        <div className="container hero-content-container">
          <div className="hero-content">
            <h1 className="display-4">Masters in everything Bricks!</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
      </div>
    );
  }
}

const Hero = (props) => (
  <div className={jumboType(props)}>
    <div className={typeof window !== 'undefined' && window.location.pathname == '/' ? 'overlay-home' : 'overlay'}></div>
    {homeContent(props)}
  </div>
)

export default Hero
