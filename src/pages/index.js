import React from 'react'

import { graphql, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import {css} from '@emotion/react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/HeroBanner'
import HeroText from '../components/HeroText'
import ContentText from '../components/ContentText'
import ContentTextImage from '../components/ContentTextImage'
import ContentBlock from '../components/ContentBlock'

import Carousel from '../components/Carousel'
import TriSection from '../components/TriSection'
import FeaturedBlogPost from '../components/FeaturedBlogPost'
import inputData from '../pagesInput/index'
import BlogInputData from '../pagesInput/the-essential-career-blog'
import MainButton from '../components/MainButton'
import TextHeader from '../components/TextHeader'
import TextParagraph from '../components/TextParagraph'
import TextLead from '../components/TextAnchor'
import SimpleIcon from '../components/SimpleIcon'
import OverlayBackground from '../components/OverlayBackground'

const IndexPage = ({ data }) => {
  // Define Images
  const heroImage = data.projectHero.childImageSharp.fluid
  const profileImage = data.profilePic.childImageSharp.fluid
  const testimonialImage1 = data.testimonialImage1.childImageSharp.fluid
  const testimonialImage2 = data.testimonialImage2.childImageSharp.fluid
  const testimonialImage3 = data.testimonialImage3.childImageSharp.fluid

  const {
    headerLead,
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

  const { blogArray } = BlogInputData

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

  return (
    <Layout>
      <SEO title="Great Careers Start Here!" description="Career coaching for people who want to create a career they love." />
      {/* ******** */}
      {/* Hero Banner Image */}
      {/* ******** */}
      <HeroBanner heroImage={heroImage} css={css`background-position: top right`}>
            <HeroText headerText="Great Careers Start Here" xtraWide/>
      </HeroBanner>
      {/* ******** */}
      {/* Lead Blurb */}
      {/* ******** */}
      <ContentBlock>
        <ContentText xtraWide>
          <TextLead mainHeader={headerLead} alignHeader="left" />
          <TextParagraph paragraphs={paragraphLeadArray} />
          <MainButton
            bs="mx-auto d-block"
            label="Book a free discovery call"
            primary
            href="/contact/"
          />
        </ContentText>
      </ContentBlock>
      {/* ******** */}
      {/* About Me Section */}
      {/* ******** */}
      <ContentBlock color>
        <TextHeader mainHeader="The Essential Coach" />
        <ContentTextImage
          image={profileImage}
          paragraphs={aboutMeParagraphArray}
          xtraWide
        >
          <TextParagraph paragraphs={aboutMeParagraphArray} />
          <MainButton
            bs="mx-auto d-block"
            label="My Story"
            primary
            onClick={() => navigate('/about-me/')}
            href="/aboutme/"
          />
        </ContentTextImage>
      </ContentBlock>
      {/* ******** */}
      {/* Coaching Process */}
      {/* ******** */}
      <ContentBlock>
        <TextHeader size="large" mainHeader={sectionTitle} />
        <TriSection noCards={3} xtraWide>
          {infoBlockArray.map(item => (
            <>
              <SimpleIcon icon={item.icon} />
              <TextHeader size="medium" mainHeader={item.header} />
              <TextParagraph small paragraphs={item.text} bs="text-center" />
            </>
          ))}
        </TriSection>
        <MainButton
          bs="mx-auto d-block"
          label="How I can help"
          primary
          onClick={() => navigate('/career-coaching/')}
          href="/career-coaching/"
        />
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
        <TextHeader size="large" mainHeader={blogSectionTitle} />
        <TriSection noCards={3} xtraWide>
          {blogArray.map(blog => (
            <FeaturedBlogPost
              key={blog._id}
              blogInfo={blog}
              src={`blog/${blog.image_filename}.png`}
            />
          ))}
        </TriSection>
        {/* <MainButton
          bs="mx-auto d-block"
          label="The Essential Blog"
          primary
          onClick={() => navigate('/the-essential-career-blog/')}
          href="/the-essential-career-blog/"
        /> */}
      </ContentBlock>
    </Layout>
  )
}

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const profileImageFragment = graphql`
  fragment profileImage on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
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
      ...profileImage
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

IndexPage.defaultProps = {
  data: {},
}
