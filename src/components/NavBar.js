import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './NavBar.css'

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      siteLogo: file(relativePath: { eq: "logo/trans-logo.png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-white">
          <a className="navbar-brand d-flex align align-items-center" href="/">
            <div className="navLogo">
              <Img
                className="w-100"
                fixed={data.siteLogo.childImageSharp.fixed}
              />
            </div>
            ESSENTIAL COACHING
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/aboutme">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/career-coaching">
                  How I Can Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/the-essential-career-blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

NavBar.propTypes = {}

export default NavBar
