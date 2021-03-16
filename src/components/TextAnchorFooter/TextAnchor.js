import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TextAnchor = ({ className, children, href }) => (
  <a
    type="link"
    className={[className].join(' ')}
    target="_blank"
    rel="noreferrer"
    href={href}
  >
    {children}
  </a>
)

const StyledTextAnchor = styled(TextAnchor)`
  font-size: ${props => (props.small ? '1rem' : '1.25rem')};
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #f7882f;
  }
`

export default StyledTextAnchor

TextAnchor.propTypes = {
  /**
   * Emotion classname
   */
  className: PropTypes.string,
  /**
   * Emotion classname
   */
  to: PropTypes.string,
  /**
   * Emotion classname
   */
  text: PropTypes.string,
  /**
   * Emotion classname
   */
  small: PropTypes.bool,
}

TextAnchor.defaultProps = {}
