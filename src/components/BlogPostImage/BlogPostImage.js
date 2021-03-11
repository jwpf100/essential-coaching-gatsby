/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const BlogPostImage = ({ className, image, src }) => (
  /* <Img
    className={[className, 'w-75 rounded-circle mb-3 mx-auto'].join(' ')}
    fluid={image}
  /> */
  <img
    className={[
      className,
      'w-75 d-block rounded-circle mb-3 mx-auto border',
    ].join(' ')}
    src={`/${src}`}
    alt="Placeholder for blogpost"
  />
)

BlogPostImage.propTypes = {
  className: PropTypes.object,
  image: PropTypes.object,
  src: PropTypes.string,
}

const StyledBlogPostImage = styled(BlogPostImage)``

export default StyledBlogPostImage

BlogPostImage.defaultProps = {}
