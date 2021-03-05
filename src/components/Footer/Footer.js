import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faPhoneSquare,
  faEnvelope,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ className }) => (
  <footer className={className}>
    <div className="container-fluid bg-secondary border-top footer">
      <div className="row footer-contact justify-content-center">
        <div className="col-12 text-center">
          <h4 className="py-3">Contact me</h4>
        </div>
      </div>
      <div className="row justify-content-center align-items-center pb-3">
        <div className="col-xs-12 col-md-4 col-lg-3 pb-3 pb-md-0 text-center">
          <a
            type="link"
            className=" text-decoration-none"
            href="mailto:nikki@essentialcoaching.co.uk?subject=Essential Coaching Enquiry"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fas fa-phone fa-lg me-3"
            />
            nikki@essentialcoaching.co.uk
          </a>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-3 pb-3 pb-md-0 text-center">
          <a className=" text-decoration-none">
            <FontAwesomeIcon
              icon={faPhone}
              className="fas fa-phone fa-lg me-3"
            />
            +44 7413 357 217
          </a>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-3 pb-3 pb-md-0 text-center">
          <a
            type="link"
            className=" text-decoration-none"
            href="https://www.linkedin.com/in/nikki-thomas-essentialcoaching/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="fab fa-linkedin fa-lg me-3"
            />
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

const StyledFooter = styled(Footer)`
   {
    /* box-shadow: 0px -1px 5px 0px rgba(247, 137, 47, 0.5); 
    border-top: rgba(247, 137, 47, 0.5);
    */
  }
  font-size: 1.25rem;
  h4 {
    font-family: 'Lato';
  }
  a {
    color: #6c757d;
  }
  link {
    color: #6c757d;
  }
`

export default StyledFooter

Footer.propTypes = {
  /**
   * Emotion classname
   */
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: '',
}
