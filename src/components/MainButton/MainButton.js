import React from 'react'
import PropTypes from 'prop-types'
import './MainButton.scss'
import { navigate } from 'gatsby'
import styled from '@emotion/styled'

const MainButton = ({ primary, className, label, onClick, bs, small }) => {
  const mode = primary
    ? 'btn btn-outline-highlight mainbutton'
    : 'btn btn-outline-gray'

  return (
    <button
      type="button"
      className={[mode, className, bs].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const StyledMainButton = styled(MainButton)`
  font-size: ${props => (props.small ? '1rem' : '1.25rem')};
`

export default StyledMainButton

MainButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * href target
   */
  onClick: PropTypes.func,
  /**
   * additional bootstrap classes
   */
  bs: PropTypes.string,
  /**
   * additional bootstrap classes
   */
  small: PropTypes.bool,
  /**
   * additional bootstrap classes
   */
  className: PropTypes.string,
}

MainButton.defaultProps = {
  primary: false,
  onClick: () => navigate('/'),
  bs: '',
}
