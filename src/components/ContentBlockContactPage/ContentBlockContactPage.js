import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContentBlockContactPage = ({ children, className, color }) => {
  const colorBG = color ? 'bg-light' : ''

  return (
    <section className={['container-fluid', colorBG, className].join(' ')}>
      <div className="container py-5">{children}</div>
    </section>
  )
}

const StyledContentBlockContactPage = styled(ContentBlockContactPage)`
   {
    /* min-height: 50vh; */
  }
`

export default StyledContentBlockContactPage

ContentBlockContactPage.propTypes = {
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

ContentBlockContactPage.defaultProps = {
  children: '',
  className: '',
  color: '',
}
