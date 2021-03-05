import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import logo from '../../images/logo/trans-logo.png'

const NavBar = ({ className }) => (
  <header className={className}>
    <nav className="navbar navbar-expand-md fixed-top navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} width="auto" height="30" alt="" className="me-2" />
          ESSENTIAL COACHING
        </a>
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
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/aboutme">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/career-coaching">
                How I Can Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/the-essential-career-blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
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
