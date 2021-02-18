import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import image1 from '../images/testimonials/deepa-square-300.jpg'
import image2 from '../images/testimonials/jess-square-300.jpg'
import image3 from '../images/testimonials/lucy-square-300.jpg'

const TestimonialBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "testimonials/deepa-square-300.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 125) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <section className="container-fluid bg-light">
      <div
        id="testimonials"
        className="bg-light container d-flex flex-wrap justify-content-center align-items-center"
      >
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="testimonial-header text-muted align-self-top py-3 pb-md-5 ">
              What people are saying
            </h2>
            <div id="myCarousel" className="carousel">
              {/* <!-- Carousel indicators --> */}
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="0"
                  className="active"
                />
                <li data-bs-target="#myCarousel" data-bs-slide-to="1" />
                <li data-bs-target="#myCarousel" data-bs-slide-to="2" />
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-box">
                    <img src={image3} alt="" />
                  </div>
                  <p className="testimonial">
                    After feeling stuck and overwhelmed when it came to my
                    professional life, I worked with Nikki over a six-week
                    period. The coaching experience made me feel accountable for
                    my actions, and I was able to identify small steps within my
                    power to control and quickly began to feel like I was moving
                    forward and creating change.
                  </p>
                  <p className="overview">
                    <b>Lucy</b>, Employee Engagement Consultant
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img src={image2} alt="" />
                  </div>
                  <p className="testimonial">
                    Nikki’s coaching was great; so useful in making me think
                    more critically about my decisions/actions for the future.
                    Nikki was really good at provoking thoughts about my
                    direction that I hadn’t considered without the prompt.
                  </p>
                  <br />
                  <p className="overview">
                    <b>Jess</b>, Nutritionist
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img src={image1} alt="" />
                  </div>
                  <p className="testimonial">
                    Nikki helped me to become aware of certain areas/traits that
                    may have been holding me back and coached me through
                    difficult situations, by suggesting practical and manageable
                    ways to improve or develop those areas.
                  </p>
                  <br />
                  <p className="overview">
                    <b>Deepa</b>, Health Psychologist.
                  </p>
                </div>
              </div>
              {/* <!-- Carousel controls --> */}
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-bs-slide="prev"
              >
                <FontAwesomeIcon className="" icon={faAngleLeft} size="4x" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-bs-slide="next"
              >
                <FontAwesomeIcon className="" icon={faAngleRight} size="4x" />
              </a>
            </div>
          </div>
        </div>
        <div className="row w-100 justify-content-center align-items-center" />
      </div>
    </section>
  )
}

export default TestimonialBlock
