import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import HeroBackground from '../components/HeroBackground'
import ContentBlockContactPage from '../components/ContentBlockContactPage'
import TextHeader from '../components/TextHeader'
import TextParagraph from '../components/TextParagraph'
import ContentText from '../components/ContentText'
import TriSection from '../components/TriSection'
import SimpleIcon from '../components/SimpleIcon'
import TextAnchor from '../components/TextAnchor'
import SEO from '../components/seo'
import MailChimpSignUp from '../components/MailChimpSignUp'
import inputData from '../pagesInput/contact'
import CalendlyButton from '../components/CalendlyButton'

const ContactPage = ({ data, className }) => {
  const heroImage = data.contactBackground.childImageSharp.fluid
  const { openParagraph, contactOptionsArray } = inputData

  return (
    <Layout className={className} contact>
      <SEO
        title="Contact Details"
        description="Contact Nikki Thomas to learn how you can create the career you want.  Email:nicola@essentialcoaching.co.uk"
      />
      <HeroBackground heroImage={heroImage} backgroundSide="left">
        <ContentBlockContactPage bs="d-flex align-items-center">
          <ContentText className="">
            <TextHeader mainHeader="Let's connect..." />
            <TextParagraph paragraphs={openParagraph} />
            <CalendlyButton />
          </ContentText>
          <TriSection noCards={3}>
            {contactOptionsArray.map(item => (
              <TextAnchor href={item.href}>
                <SimpleIcon icon={item.icon} />
                <TextParagraph
                  paragraphs={item.text}
                  bs="text-center text-break text-highlight"
                  small
                />
              </TextAnchor>
            ))}
          </TriSection>
          <MailChimpSignUp />
        </ContentBlockContactPage>
      </HeroBackground>
    </Layout>
  )
}

const StyledContactPage = styled(ContactPage)`
  a {
    text-decoration: inherit;
    color: black;
  }

  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
`

export default StyledContactPage
// Select Images using pagequery below.

export const pageQuery = graphql`
  query {
    contactBackground: file(relativePath: { eq: "backgrounds/contactme.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

ContactPage.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
}
