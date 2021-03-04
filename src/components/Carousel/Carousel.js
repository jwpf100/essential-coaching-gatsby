import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Carousel = ({ className, slides }) => (
  <div className={className}>
    <h2 className="testimonial-header align-self-top">
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
        {slides.map((slide, index) => (
          <>
            {index === 0 ? (
              <div className="carousel-item active">
                <div className="img-box">
                  <Img classname="" fluid={slide.image} />
                </div>
                <p className="testimonial col-lg-8 mx-auto">{slide.text}</p>
                <p className="overview">
                  <b>{slide.name}</b>, {slide.job}
                </p>
              </div>
            ) : (
              <div className="carousel-item">
                <div className="img-box">
                  <Img classname="" fluid={slide.image} />
                </div>
                <p className="testimonial col-lg-8 mx-auto">{slide.text}</p>
                <p className="overview">
                  <b>{slide.name}</b>, {slide.job}
                </p>
              </div>
            )}
          </>
        ))}
      </div>
      {/* <!-- Carousel controls --> */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
)
const StyledCarousel = styled(Carousel)``

export default StyledCarousel

Carousel.propTypes = {
  /**
   * Content to go in container
   */
  slides: PropTypes.array,
  /**
   * Emotion classname
   */
  className: PropTypes.string,
}

Carousel.defaultProps = {
  slides: [],
  className: '',
}
