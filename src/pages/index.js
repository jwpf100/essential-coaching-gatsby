import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/HeroBanner'
import HeroText from '../components/HeroText'
import ContentText from '../components/ContentText'
import ContentTextImage from '../components/ContentTextImage'
import ContentBlock from '../components/ContentBlock'
import HomeBlogBlock from '../components/HomeBlogBlock'
import Carousel from '../components/Carousel'
import InfoSection from '../components/InfoSection'

const IndexPage = ({ data }) => {
  // Define Images
  const heroImage = data.projectHero.childImageSharp.fluid
  const profileImage = data.profilePic.childImageSharp.fluid
  const testimonialImage1 = data.testimonialImage1.childImageSharp.fluid
  const testimonialImage2 = data.testimonialImage2.childImageSharp.fluid
  const testimonialImage3 = data.testimonialImage3.childImageSharp.fluid

  const paragraphLead =
    'Coaching for people who want to create a career they love.'
  const paragraphLeadArray = [
    'How often do you give yourself the time and space to evaluate your career? Perhaps you’re faced with a few options for where you could go next and need help deciding on the next challenge. Perhaps you want to get promoted but need a focused plan to get there. Perhaps you’ve got a great idea for a side hustle but haven’t had the confidence to go for it.',
    'I can help you understand yourself better, get clear on where you want to go next and put your plan into action through practical, impactful coaching.',
  ]
  const aboutMeParagraphArray = [
    "I’m Nikki Thomas - I'm a career coach and a workplace psychologist, having spent many years supporting organisations and individuals through periods of change.",
    'I help individuals who want to grow and/or change their careers. I offer coaching for a variety of challenges; helping people achieve their goals, navigate feelings of anxiety and uncertainty, explore different mindsets and perspectives, as well as helping people find a new career or purpose.',
  ]
  const testimonialText1 =
    'Nikki helped me to become aware of certain areas/traits that may have been holding me back and coached me through difficult situations, by suggesting practical and manageable ways to improve or develop those areas.'
  const testimonialName1 = 'Deepa'
  const testimonialJob1 = 'Health Psychologist'
  const testimonialText2 =
    'Nikki’s coaching was great; so useful in making me think more critically about my decisions/actions for the future. Nikki was really good at provoking thoughts about my direction that I hadn’t considered without the prompt.'
  const testimonialName2 = 'Jess'
  const testimonialJob2 = 'Nutritionist'
  const testimonialText3 =
    'After feeling stuck and overwhelmed when it came to my professional life, I worked with Nikki over a six-week period. The coaching experience made me feel accountable for my actions, and I was able to identify small steps within my power to control and quickly began to feel like I was moving forward and creating change.'
  const testimonialName3 = 'Lucy'
  const testimonialJob3 = 'Employee Engagement Consultant'

  const testimonialArray = [
    {
      image: testimonialImage1,
      text: testimonialText1,
      name: testimonialName1,
      job: testimonialJob1,
    },
    {
      image: testimonialImage2,
      text: testimonialText2,
      name: testimonialName2,
      job: testimonialJob2,
    },
    {
      image: testimonialImage3,
      text: testimonialText3,
      name: testimonialName3,
      job: testimonialJob3,
    },
  ]

  const sectionTitle = 'How we can work together'
  const infoBlockArray = [
    {
      icon: 'icon-question',
      header: 'Discover',
      text:
        'Get a better idea of what makes you tick. Get clear on where you’re heading.',
    },
    {
      icon: 'icon-pencil',
      header: 'Design',
      text:
        'Create a focused plan of action and a clear ‘how’ you’ll get there..',
    },
    {
      icon: 'icon-question',
      header: 'Disrupt',
      text:
        'Take action and be accountable for building positive habits to achieve your goals.',
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      {/* Hero Banner Image */}
      <HeroBanner heroImage={heroImage} backgroundSide="right">
        <HeroText headerText="Great Careers Start Here" />
      </HeroBanner>
      {/* Lead Blurb */}
      <ContentBlock>
        <ContentText header={paragraphLead} paragraphs={paragraphLeadArray} />
      </ContentBlock>
      {/* About Me Section */}
      <ContentBlock color>
        <ContentTextImage
          image={profileImage}
          paragraphs={aboutMeParagraphArray}
        />
      </ContentBlock>
      {/* Coaching Process */}
      <ContentBlock>
        <InfoSection title={sectionTitle} items={infoBlockArray} />
      </ContentBlock>
      {/* Carousel */}
      <ContentBlock color>
        <Carousel slides={testimonialArray} />
      </ContentBlock>

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
    profilePic: file(relativePath: { eq: "index/nikki-profile-comp.jpg" }) {
      ...fluidImage
    }
    testimonialImage1: file(
      relativePath: { eq: "testimonials/deepa-square-300.jpg" }
    ) {
      ...fluidImage
    }
    testimonialImage2: file(
      relativePath: { eq: "testimonials/jess-square-300.jpg" }
    ) {
      ...fluidImage
    }
    testimonialImage3: file(
      relativePath: { eq: "testimonials/lucy-square-300.jpg" }
    ) {
      ...fluidImage
    }
  }
`
IndexPage.propTypes = {
  data: PropTypes.object,
}

Carousel.defaultProps = {
  data: {},
}
