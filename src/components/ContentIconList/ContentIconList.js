import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const ContentIconList = ({ className, image, children }) => (
  <div className="row justify-content-center align-items-center mb-3">
    <div className="col-3 col-lg-2 d-flex justify-content-center align-items-center">
      <Img className="w-75 rounded-circle bg-white" fluid={image} />
    </div>
    <div className="col-9 col-lg-6  d-flex flex-column align-items-start">
      {children}
    </div>
  </div>
)

const StyledContentIconList = styled(ContentIconList)``

export default StyledContentIconList

ContentIconList.propTypes = {
  /**
   * Header Content
   */
  image: PropTypes.object,
  /**
   * Emotion classname
   */
  className: PropTypes.string,
  /**
   * Additional elements to add
   */
  title: PropTypes.string,
  /**
   * Additional elements to add
   */
  children: PropTypes.object,
}

ContentIconList.defaultProps = {
  image: {},
  className: '',
}
