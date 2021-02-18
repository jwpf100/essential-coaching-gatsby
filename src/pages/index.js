import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/HeroBanner'
import HomeAboutMeBlock from '../components/HomeAboutMeBlock'
import HomeCoachingProcessBlock from '../components/HomeCoachingProcess'
import HomeBlogBlock from '../components/HomeBlogBlock'
import TestimonialBlock from '../components/TestimonialBlock'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner />

    {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- Initial text -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
    <section className="container-fluid">
      <div className="container pt-5">
        <div className="row justify-content-center align-items-center pb-3 pb-lg-5">
          <div className="col-12 d-flex flex-column">
            <h3 className="text-muted  pb-3">
              Joe Was Here Coaching for people who want to create a career they
              love.
            </h3>
            <p className="lead-mobile text-muted ">
              How often do you give yourself the time and space to evaluate your
              career? Perhaps you’re faced with a few options for where you
              could go next and need help deciding on the next challenge.
              Perhaps you want to get promoted but need a focused plan to get
              there. Perhaps you’ve got a great idea for a side hustle but
              haven’t had the confidence to go for it.
            </p>
            <p className="lead-mobile text-muted ">
              I can help you understand yourself better, get clear on where you
              want to go next and put your plan into action through practical,
              impactful coaching.
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

export default IndexPage
