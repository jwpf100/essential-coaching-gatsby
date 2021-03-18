import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const Banner = ({ children, heroImage, className }) => {
  const newImageData = heroImage

  const backgroundFluidImageStack = [
    newImageData,
    `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      className={[
        className,
        'container-fluid d-flex justify-content-center',
      ].join(' ')}
      fluid={backgroundFluidImageStack}
      critical
      fadeIn={false}
    >
      {children}
    </BackgroundImage>
  )
}

// align-items-end align-items-sm-center

const HeroBanner = styled(Banner)`
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60vh;
  @media (max-width: 768px) {
    min-height: 50vh;
  }
`

export default HeroBanner

Banner.propTypes = {
  /**
   * Text to go within the background image
   */
  children: PropTypes.object,
  /**
   * Button contents
   */
  heroImage: PropTypes.object,
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
