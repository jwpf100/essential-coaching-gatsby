import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContentBlock = ({ children, className, color }) => {
  const colorBG = color ? 'bg-light' : ''

  return (
    <section className={['container-fluid', colorBG, className].join(' ')}>
      <div className="container pt-5">{children}</div>
    </section>
  )
}

const StyledContentBlock = styled(ContentBlock)`
  min-height: 60vh;
`

export default StyledContentBlock

ContentBlock.propTypes = {
  /**
   * Content to go in container
   */
  children: PropTypes.object,
  /**
   * Emotion classname
   */
  className: PropTypes.string,
  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  color: PropTypes.object,
}

ContentBlock.defaultProps = {
  children: '',
  className: '',
  color: '',
}
