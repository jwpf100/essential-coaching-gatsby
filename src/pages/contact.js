import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import HeroBackground from '../components/HeroBackground'
import ContentBlockContactPage from '../components/ContentBlockContactPage'
import TextHeader from '../components/TextHeader'
import TextParagraph from '../components/TextParagraph'
import ContentText from '../components/ContentText'
import TriSection from '../components/TriSection'
import SimpleIcon from '../components/SimpleIcon'
import InfoItem from '../components/InfoItem'
import ContactItem from '../components/ContactItem'

import inputData from '../pagesInput/contact'

const ContactPage = ({ data }) => {
  const heroImage = data.contactBackground.childImageSharp.fluid
  const { openParagraph, contactOptionsArray } = inputData

  return (
    <Layout contact>
      <HeroBackground heroImage={heroImage} backgroundSide="left">
        <ContentBlockContactPage>
          <ContentText>
            <TextHeader mainHeader="Let's connect..." />
            <TextParagraph paragraphs={openParagraph} />
          </ContentText>
          <TriSection>
            {contactOptionsArray.map(item => (
              <ContactItem header={item.header} text={item.text}>
                <SimpleIcon icon={item.icon} />
              </ContactItem>
            ))}
          </TriSection>
        </ContentBlockContactPage>
      </HeroBackground>
    </Layout>
  )
}

export default ContactPage
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
}
