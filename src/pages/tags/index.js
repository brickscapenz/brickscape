import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = () => (
    <Layout>
      <section className="section">
        <Helmet title={`Tags | Brickscape - Bricklaying experts hamilton`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">Tags</h1>
              <ul className="taglist">
                <li key="Bricklaying Home">
                  <Link className="nav-link" to="/">Brickscape Home - Bricklaying Experts</Link>
                </li>
                <li key="Bricklaying Images">
                  <Link className="nav-link" to="/projects">Brickscape Images - Bricklaying images</Link>
                </li>
                <li key="Bricklaying Services">
                  <Link className="nav-link" to="/products">Brickscape Services - Bricklaying services</Link>
                </li>
                <li key="Bricklaying Contact">
                  <Link className="nav-link" to="/contact">Brickscape Contact - Bricklaying contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )

export default TagsPage
