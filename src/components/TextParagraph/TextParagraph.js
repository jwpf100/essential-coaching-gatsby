import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TextParagraph = ({ className, paragraphs, bs, small }) => (
  <>
    {Array.isArray(paragraphs) ? (
      paragraphs.map(paragraph => (
        <p className={[className, bs].join(' ')}>{paragraph}</p>
      ))
    ) : (
      <p className={[className, bs].join(' ')}>{paragraphs}</p>
    )}
  </>
)

const StyledTextParagraph = styled(TextParagraph)`
  font-size: ${props => (props.small ? '1rem' : '1.25rem')};
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
  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  small: PropTypes.bool,
  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  bs: PropTypes.string,
}

TextParagraph.defaultProps = {
  className: '',
  paragraphs: 'Example Main Header Text',
  bs: '',
}
