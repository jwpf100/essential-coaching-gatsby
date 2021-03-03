import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContentText = ({ className, header, paragraphs }) => (
  <div className="row justify-content-center align-items-center pb-3 pb-lg-5">
    <div className="col-12 d-flex flex-column">
      <h3 className="pb-3">{header}</h3>
      {paragraphs.map(paragraph => (
        <p className="">{paragraph}</p>
      ))}
    </div>
  </div>
)

const StyledContentText = styled(ContentText)``

export default StyledContentText

ContentText.propTypes = {
  /**
   * Header Content
   */
  header: PropTypes.string,
  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  paragraphs: PropTypes.array,
  /**
   * Emotion classname
   */
  className: PropTypes.string,
}

ContentText.defaultProps = {
  header: 'Header 1',
  paragraphs: ['Paragraph 1', 'Paragraph 2'],
  className: '',
}
