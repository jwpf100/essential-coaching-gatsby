/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import NavBar from './NavBar'
import Footer from './Footer'

import './layout.scss'

const Layout = ({ children }) => (
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
