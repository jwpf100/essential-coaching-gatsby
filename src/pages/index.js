import React from 'react'

import { graphql } from 'gatsby'

import PropTypes from 'prop-types'
import { css } from '@emotion/react'

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
import CalendlyButton from '../components/CalendlyButton'

const IndexPage = ({ data }) => {
  // Define Images
  const profileImage = data.profilePic.childImageSharp.fluid
  const testimonialImage1 = data.testimonialImage1.childImageSharp.fluid
  const testimonialImage2 = data.testimonialImage2.childImageSharp.fluid
  const testimonialImage3 = data.testimonialImage3.childImageSharp.fluid
  const blogImage1 = data.blogImage1.childImageSharp.fluid
  const blogImage2 = data.blogImage2.childImageSharp.fluid
  const blogImage3 = data.blogImage3.childImageSharp.fluid

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
  const blogImageArray = [blogImage1, blogImage2, blogImage3]

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

  // Images (mobile and full size) for hero banner

  const sources = [
    {
      ...data.mobileImage.childImageSharp.fluid,
      media: `(max-width: 540px)`,
    },
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 541px)`,
    },
  ]

  return (
    <Layout>
      <SEO
        title="Great Careers Start Here!"
        description="Career coaching for people who want to create a career they love."
      />
      {/* ******** */}
      {/* Hero Banner Image */}
      {/* ******** */}

      <HeroBanner
        sources={sources}
        css={css`
          background-position: top right;
        `}
      >
        <HeroText headerText="Great Careers Start Here" xtraWide />
      </HeroBanner>
      {/* ******** */}
      {/* Lead Blurb */}
      {/* ******** */}
      <ContentBlock>
        <ContentText xtraWide>
          <TextLead mainHeader={headerLead} alignHeader="left" />
          <TextParagraph paragraphs={paragraphLeadArray} />
          <CalendlyButton />
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
          <MainButton label="My Story" primary href="/about-me/" />
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
        <MainButton label="How I can help" primary href="/career-coaching/" />
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
          {blogArray.map((blog, index) => (
            <FeaturedBlogPost
              key={blog._id}
              blogInfo={blog}
              // src={`blog/${blog.image_filename}.png`}
              image={blogImageArray[index]}
            />
          ))}
        </TriSection>
        <MainButton
          label="Read the blog..."
          primary
          href="/the-essential-career-blog/"
        />
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

export const mobileImageFragment = graphql`
  fragment mobileImage on File {
    childImageSharp {
      fluid(maxWidth: 540, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

// Select Images using pagequery below.

export const pageQuery = graphql`
  query {
    mobileImage: file(relativePath: { eq: "hero/hero-brick-mob-80.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 540, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopImage: file(relativePath: { eq: "hero/hero-brick.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
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
    blogImage1: file(relativePath: { eq: "blog/blog1.png" }) {
      ...profileImage
    }
    blogImage2: file(relativePath: { eq: "blog/blog2.png" }) {
      ...profileImage
    }
    blogImage3: file(relativePath: { eq: "blog/blog3.png" }) {
      ...profileImage
    }
  }
`
IndexPage.propTypes = {
  data: PropTypes.object,
}

IndexPage.defaultProps = {
  data: {},
}
