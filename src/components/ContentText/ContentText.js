import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContentText = ({ className, header, paragraphs, children }) => (
  <div className={[className, 'row justify-content-center'].join(' ')}>
    <div className="col-12 d-flex d-flex flex-column justify-content-around">
      <h3 className="pb-3">{header}</h3>
      {paragraphs.map(paragraph => (
        <p className="">{paragraph}</p>
      ))}
      {children}
    </div>
  </div>
)

const StyledContentText = styled(ContentText)`
  p,
  button {
    font-size: 1.25rem;
  }
`

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
  /**
   * Additional elements to add
   */
  children: PropTypes.object,
}

ContentText.defaultProps = {
  header: 'Header 1',
  paragraphs: ['Paragraph 1', 'Paragraph 2'],
  className: '',
}
