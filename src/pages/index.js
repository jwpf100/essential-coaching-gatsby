import React, { Children } from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MainHeroBanner from '../components/MainHeroBanner'
import HomeAboutMeBlock from '../components/HomeAboutMeBlock'
import HomeCoachingProcessBlock from '../components/HomeCoachingProcess'
import HomeBlogBlock from '../components/HomeBlogBlock'
import TestimonialBlock from '../components/TestimonialBlock'

const IndexPage = ({ data }) => {
  const heroImage = data.projectHero.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <MainHeroBanner
        heroImage={heroImage}
        headerText="Great Careers Start Here"
      />
      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- Initial text -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      <section className="container-fluid">
        <div className="container pt-5">
          <div className="row justify-content-center align-items-center pb-3 pb-lg-5">
            <div className="col-12 d-flex flex-column">
              <h3 className="pb-3">
                Coaching for people who want to create a career they love.
              </h3>
              <p className="lead-mobile text-muted ">
                How often do you give yourself the time and space to evaluate
                your career? Perhaps you’re faced with a few options for where
                you could go next and need help deciding on the next challenge.
                Perhaps you want to get promoted but need a focused plan to get
                there. Perhaps you’ve got a great idea for a side hustle but
                haven’t had the confidence to go for it.
              </p>
              <p className="lead-mobile text-muted ">
                I can help you understand yourself better, get clear on where
                you want to go next and put your plan into action through
                practical, impactful coaching.
              </p>
            </div>
          </div>
        </div>
      </section>
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
