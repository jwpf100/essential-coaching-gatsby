import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import TextAnchor from '../TextAnchor'
import TextHeader from '../TextHeader'

const Footer = ({ className }) => (
  <footer className={className}>
    <div className="container-fluid bg-secondary border-top footer">
      <div className="row pt-3 justify-content-center">
        <div className="col-12 text-center">
          <TextHeader mainHeader='Contact me' size='small' />
        </div>
      </div>
      <div className="row justify-content-center align-items-center py-3">
        <div className="col-3">
        <TextAnchor href="mailto:nikki@essentialcoaching.co.uk?subject=Essential Coaching Enquiry">
            <i className={['icon-envelope', 'me-2'].join(' ')} />       
          </TextAnchor>
        </div>
        <div className="col-3">
        <TextAnchor href="tel:+44-7413-357-217">
            <i className={['icon-phone', 'me-2'].join(' ')} />            
          </TextAnchor>
        </div>
        <div className="col-3">
          <TextAnchor href="https://www.linkedin.com/in/nikki-thomas-essentialcoaching/">
            <i className={['icon-social-linkedin', 'me-2'].join(' ')} />
          </TextAnchor>
        </div>
      </div>
      <div className="row justify-content-start align-items-center bg-highlight">
        <div className="text-light footer-copyright text-center py-3">
          © Essential Coaching
        </div>
      </div>
    </div>
  </footer>
)

const StyledFooter = styled(Footer)`
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
