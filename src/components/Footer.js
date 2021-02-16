/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './NavBar.css'

const Footer = () => {
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
    <footer>
      <div className="container-fluid bg-secondary border-top footer">
        <div className="row footer-contact justify-content-center">
          <div className="col-12 text-center">
            <label className="lead text-muted pt-3">Contact me</label>
          </div>
        </div>
        <div className="row justify-content-center align-items-center pb-3">
          <div className="col-xs-12 col-md-4 col-lg-3 pb-3 text-center">
            <a
              type="link"
              className="text-muted text-decoration-none"
              href="mailto:nikki@essentialcoaching.co.uk?subject=Essential Coaching Enquiry"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-envelope fa-lg text-muted mr-3" />
              nikki@essentialcoaching.co.uk
            </a>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 pb-3 text-center">
            <a className="text-muted text-decoration-none">
              <i className="fas fa-phone fa-lg text-muted mr-3" />
              +44 7413 357 217
            </a>
          </div>
          <div className="col-xs-12 col-md-4 col-lg-3 pb-3 text-center">
            <a
              type="link"
              className="text-muted text-decoration-none"
              href="https://www.linkedin.com/in/nikki-thomas-essentialcoaching/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-lg mr-3" />
              Nikki Thomas
            </a>
          </div>
        </div>
        <div className="row footer-contact justify-content-center align-items-center bg-highlight">
          <div className="text-light footer-copyright text-center py-3">
            © Essential Coaching
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
