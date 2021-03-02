import React from 'react'
import PropTypes from 'prop-types'

const JoeButton = ({ primary, label, href, bs }) => {
  const mode = primary
    ? 'btn btn-outline-highlight text-muted'
    : 'btn btn-outline-dark'

  return (
    <button type="button" className={[mode, bs].join(' ')} href={href}>
      {label}
    </button>
  )
}

export default JoeButton

JoeButton.propTypes = {
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

JoeButton.defaultProps = {
  primary: false,
  href: '/',
  bs: '',
}
