import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const HomeAboutMeBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "index/nikki-profile-comp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <section id="about-me" className="bg-light container-fluid">
      <div className="bg-light container d-flex flex-wrap justify-content-center align-items-center">
        <div className="align-items-center">
          <h2 className="col-12 text-center py-3 text-muted">
            The Essential Coach
          </h2>
        </div>
        <div className="row w-100 justify-content-center align-items-center pb-3 pb-lg-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column px-0">
            <p className="lead-mobile text-muted ">
              I’m Nikki Thomas - I'm a career coach and a workplace
              psychologist, having spent many years supporting organisations and
              individuals through periods of change.
            </p>
            <p className="lead-mobile text-muted ">
              I help individuals who want to grow and/or change their careers. I
              offer coaching for a variety of challenges; helping people achieve
              their goals, navigate feelings of anxiety and uncertainty, explore
              different mindsets and perspectives, as well as helping people
              find a new career or purpose.
            </p>
            <button
              href="/aboutme"
              type="button"
              className="btn btn-outline-dark text-muted align-self-center"
            >
              My Story
            </button>
          </div>
          <div className="col-6 col-lg-5 offset-lg-1 order-1 order-lg-2">
            <Img
              className="featurette-image img-fluid rounded-circle py-3 py-md-0 mx-auto d-block"
              fluid={data.profileImage.childImageSharp.fluid}
              alt="Nikki Thomas"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAboutMeBlock
