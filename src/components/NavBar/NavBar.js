import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import logo from '../../images/logo/trans-logo.png'

const NavBar = ({ className }) => (
  <header className={className}>
    <nav className="navbar navbar-expand-md fixed-top navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} width="auto" height="30" alt="" className="me-2" />
          ESSENTIAL COACHING
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me/">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career-coaching/">
                How I Can Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/the-essential-career-blog/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

const StyledNavBar = styled(NavBar)`
  li {
    font-size: 1.25rem;
  }
  Link
`

export default StyledNavBar

NavBar.propTypes = {
  /**
   * Emotion classname
   */
  className: PropTypes.string,
}

NavBar.defaultProps = {
  className: '',
}
