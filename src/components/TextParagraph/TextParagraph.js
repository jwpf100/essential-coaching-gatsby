import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TextParagraph = ({ className, paragraphs }) =>
  paragraphs.map(paragraph => <p className={className}>{paragraph}</p>)

const StyledTextParagraph = styled(TextParagraph)`
  font-size: 1.25rem;
`

export default StyledTextParagraph

TextParagraph.propTypes = {
  /**
   * Header Content
   */
  className: PropTypes.string,
  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  paragraphs: PropTypes.array,
}

TextParagraph.defaultProps = {
  className: '',
  paragraphs: 'Example Main Header Text',
}
