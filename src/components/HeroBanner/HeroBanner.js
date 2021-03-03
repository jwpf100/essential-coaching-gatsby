import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const Banner = ({ children, heroImage, headerText, className }) => {
  const newImageData = heroImage

  return (
    <BackgroundImage
      Tag="section"
      className={[
        className,
        'container-fluid align-items-end align-items-sm-center d-flex',
      ].join(' ')}
      fluid={newImageData}
      critical
      fadeIn={false}
    >
      {children}
    </BackgroundImage>
  )
}

const HeroBanner = styled(Banner)`
  background-repeat: no-repeat;
  background-position: ${props =>
    props.backgroundSide === 'left' ? 'top left' : 'top right'};
  background-size: cover;
  min-height: 60vh;
  background-color: gray;
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
