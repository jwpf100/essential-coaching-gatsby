import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const HeroBanner = ({ children, heroImage, headerText, className }) => {
  const newImageData = heroImage

  return (
    <BackgroundImage
      Tag="section"
      className={[
        className,
        'container-fluid align-items-center align-items-sm-center d-flex',
      ].join(' ')}
      fluid={newImageData}
      critical
      fadeIn={false}
    >
      <div className="container d-flex">
        <div className="row h-50 justify-content-end justify-content-sm-start">
          <div className="col-7 col-lg-6 pr-0 pr-sm-auto">
            <h1 className="display-3 text-white text-right text-sm-left  text-uppercase py-3 my-0">
              {headerText}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

const MainHeroBanner = styled(HeroBanner)`
  background-repeat: no-repeat;
  background-position: top right;
  background-size: cover;
  min-height: 60vh;
  background-color: gray;
`

export default MainHeroBanner

HeroBanner.propTypes = {
  /**
   * Text to go within the background image
   */
  children: PropTypes.object,
  /**
   * Button contents
   */
  heroImage: PropTypes.object,
  /**
   * Button contents
   */
  headerText: PropTypes.string,
  /**
   * emotion styling classes
   */
  className: PropTypes.string,
}

HeroBanner.defaultProps = {
  children: '',
  headerText: 'HEADER PLACEHOLDER',
  heroImage: {},
  className: '',
}
