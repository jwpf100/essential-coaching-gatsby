import React, { Children } from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/HeroBanner'
import HeroText from '../components/HeroText'
import ContentText from '../components/ContentText'
import ContentBlock from '../components/ContentBlock'
import HomeAboutMeBlock from '../components/HomeAboutMeBlock'
import HomeCoachingProcessBlock from '../components/HomeCoachingProcess'
import HomeBlogBlock from '../components/HomeBlogBlock'
import TestimonialBlock from '../components/TestimonialBlock'

const IndexPage = ({ data }) => {
  const heroImage = data.projectHero.childImageSharp.fluid

  const paragraphLead =
    'Coaching for people who want to create a career they love.'
  const paragraphArray = [
    'How often do you give yourself the time and space to evaluate your career? Perhaps you’re faced with a few options for where you could go next and need help deciding on the next challenge. Perhaps you want to get promoted but need a focused plan to get there. Perhaps you’ve got a great idea for a side hustle but haven’t had the confidence to go for it.',
    'I can help you understand yourself better, get clear on where you want to go next and put your plan into action through practical, impactful coaching.',
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <HeroBanner heroImage={heroImage} backgroundSide="right">
        <HeroText headerText="Great Careers Start Here" />
      </HeroBanner>
      <ContentBlock>
        <ContentText header={paragraphLead} paragraphs={paragraphArray} />
      </ContentBlock>
      <HomeAboutMeBlock />
      <HomeCoachingProcessBlock />
      <TestimonialBlock />
      <HomeBlogBlock />
    </Layout>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

// Select Images using pagequery below.

export const pageQuery = graphql`
  query {
    projectHero: file(relativePath: { eq: "hero/hero-brick.jpg" }) {
      ...fluidImage
    }
  }
`
