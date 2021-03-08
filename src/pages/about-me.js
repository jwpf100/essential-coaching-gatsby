import React from 'react'
import { graphql } from 'gatsby'

import PropTypes from 'prop-types'
import Img from 'gatsby-image'
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

export const AboutMePage = ({ data }) => {
  const heroImage = data.projectHero.childImageSharp.fluid
  const image1 = data.natural.childImageSharp.fluid
  const image2 = data.timechange.childImageSharp.fluid
  const image3 = data.wtrek.childImageSharp.fluid
  const image4 = data.portfolio.childImageSharp.fluid

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

  return (
    <Layout>
      <SEO title="Home" />
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
            <TextParagraph paragraphs={item.paragraphs} />
          </ContentTextImage>
        ))}
      </ContentBlock>
      {/* <!-- xxxxxxxxxxxxxxxxxxxxx -->
      <!-- WHAT LIGHTS ME UP -->
      <!-- xxxxxxxxxxxxxxxxxxxxx --> */}
      <div className="container-fluid bg-secondary">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-auto text-center">
            <h2 className="col-lg-12 text-center text-highlight py-3">
              <span className="text-muted">Things I love</span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center align-items-center py-3">
          <div className=" col-3 col-sm-3 col-md-2 col-xl-1">
            <Img
              className="w-75 rounded-circle bg-white align-self-center mb-3"
              fluid={data.head.childImageSharp.fluid}
            />
          </div>
          <div className="col-9 col-sm-9 col-md-6 col-xl-6">
            <h4 className="text-highlight">Learning...</h4>
            <p className="text-muted">
              Podcasts, books, lectures – I’m all about learning and developing.
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center py-3">
          <div className="col-3 col-sm-3 col-md-2 col-xl-1">
            <Img
              className="w-75 rounded-circle bg-white align-self-center mb-3"
              fluid={data.compass.childImageSharp.fluid}
            />
          </div>
          <div className="col-9 col-sm-9 col-md-6 col-xl-6">
            <h4 className="text-highlight">Travel...</h4>
            <p className="text-muted">
              I’ve dived with sharks in Indonesia, hiked across a glacier in
              Patagonia, sampled a LOT of Argentinian wine, sailed from Panama
              to Colombia and spent weeks in the Peruvian jungle.
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center pt-3 pb-5">
          <div className="col-3 col-sm-3 col-md-2 col-xl-1">
            <Img
              className="w-75 rounded-circle bg-white align-self-center mb-3"
              fluid={data.wand.childImageSharp.fluid}
            />
          </div>
          <div className="col-9 col-sm-9 col-md-6 col-xl-6">
            <h4 className="text-highlight">Being creative...</h4>
            <p className="text-muted">
              {' '}
              I love to write. I enjoy taking things I’ve learnt and
              reassembling it into a coherent story that might help others.
            </p>
          </div>
        </div>
      </div>
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
