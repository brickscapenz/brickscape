import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export class ProjectPageTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      images: this.props.imageGallery,
    };
  }

  addImage = (image) => {
      return <div className="background-image background-image-display gallery-image" onClick={this.openLightBox} style={{'background-image': `url(${image.image})`}}></div>
  }

  openLightBox = () => {
    this.setState({ isOpen: true });
  }

  render() {
    const { images, photoIndex, isOpen } = this.state;

    return (
      <div className="container content-container">
        <div className="gallery-heading-container">
          <h1 onClick={this.openLightBox} className="page-title pb-3">Gallery</h1>
          <div dangerouslySetInnerHTML={{ __html: this.props.description }}></div>
        </div>
        <div className="row">
          <div className="col-md-6">{this.props.imageGallery.filter((x, i) => i % 2 == 0).map(x => this.addImage(x))}</div>
          <div className="col-md-6">{this.props.imageGallery.filter((x, i) => i % 2 != 0).map(x => this.addImage(x))}</div>       
        </div>
        {isOpen && (
          <Lightbox
          mainSrc={images[photoIndex].image}
          nextSrc={images[(photoIndex + 1) % images.length].image}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].image}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
        )}
      </div>
    )
  }
}

ProjectPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  imageGallery: PropTypes.array,
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout image={frontmatter.heroImage}>
      <ProjectPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        imageGallery={frontmatter.imageGallery}
        pageDescription={frontmatter.pageDescription}
      />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroImage
        heading
        description
        pageDescription     
        imageGallery {
          image
        }
      }
    }
  }
`
