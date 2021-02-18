import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WhatIDoPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!--  -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}

    <section>
      <div
        id="career-cover"
        className="container-fluid align-items-center align-items-sm-center d-flex pt-3 pt-sm-0"
      >
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
      </div>

      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- Initial text -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      <div className="container-fluid">
        <div className="container pt-5">
          <div className="row justify-content-center align-items-center pb-3 pb-lg-5">
            <div className="col-12 d-flex flex-column">
              <h3 className="text-dark text-center pb-3">How I can help</h3>
              <p className="lead-mobile text-muted">
                My three-step programme will help you make the most of your
                talents and unique skills. Whether you’re working for an
                organisation, running your own gig or you’re in transition, I
                will draw on my behavioural change expertise to help you
                kickstart your journey to a happier, more fulfilled career.{' '}
              </p>
              <p className="lead-mobile text-muted ">
                {' '}
                If you're ready to make a change, contact me at{' '}
                <a
                  type="button"
                  className="btn btn-outline-highlight text-muted"
                  href="mailto:nikki@essentialcoaching.co.uk?subject=Essential Coaching Enquiry"
                  target="_blank"
                  rel="noreferrer"
                >
                  nikki@essentialcoaching.co.uk
                </a>
                to arrange your 30-minute complimentary call to explore how I
                can help you, or keep scrolling to learn more about what I do.
              </p>

              <p className="lead-mobile text-muted ">
                Each of my clients is unique and has differing requirements but
                broadly, we work through the following stages:
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- xxxxxxxxxxxxxxxx -->
    <!-- COACHING PROCESS -->
    <!-- xxxxxxxxxxxxxxxx --> */}
      {/*
    <div id="process" class="features-icons container-fluid">
      <div class="container pb-3 pb-lg-5">
        <div class="row align-items-center">
          <div class="col-3">
            <div class="features-icons-item mx-auto">
              <div class="features-icons-icon d-flex">
                <i class="icon-question m-auto text-highlight"></i>
              </div>

            </div>
          </div>
          <div class="col-9">
            <h3 class="text-muted text-left">1 - Discover</h3>
            <p class="mb-0 text-left text-muted">In the ‘Discover’ phase, we’ll get clear on your goals, mindset,
              values and strengths. This is all about who you
              are and what
              makes you tick. What’s your vision for the future? What’s your dream?</p>
          </div>
        </div>
        <div class="row align-items-center my-3">
          <div class="col-3">
            <div class="features-icons-item mx-auto">
              <div class="features-icons-icon d-flex">
                <i class="icon-pencil m-auto text-highlight"></i>
              </div>
            </div>
          </div>
          <div class="col-9">
            <h3 class="text-muted text-left">2 - Design</h3>
            <p class="mb-0 text-left text-muted">In ‘Design’, we’ll spend time defining what’s important to you,
              exploring your options and what might be holding
              you back.
              We’ll create a plan of action and you’ll be clear on your next steps.</p>
          </div>
        </div>
        <div class="row align-items-center  my-3">
          <div class="col-3">
            <div class="features-icons-item mx-auto">
              <div class="features-icons-icon d-flex">
                <i class="icon-rocket m-auto text-highlight"></i>
              </div>

            </div>
          </div>
          <div class="col-9">
            <h3 class="text-muted text-left">3 - Disrupt</h3>
            <p class="mb-0 text-left text-muted">‘Disrupt’ is all about taking action! What are you going to do
              differently? You’ll be taking positive action to
              build habits and
              test your ideas and work towards your goals.</p>
          </div>
        </div>
      </div>
    </div>
*/}

      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- Secondary text -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      {/* <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center align-items-center pb-3 pb-lg-5">
          <div class="col-12 d-flex flex-column">
            <p class="lead-mobile text-muted ">Typically, I work with clients over 6-10 sessions; depending on what you’re looking to achieve through coaching. Session frequency is driven by you but it's usually weekly or fortnightly.</p>
            
              <p class="lead-mobile text-muted ">I’m based in South West London but all of my coaching conversations are currently conducted over Zoom. I am flexible
                with timings
                during the week and coach during the day and evening.</p>
            </div>
        </div>
      </div>
    </div> */}

      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- Whats Included -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      {/* <div class="container-fluid bg-light">
      <div class="container">
        <div class="row justify-content-center align-items-center py-3">
          <div class="col-12 d-flex flex-column">
            <h3 class="text-dark mobile-header py-3">What's included</h3>
            <p class="lead-mobile text-muted "> Whilst each coaching programme is personalised and tailored
              to you, it will typically include:</p>
            <ul class="lead-mobile text-muted ">
              <li>A package of 6 one-to-one, action-oriented 1-hour coaching sessions, with the flexibility to add more sessions as required.</li>
              <li>A unique, valuable blend of coaching, psychology and behavioural change insight.</li>
              <li>Clear goal setting and measurement of progress against these.</li>
              <li>Structured insight into your strengths and values, which will act as your guiding light for any
                decisions you
                make.</li>
              <li>Resources and exercises to accelerate your progress.</li>
              <li>Accountability to build positive habits and achieve your goals.</li>
              <li>A summary email of key points after each coaching session.</li>
              <li>Email/WhatsApp support between coaching sessions.</li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}

      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- What you'll get -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      {/* <div class="container-fluid">
      <div class="container">
        <div class="row justify-content-center align-items-center py-3">
          <div class="col-12 d-flex flex-column">
            <h3 class="text-dark text-center py-3">What kind of coach am I?</h3>
          </div>
        </div>
      </div>
    </div> */}

      {/* <!-- xxxxxxxxxxxxxxxxxxx -->
    <!-- APPROACH METHOD ETC -->
    <!-- xxxxxxxxxxxxxxxxxxx --> */}
      {/* <div class="container-fluid">
      <div class="row flex-wrap justify-content-center">
        <div class="col-sm-6 col-md-5 col-lg-4">
          <div class="card border-0  mt-4">
            <div class="card-header about-card-header text-center lead">My approach</div>
            <div class="card-body text-muted ">
              <ul>
                <li>Tailored to you</li>
                <li>Grounded in real-life business change experience</li>
                <li>Draws on the latest behavioural change research and ideas</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 col-lg-4">
          <div class="card border-0 mt-4">
            <div class="card-header about-card-header text-center lead">My style</div>
            <div class="card-body text-muted ">
              <ul>
                <li>Open, curious and non-judgmental</li>
                <li>Practical and realistic</li>
                <li>Results-oriented</li>
              </ul>
            </div>
          </div>
        </div> */}
      {/* <!-- Force next columns to break to new line --> */}
      {/* <div class="w-100"></div>
        <div class="col-sm-6 col-md-5 col-lg-4">
          <div class="card border-0">
            <div class="card-header about-card-header text-center lead">What you'll get</div>
            <div class="card-body text-muted ">
              <ul>
                <li>A better understanding of what makes you tick</li>
                <li>Clarity on where you’re heading</li>
                <li>A clear plan of action and how you’ll get there</li>
                <li>Accountability to build positive habits and achieve your goals</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 col-lg-4">
          <div class="card border-0">
            <div class="card-header about-card-header text-center lead">My qualifications</div>
            <div class="card-body text-muted ">
              <ul>
                <li>Transformational Coaching Diploma (accredited by the International Coach
                  Federation)</li>
                <li>BSc Psychology</li>
                <li>MSc Organisational Psychology</li>
                <li>Graduate Member of the British Psychological Society</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      {/* // <!-- xxxxxxxxxxxxxxxxxxx -->
    // <!-- What you'll get -->
    // <!-- xxxxxxxxxxxxxxxxxxx --> */}

      {/* <div id="process" class="features-icons container-fluid bg-light">
      <div class="container">
        <div class="row justify-content-center align-items-center py-3">
          <div class="col-12 d-flex flex-column">
            <h3 class="text-dark text-center py-3">What kind of coach do you need?</h3>
          </div>
        <div class="row align-items-center">
          <div class="col-12 col-md-3 text-center">
            <img class="rounded-circle border mb-4 bg-white blog-image" src="/images/blog/blog3.png"
                alt="Generic placeholder image" width="150" height="150" />
          </div>
          <div class="col-12 col-md-9">
            <p class="mb-0 text-left text-muted">One of the most important things to find out when you’re searching
              for a
              coach is
              whether or not you think you’ll work well with them. A good coach will be clear with you on
              their style and ways of working so that you can decide whether or not you’ll be a
              good fit. </p>
              <a href="/what-kind-of-careers-coach-do-i-need" ><p class="text-highlight mt-auto">Read blog article...</p></a>
          </div>
        </div>
      </div>
    </div> */}
    </section>
  </Layout>
)

export default WhatIDoPage
