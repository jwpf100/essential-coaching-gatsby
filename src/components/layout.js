/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Global, css } from '@emotion/react'
import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

import './layout.scss'

const Layout = ({ children, contact }) => {
  if (!contact) {
    return (
      <>
        <Global
          styles={css`
            main {
              /* color: #6c757d; */
            }
          `}
        />
        <NavBar />
        <main className="bumpdown">{children}</main>
        <Footer />
      </>
    )
  }
  return (
    <>
      <Global
        styles={css`
          main {
            /* color: #6c757d; */
          }
        `}
      />
      <NavBar />
      <main className="">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contact: PropTypes.bool,
}

export default Layout
