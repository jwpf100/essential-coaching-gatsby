import React from 'react'
import PropTypes from 'prop-types'

import { graphql, navigate } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import HeroBanner from '../components/HeroBanner'
import ContentBlock from '../components/ContentBlock'
import ContentText from '../components/ContentText'
import ContentTextImage from '../components/ContentTextImage'
import TextHeader from '../components/TextHeader'
import TextParagraph from '../components/TextParagraph'
import SimpleIcon from '../components/SimpleIcon'
import ContentSpacer from '../components/ContentSpacer'
import TextList from '../components/TextList'
import TextCardGroup from '../components/TextCardGroup'
import MainButton from '../components/MainButton'

import inputData from '../pagesInput/career-coaching'
import ContentIconList from '../components/ContentIconList'

export const HowICanHelpPage = ({ data }) => {
  const heroImage = data.projectHero.childImageSharp.fluid
  const blogImage = data.blogImage1.childImageSharp.fluid

  const {
    leadMainHeader,
    leadParagraphs,
    iconListIntro,
    icon1,
    iconListItemTitle1,
    iconListItemText1,
    icon2,
    iconListItemTitle2,
    iconListItemText2,
    icon3,
    iconListItemTitle3,
    iconListItemText3,
    iconListOutro,
    includedListHeader,
    includedListIntro,
    includedListItems,
    typeOfCoachHeader,
    cardArray,
    blogPostHeader,
    blogPostBody,
  } = inputData

  const iconListArray = [
    {
      image: icon1,
      title: iconListItemTitle1,
      paragraphs: [iconListItemText1],
    },
    {
      image: icon2,
      title: iconListItemTitle2,
      paragraphs: [iconListItemText2],
    },
    {
      image: icon3,
      title: iconListItemTitle3,
      paragraphs: [iconListItemText3],
    },
  ]

  return (
    <Layout>
      <SEO title="Coaching Process" description="What is career coaching and how can it help you?" />
      <HeroBanner heroImage={heroImage} backgroundSide="right">
        <div className="container d-flex">
          <div className="row h-50 justify-content-end justify-content-sm-start">
            <div className="col-12 col-md-8 col-lg-6 pr-sm-auto">
              <blockquote className="quote-card d-flex align-items-center justify-content-center">
                <p className="lead text-muted font-italic">
                  Nikki’s coaching was great; so useful in making me think more
                  critically about my decisions/actions for the future.
                </p>
              </blockquote>
              <p className="text-right text-muted title-mobile">
                - Jess, Nutritionist
              </p>
            </div>
          </div>
        </div>
      </HeroBanner>
      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- Initial text -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      <ContentBlock>
        <ContentText xtraWide>
          <TextHeader mainHeader={leadMainHeader} />
          <TextParagraph paragraphs={leadParagraphs} />
          <TextParagraph paragraphs={iconListIntro} />
        </ContentText>
        <ContentSpacer bs="pb-3 pb-lg-5" />
        {iconListArray.map(item => (
          <ContentIconList
            xtraWide
            childrenImage={<SimpleIcon icon={item.image} />}
            childrenText={
              <>
                <TextHeader size="medium" mainHeader={item.title} />
                <TextParagraph paragraphs={item.paragraphs} bs="mb-0" small />
              </>
            }
          />
        ))}
        <ContentSpacer bs="pb-3 pb-lg-5" />
        <ContentText xtraWide>
          <TextParagraph paragraphs={iconListOutro} />
        </ContentText>
      </ContentBlock>

      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- What you'll get -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      <ContentBlock color>
        <ContentText xtraWide>
          <TextHeader mainHeader={includedListHeader} />
          <TextParagraph paragraphs={includedListIntro} />
          <TextList listArray={includedListItems} />
        </ContentText>
      </ContentBlock>
      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- What kind of coach am i? -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      <ContentBlock>
        <TextHeader mainHeader={typeOfCoachHeader} />
        <TextCardGroup cards={cardArray} />
      </ContentBlock>
      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- What kind of coach do you need? -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      <ContentBlock color>
        <TextHeader mainHeader={blogPostHeader} />
        <ContentTextImage image={blogImage} xtraWide>
          <TextParagraph paragraphs={blogPostBody} />
          <MainButton
            bs="mx-auto d-block"
            label="Read more"
            primary
            onClick={() => navigate('/about-me/')}
            href="/aboutme/"
          />
        </ContentTextImage>
      </ContentBlock>
    </Layout>
  )
}

export default HowICanHelpPage
/*
export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
*/

export const blogImageFragment = graphql`
  fragment blogImage on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    projectHero: file(relativePath: { eq: "hero/shoots.jpg" }) {
      ...fluidImage
    }
    profilePic: file(relativePath: { eq: "index/nikki-profile-comp.jpg" }) {
      ...fluidImage
    }
    blogImage1: file(relativePath: { eq: "blog/blog1.png" }) {
      ...blogImage
    }
  }
`

HowICanHelpPage.propTypes = {
  data: PropTypes.object,
}

HowICanHelpPage.defaultProps = {
  data: {},
}
