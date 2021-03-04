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

import Carousel from '../components/Carousel'
import TriSection from '../components/TriSection'
import InfoItem from '../components/InfoItem'
import FeaturedBlogPost from '../components/FeaturedBlogPost'
import inputData from '../pagesInput/index'
import MainButton from '../components/MainButton'

const IndexPage = ({ data }) => {
  // Define Images
  const heroImage = data.projectHero.childImageSharp.fluid
  const profileImage = data.profilePic.childImageSharp.fluid
  const testimonialImage1 = data.testimonialImage1.childImageSharp.fluid
  const testimonialImage2 = data.testimonialImage2.childImageSharp.fluid
  const testimonialImage3 = data.testimonialImage3.childImageSharp.fluid

  const {
    paragraphLead,
    paragraphLeadArray,
    aboutMeParagraphArray,
    testimonialText1,
    testimonialName1,
    testimonialJob1,
    testimonialText2,
    testimonialName2,
    testimonialJob2,
    testimonialText3,
    testimonialName3,
    testimonialJob3,
    sectionTitle,
    infoBlockArray,
    blogSectionTitle,
  } = inputData

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

  const blogPostArray = [{ item: 1 }, { item: 2 }, { item: 3 }]

  return (
    <Layout>
      <SEO title="Home" />
      {/* ******** */}
      {/* Hero Banner Image */}
      {/* ******** */}
      <HeroBanner heroImage={heroImage} backgroundSide="right">
        <HeroText headerText="Great Careers Start Here" />
      </HeroBanner>
      {/* ******** */}
      {/* Lead Blurb */}
      {/* ******** */}
      <ContentBlock>
        <ContentText header={paragraphLead} paragraphs={paragraphLeadArray}>
          <MainButton
            bs="mx-auto d-block"
            label="Book a free discovery call"
            primary
            href="/contact"
          />
        </ContentText>
      </ContentBlock>
      {/* ******** */}
      {/* About Me Section */}
      {/* ******** */}
      <ContentBlock color>
        <ContentTextImage
          image={profileImage}
          paragraphs={aboutMeParagraphArray}
        >
          <MainButton
            bs="mx-auto d-block"
            label="My Story"
            primary
            href="/aboutme"
          />
        </ContentTextImage>
      </ContentBlock>
      {/* ******** */}
      {/* Coaching Process */}
      {/* ******** */}
      <ContentBlock>
        <TriSection title={sectionTitle}>
          {infoBlockArray.map(item => (
            <InfoItem icon={item.icon} header={item.header} text={item.text} />
          ))}
        </TriSection>
      </ContentBlock>
      {/* ******** */}
      {/* Carousel */}
      {/* ******** */}
      <ContentBlock color>
        <Carousel slides={testimonialArray} />
      </ContentBlock>
      {/* ******** */}
      {/* Blog Taster */}
      {/* ******** */}
      <ContentBlock>
        <TriSection title={blogSectionTitle}>
          {blogPostArray.map(item => (
            <div className="col-md-4">
              <FeaturedBlogPost />
            </div>
          ))}
        </TriSection>
      </ContentBlock>
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
