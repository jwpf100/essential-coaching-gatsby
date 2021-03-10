import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const BlogPostImage = ({ className, image }) => (
  <Img
    className={[className, 'w-75 rounded-circle mb-3 mx-auto'].join(' ')}
    fluid={image}
  />
)

BlogPostImage.propTypes = {
  className: PropTypes.object,
  image: PropTypes.object,
}

const StyledBlogPostImage = styled(BlogPostImage)``

export default StyledBlogPostImage

BlogPostImage.defaultProps = {}
