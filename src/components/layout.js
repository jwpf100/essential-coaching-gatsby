/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import { Global, css } from '@emotion/react'
import {useScrollRestoration} from 'gatsby'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'

import '../../src/scss/custom.scss'

// Bootstrap

// import './node_modules/bootstrap/js/dist/alert'
// import './node_modules/bootstrap/js/dist/button'
import '../../node_modules/bootstrap/js/dist/carousel'
import '../../node_modules/bootstrap/js/dist/collapse'
// import './node_modules/bootstrap/js/dist/dropdown'
// import './node_modules/bootstrap/js/dist/modal'
// import './node_modules/bootstrap/js/dist/popover'
// import './node_modules/bootstrap/js/dist/scrollspy'
// import './node_modules/bootstrap/js/dist/tab'
// import './node_modules/bootstrap/js/dist/toast'
// import './node_modules/bootstrap/js/dist/tooltip'

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
