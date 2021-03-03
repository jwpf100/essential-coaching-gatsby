import React from 'react'
import PropTypes from 'prop-types'
import './MainButton.scss'

const MainButton = ({ primary, label, href, bs }) => {
  const mode = primary
    ? 'btn btn-outline-highlight mainbutton'
    : 'btn btn-outline-gray'

  return (
    <button type="button" className={[mode, bs].join(' ')} href={href}>
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
  href: PropTypes.string,
  /**
   * additional bootstrap classes
   */
  bs: PropTypes.string,
}

MainButton.defaultProps = {
  primary: false,
  href: '/',
  bs: '',
}
