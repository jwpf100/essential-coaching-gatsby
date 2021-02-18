import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export const AboutMeImage = graphql`
  fragment AboutMeImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`

export const ILoveImage = graphql`
  fragment ILoveImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`

export const AboutMePage = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  /* const query = graphql`
    query {
      image1: file(relativePath: { eq: "aboutme/compass-300.jpg" }) {
        ...aboutMeImage
      }
    }
  ` */

  return (
    <Layout>
      <SEO title="Home" />

      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- xxxxHERO IMAGExxxxx -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      <section id="about-cover" className="bumpdown" />
      {/* <!-- About me initial text --> */}
      <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center pt-5">
        <div className="row w-100 align-items-center">
          <div className="col-lg-8 offset-lg-2 my-auto text-center">
            <h2 className="col-lg-12 text-center text-highlight pb-3">
              Hello...<span className="text-muted">I'm Nikki Thomas</span>
            </h2>
            <p className="lead text-left">
              I’m a career coach and the founder of Essential Coaching. I’m also
              a workplace psychologist and I’ve spent many years supporting
              organisations and individuals through periods of change. I know
              how difficult change can be. And how much easier it is to navigate
              when you’ve got the right support.
            </p>
          </div>
        </div>
      </div>
      {/* <!--               -->
    <!-- MISSION QUOTE -->
    <!--               --> */}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="">
              <blockquote className="quote-card d-flex align-items-center justify-content-center">
                <p className="lead text-muted">
                  I help high-performing individuals find fulfilment at work,
                  through impactful, practical coaching.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

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
      {/* <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
    <!-- ABOUT ME-->
    <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx --> */}
      <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center pt-5">
        <div className="row w-100 align-items-center">
          <div className="col-lg-8 offset-lg-2 my-auto text-center">
            <h2 className="col-lg-12 text-center text-highlight pb-3">
              <span className="text-muted">My story</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative">
        {/* <!-- 1st Section --> */}
        <div className="row justify-content-start align-items-center mb-5 mb-md-3 mb-lg-0">
          <div className="col-12 col-md-6 col-lg-5 col-xl-6 order-1 order-md-2 px-5 ">
            <h4 className="text-highlight">Natural curiosity</h4>
            <p>
              I’ve always been fascinated by what makes people tick. I was drawn
              to study Psychology as an undergrad and completed my Masters in
              Organisational Psychology. Here, I became intrigued by the science
              of how and why we change and adapt in the workplace.
            </p>
          </div>
          <div className="col-8 col-sm-6 col-lg-5 col-xl-4 offset-2 offset-sm-3 offset-md-0 offset-lg-1 order-2 order-md-1">
            <Img
              className="w-75 rounded-circle bg-white align-self-center mb-3"
              fluid={data.natural.childImageSharp.fluid}
            />
          </div>
        </div>
        {/* <!-- 2nd Section --> */}
        <div className="row justify-content-start align-items-center mb-5 mb-md-3 mb-lg-0">
          <div className="col-12 col-md-6 col-lg-5 col-xl-6 offset-lg-1 order-1 order-md-1 px-5 ">
            <h4 className="text-highlight">Time to change</h4>
            <p>
              I spent 10 years in the corporate world of Change Management.
              Whilst I enjoyed supporting teams through periods of change, what
              I loved most was the informal coaching and support I gave
              individuals. I’d also had some amazing managers along the way
              who’d coached me through uncertainty, helping me grow and develop.
              I’d seen first-hand the value of coaching. This is what I wanted
              to do more of.
            </p>
          </div>
          <div className="col-8 col-sm-6 col-lg-5 col-xl-4 offset-2 offset-sm-3 offset-md-0 order-2 order-md-2">
            <Img
              className="w-75 rounded-circle bg-white align-self-center mb-3"
              fluid={data.timechange.childImageSharp.fluid}
            />
          </div>
        </div>
        {/* <!-- 3rd Section --> */}
        <div className="row justify-content-start align-items-center  mb-5 mb-md-3 mb-lg-0">
          <div className="col-12 col-md-6 col-lg-5 col-xl-6 order-1 order-md-2 px-5 ">
            <h4 className="text-highlight">Travels beckon</h4>
            <p>
              I took a year out to travel around South East Asia and South
              America and returned feeling sure that I wanted to start
              coaching….one day. I was plagued by a little voice of doubt and it
              took a few more years before I started my Diploma in
              Transformational Coaching and set up my coaching practice.
            </p>
          </div>
          <div className="col-8 col-sm-6 col-lg-5 col-xl-4 offset-2 offset-sm-3 offset-md-0 offset-lg-1 order-2 order-md-1">
            <Img
              className="w-75 rounded-circle bg-white align-self-center mb-3"
              fluid={data.wtrek.childImageSharp.fluid}
            />
          </div>
        </div>
        {/* <!-- 4th Section --> */}
        <div className="row justify-content-start align-items-center mb-5 mb-md-3 mb-lg-0 pb-5">
          <div className="col-12 col-md-6 col-lg-5 col-xl-6 offset-lg-1 order-1 order-md-1 px-5 ">
            <h4 className="text-highlight">My portfolio career</h4>
            <p>
              Fast forward a few more years and I have found the right balance
              for a fulfilling career. I call it my ‘portfolio career’ – a mix
              of behavioural change consulting and, most importantly, the
              opportunity to coach individuals through change. I’m no longer
              questioning what I do for work – I enjoy it and appreciate the
              space it gives me to do the things that light me up. My mission
              now is to help others find the same career fulfilment.
            </p>
          </div>
          <div className="col-8 col-sm-6 col-lg-5 col-xl-4 offset-2 offset-sm-3 offset-md-0 order-2 order-md-2">
            <Img
              className="w-75 rounded-circle bg-white align-self-center mb-3"
              fluid={data.portfolio.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMePage
