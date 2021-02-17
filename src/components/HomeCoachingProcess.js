import React from 'react'
import './HomeCoachingProcessBlock.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faPencilAlt, faRocket } from '@fortawesome/free-solid-svg-icons'

const HomeCoachingProcessBlock = () => {
  const questionImage = <FontAwesomeIcon icon={faQuestionCircle} className="" />

  return (
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
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="m-auto text-highlight"
                  size="7x"
                />
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
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className="m-auto text-highlight"
                  size="7x"
                />
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
                <FontAwesomeIcon
                  icon={faRocket}
                  className="m-auto text-highlight"
                  size="7x"
                />
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
  )
}

export default HomeCoachingProcessBlock
