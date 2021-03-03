import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HeroText = ({ children, headerText, className }) => (
  <div className="container d-flex">
    <div className="row h-50 justify-content-center justify-content-sm-start align-items-end">
      <div className="col-12 col-sm-6 pr-0 pr-sm-auto">
        <h1
          className={[
            className,
            'display-3 text-center text-sm-start text-uppercase py-3 my-0 mb-3 rounded-pill',
          ].join(' ')}
        >
          {headerText}
        </h1>
        {children}
      </div>
    </div>
  </div>
)

const StyledHeroText = styled(HeroText)`
  color: white;
  font-weight: normal;
  @media (max-width: 576px) {
    color: #6c757d;
    opacity: 0.8;
    background-color: white;
  }
`

export default StyledHeroText

HeroText.propTypes = {
  /**
   * Text to go within the background image
   */
  children: PropTypes.object,
  /**
   * Button contents
   */
  headerText: PropTypes.string,
  /**
   * emotion styling classes
   */
  className: PropTypes.string,
}

HeroText.defaultProps = {
  children: '',
  headerText: 'HEADER PLACEHOLDER',
  className: '',
}
