import React from 'react'
import HomeBlogPost from './HomeBlogPost'

const HomeBlogBlock = () => (
  <section id="process" className="features-icons container-fluid">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <h2 className="text-muted text-center py-3">
            The Essential career blog
          </h2>
        </div>
      </div>
      <div className="row pb-3 pb-lg-5 justify-content-center text-center">
        <HomeBlogPost />
        <HomeBlogPost />
        <HomeBlogPost />
      </div>
      <div className="d-flex justify-content-center ">
        <a
          type="button"
          className="btn btn-outline-highlight text-muted text center  align-self-center mb-3"
          href="/"
        >
          Go to the blog
        </a>
      </div>
    </div>
  </section>
)

export default HomeBlogBlock
