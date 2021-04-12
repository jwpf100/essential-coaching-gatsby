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

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import MailChimpSignUp from './MailChimpSignUp'
import CalendlyWidget from './CalendlyWidget'
import ContentBlock from './ContentBlock'

// Add main font

import '@fontsource/lato/400.css'
import '@fontsource/merriweather/300.css'

// Add basic icons

import 'simple-line-icons/css/simple-line-icons.css'

const Layout = ({ children, contact, className }) => {
  // Contact page has a different layout
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
        <main className={className}>{children}</main>
        <ContentBlock>
          <MailChimpSignUp />
        </ContentBlock>
        <Footer />
        <CalendlyWidget />
      </>
    )
  }
  return (
    <>
      <Global
        // Only need 'bumpdown' to correct for navbar overlapping content at certain width
        styles={css`
          @media (max-width: 768px) {
            main {
              margin-top: 70px;
            }
          }
        `}
      />
      <NavBar />
      <main>{children}</main>
    </>
  )
}

const StyledLayout = styled(Layout)`
  /* Bumpdown content to account for Navbar */
  margin-top: 70px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contact: PropTypes.bool,
  className: PropTypes.string,
}

export default StyledLayout
