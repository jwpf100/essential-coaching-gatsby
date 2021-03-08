import React from 'react'
import PropTypes from 'prop-types'
import './MainButton.scss'
import { navigate } from 'gatsby'

const MainButton = ({ primary, label, onClick, bs }) => {
  const mode = primary
    ? 'btn btn-outline-highlight mainbutton'
    : 'btn btn-outline-gray'

  return (
    <button type="button" className={[mode, bs].join(' ')} onClick={onClick}>
      {label}
    </button>
  )
}

export default MainButton

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
}

MainButton.defaultProps = {
  primary: false,
  onClick: () => navigate('/'),
  bs: '',
}
