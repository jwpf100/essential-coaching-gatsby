import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import MainButton from '../MainButton'

const ContentTextImage = ({ className, image, paragraphs, children }) => (
  <div className={className}>
    <div className="align-items-center">
      <h2 className="col-12 text-center">The Essential Coach</h2>
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-around">
        {paragraphs.map(paragraph => (
          <p className="">{paragraph}</p>
        ))}
        {children}
      </div>
      <div className="col-6 col-lg-5 offset-lg-1 order-1 order-lg-2 py-3">
        <Img
          className="featurette-image img-fluid rounded-circle d-block"
          fluid={image}
          alt="Nikki Thomas"
        />
      </div>
    </div>
  </div>
)

const StyledContentTextImage = styled(ContentTextImage)`
  p,
  button {
    font-size: 1.25rem;
  }
`

export default StyledContentTextImage

ContentTextImage.propTypes = {
  /**
   * Header Content
   */
  image: PropTypes.object,
  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  paragraphs: PropTypes.array,
  /**
   * Emotion classname
   */
  className: PropTypes.string,
  /**
   * Additional elements to add
   */
  children: PropTypes.object,
}

ContentTextImage.defaultProps = {
  image: {},
  paragraphs: ['Paragraph 1', 'Paragraph 2'],
  className: '',
}
