import React from 'react'
import { graphql, useScrollRestoration } from 'gatsby'
import Img from 'gatsby-image'

import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/HeroBanner'
import TextHeader from '../components/TextHeader'
import TextParagraph from '../components/TextParagraph'
import ContentBlock from '../components/ContentBlock'
import ContentText from '../components/ContentText'
import ContentTextImage from '../components/ContentTextImage'
import TextQuote from '../components/TextQuote'
import inputData from '../pagesInput/about-me'
import ContentIconList from '../components/ContentIconList'
import seo from '../components/seo'

export const AboutMePage = ({ data }) => {

  const scrollRestoration = useScrollRestoration(`scroll-restoration-key`);

  const heroImage = data.projectHero.childImageSharp.fluid
  const image1 = data.natural.childImageSharp.fluid
  const image2 = data.timechange.childImageSharp.fluid
  const image3 = data.wtrek.childImageSharp.fluid
  const image4 = data.portfolio.childImageSharp.fluid
  const icon1 = data.head.childImageSharp.fluid
  const icon2 = data.compass.childImageSharp.fluid
  const icon3 = data.wand.childImageSharp.fluid

  const {
    leadColorHeader,
    leadMainHeader,
    leadParagraphs,
    leadQuote,
    storyHeader,
    storyTitle1,
    storyParagraphs1,
    storyTitle2,
    storyParagraphs2,
    storyTitle3,
    storyParagraphs3,
    storyTitle4,
    storyParagraphs4,
    iconListHeader,
    iconListItemTitle1,
    iconListItemText1,
    iconListItemTitle2,
    iconListItemText2,
    iconListItemTitle3,
    iconListItemText3,
  } = inputData

  const storyArray = [
    {
      image: image1,
      title: storyTitle1,
      paragraphs: storyParagraphs1,
    },
    {
      image: image2,
      title: storyTitle2,
      paragraphs: storyParagraphs2,
    },
    {
      image: image3,
      text: image3,
      title: storyTitle3,
      paragraphs: storyParagraphs3,
    },
    {
      image: image4,
      text: image4,
      title: storyTitle4,
      paragraphs: storyParagraphs4,
    },
  ]

  const iconListArray = [
    {
      image: icon1,
      icon: 'icon-question',
      title: iconListItemTitle1,
      paragraphs: [iconListItemText1],
    },
    {
      image: icon2,
      icon: 'icon-question',
      title: iconListItemTitle2,
      paragraphs: [iconListItemText2],
    },
    {
      image: icon3,
      icon: 'icon-question',
      title: iconListItemTitle3,
      paragraphs: [iconListItemText3],
    },
  ]

  return (
    <Layout {...scrollRestoration}>
      <SEO title="Nikki Thomas" description="Learn more about Nikki Thomas, career coach, workplace psychologist and founder of Essential Coaching." />
      {/* ******** */}
      {/* Hero Banner Image */}
      {/* ******** */}
      <HeroBanner heroImage={heroImage} backgroundSide="left" />
      {/* ******** */}
      {/* Lead Blurb */}
      {/* ******** */}
      <ContentBlock>
        <ContentText>
          <TextHeader
            colorHeader={leadColorHeader}
            mainHeader={leadMainHeader}
          />
          <TextParagraph paragraphs={leadParagraphs} />
          <TextQuote paragraphs={leadQuote} />
        </ContentText>
      </ContentBlock>
      {/* <!-- xxxxxxxxxxxxxxxxxxxxx -->
      <!-- WHAT LIGHTS ME UP -->
      <!-- xxxxxxxxxxxxxxxxxxxxx --> */}
      <ContentBlock color>
        <TextHeader
          mainHeader={iconListHeader}
          size="large"
          alignHeader="center"
        />
        {iconListArray.map(item => (
          <ContentIconList
            childrenImage={
              <Img
                className="w-75 rounded-circle bg-white"
                fluid={item.image}
              />
            }
            childrenText={
              <>
                <TextHeader size="small" colorHeader={item.title} />
                <TextParagraph paragraphs={item.paragraphs} bs="mb-0" small />
              </>
            }
          />
        ))}
      </ContentBlock>

      {/* <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
    <!-- MY STORY-->
    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --> */}
      <ContentBlock>
        <TextHeader
          mainHeader={storyHeader}
          size="large"
          alignHeader="center"
        />
        {storyArray.map((item, index) => (
          <ContentTextImage
            image={item.image}
            imageSide={index % 2 ? 'left' : 'right'}
          >
            <TextHeader
              colorHeader={item.title}
              size="small"
              alignHeader="left"
            />
            <TextParagraph paragraphs={item.paragraphs} small />
          </ContentTextImage>
        ))}
      </ContentBlock>
    </Layout>
  )
}

export default AboutMePage

// Select Images using pagequery below.

export const pageQuery = graphql`
  query {
    projectHero: file(relativePath: { eq: "hero/hero-garden.jpg" }) {
      ...fluidImage
    }
    compass: file(relativePath: { eq: "aboutme/compass-300.jpg" }) {
      ...ILoveImage
    }
    head: file(relativePath: { eq: "aboutme/head-300.jpg" }) {
      ...ILoveImage
    }
    portfolio: file(relativePath: { eq: "aboutme/portfolio-500.jpg" }) {
      ...AboutMeImage
    }
    wtrek: file(relativePath: { eq: "aboutme/wtrek-600.jpg" }) {
      ...AboutMeImage
    }
    timechange: file(relativePath: { eq: "aboutme/timechange-600.jpg" }) {
      ...AboutMeImage
    }
    natural: file(relativePath: { eq: "aboutme/natural-600.jpg" }) {
      ...AboutMeImage
    }
    wand: file(relativePath: { eq: "aboutme/wand-300.jpg" }) {
      ...ILoveImage
    }
  }
`

AboutMePage.propTypes = {
  data: PropTypes.object,
}

AboutMePage.defaultProps = {
  data: {},
}
