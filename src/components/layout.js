/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import NavBar from './NavBar'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main className="bumpdown p-0">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
