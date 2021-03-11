/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const BlogPostImage = ({ className, image }) => (
  /* <Img
    className={[className, 'w-75 rounded-circle mb-3 mx-auto'].join(' ')}
    fluid={image}
  /> */
  <img
    className={[className, 'w-75 rounded-circle mb-3 mx-auto'].join(' ')}
    src={`/${image}`}
    alt="Placeholder for blogpost"
  />
)

BlogPostImage.propTypes = {
  className: PropTypes.object,
  image: PropTypes.object,
}

const StyledBlogPostImage = styled(BlogPostImage)``

export default StyledBlogPostImage

BlogPostImage.defaultProps = {}
