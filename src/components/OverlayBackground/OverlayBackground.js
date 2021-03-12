import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Overlay = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const OverlayBackground = styled(Overlay)`
  display: -webkit-flex; /*  safari */
  display: flex;
  background-color: rgba(255, 255, 255, 0.75);
  min-height: 100vh;
  width: 100%;
`

export default OverlayBackground

Overlay.propTypes = {
  /**
   * Text to go within the background image
   */
  children: PropTypes.object,
  /**
   * emotion styling classes
   */
  className: PropTypes.string,
}

Overlay.defaultProps = {
  children: '',
  className: '',
}
