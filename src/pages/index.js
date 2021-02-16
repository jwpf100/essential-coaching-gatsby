import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/HeroBanner'

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
              Coaching for people who want to create a career they love.
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

    {/* <!-- xxxxxxxxxxxxxxxx -->
<!-- ABOUT ME -->
<!-- xxxxxxxxxxxxxxxx --> */}

    <section id=" about-me" className="bg-light container-fluid">
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
            <a
              href="/aboutme"
              type="button"
              className="btn btn-outline-highlight text-muted align-self-center"
            >
              My Story
            </a>
          </div>
          <div className="col-6 col-lg-5 offset-lg-1 order-1 order-lg-2">
            <img
              className="featurette-image img-fluid rounded-circle py-3 py-md-0"
              src="./images/home/nikki-profile-comp.jpg"
              alt="Nikki Thomas"
            />
          </div>
        </div>
      </div>
    </section>

    {/* <!-- xxxxxxxxxxxxxxxx -->
<!-- COACHING PROCESS -->
<!-- xxxxxxxxxxxxxxxx --> */}

    <section id="process" className="features-icons container-fluid">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h2 className="text-muted text-center py-3">
              How we can work together
            </h2>
          </div>
        </div>
        <div className="row pb-3 pb-lg-5 justify-content-center text-center">
          <div className="col-md-4">
            <div className="features-icons-item mx-auto">
              <div className="features-icons-icon d-flex">
                <i className="icon-question m-auto text-highlight" />
              </div>
              <h3 className="text-muted">Discover</h3>
              <p className="mb-0 text-center text-muted">
                Get a better idea of what makes you tick. Get clear on where
                you’re heading.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="features-icons-item mx-auto">
              <div className="features-icons-icon d-flex">
                <i className="icon-pencil m-auto text-highlight" />
              </div>
              <h3 className="text-muted">Design</h3>
              <p className="mb-0 text-center text-muted">
                Create a focused plan of action and a clear ‘how’ you’ll get
                there.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="features-icons-item mx-auto">
              <div className="features-icons-icon d-flex">
                <i className="icon-rocket m-auto text-highlight" />
              </div>
              <h3 className="text-muted">Disrupt</h3>
              <p className="mb-0 text-center text-muted">
                Take action and be accountable for building positive habits to
                achieve your goals.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center ">
          <a
            type="button"
            className="btn btn-outline-highlight text-muted text center  align-self-center mb-3"
            href="/career-coaching"
          >
            How I can help
          </a>
        </div>
      </div>
    </section>

    {/* <!-- Testimonials --> */}
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
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to="1" />
                <li data-target="#myCarousel" data-slide-to="2" />
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-box">
                    <img
                      src="/images/testimonials/lucy-square-300.jpg"
                      alt=""
                    />
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
                    <img
                      src="/images/testimonials/jess-square-300.jpg"
                      alt=""
                    />
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
                    <img
                      src="/images/testimonials//deepa-square-300.jpg"
                      alt=""
                    />
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
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="row w-100 justify-content-center align-items-center" />
      </div>
    </section>

    {/* <!-- Links to the blog --> */}
    <section className="container-fluid">
      <div
        id="home-blog"
        className="container d-flex flex-wrap align-items-center justify-content-center"
      >
        <div className="row justify-content-center text-center">
          <h2 className="featurette-heading text-muted text-center py-3">
            The Essential career blog
          </h2>
        </div>
        <br />
        <div className="row text-center">
          <div className="col-lg-4 d-flex flex-column align-items-center py-1">
            <a
              href="/what-is-career-coaching"
              className="text-decoration-none blog-anchor d-flex flex-column align-items-center h-100"
            >
              <img
                className="rounded-circle border mb-4 bg-white blog-image"
                src="/images/blog/blog1.png"
                alt="Generic placeholder"
                width="150"
                height="150"
              />
              <h3 className="pb-2 text-muted">What exactly is coaching?</h3>
              <p className="blog-trailer text-muted">
                This was my question to a friend who recommend her own coach to
                me, many years ago. I didn’t get it. What was the point of
                coaching and how was it different to mentoring or therapy?
              </p>
              <p className="text-highlight mt-auto">Read more...</p>
            </a>
          </div>
          <div className="col-lg-4  d-flex flex-column align-items-center py-1">
            <a
              href="/why-do-i-need-a-careers-coach"
              className="text-decoration-none blog-anchor d-flex flex-column align-items-center h-100"
            >
              <img
                className="rounded-circle border mb-4 bg-white blog-image"
                src="/images/blog/blog2.png"
                alt="Generic placeholder"
                width="150"
                height="150"
              />
              <h3 className="pb-2 text-muted">
                Why do you need a careers coach?
              </h3>
              <p className="blog-trailer text-muted">
                Coaching can seem a bit of a dark art and it's hard to know
                whether or not a careers coach is right for you. At the very
                least it's a space to experiment, practice and learn about
                yourself with someone who will hold you accountable to action
                and give you immediate feedback.
              </p>
              <p className="text-highlight mt-auto">Read more...</p>
            </a>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-center py-1">
            <a
              href="/what-kind-of-careers-coach-do-i-need"
              className="text-decoration-none blog-anchor d-flex flex-column align-items-center h-100"
            >
              <img
                className="rounded-circle border mb-4 bg-white blog-image"
                src="/images/blog/blog3.png"
                alt="Generic placeholder"
                width="150"
                height="150"
              />
              <h3 className="pb-2 text-muted">What kind of coach do I need?</h3>
              <p className="blog-trailer text-muted">
                One of the most important things to find out when you’re
                searching for a coach is whether or not you think you’ll work
                well with them. A good coach will be clear with you on their
                style and ways of working so that you can decide whether or not
                you’ll be a good fit.{' '}
              </p>
              <p className="text-highlight mt-auto">Read more...</p>
            </a>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center pb-3">
            <a
              href="/the-essential-career-blog"
              type="button"
              className="btn btn-outline-highlight text-muted"
            >
              Go to the blog
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
