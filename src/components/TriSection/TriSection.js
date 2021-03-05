import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import MainButton from '../MainButton'

const TriSection = ({ children, className, title }) => (
  <div className={className}>
    <div className={['row'].join(' ')}>
      <h2 className=" text-center ">{title}</h2>
    </div>
    <div className="row justify-content-center">{children}</div>
    <div className={['d-flex justify-content-center'].join(' ')}>
      <MainButton primary label="How I can help" href="" bs="mt-3" />
    </div>
  </div>
)

const StyledTriSection = styled(TriSection)`
  button {
    font-size: 1.25rem;
  }
`

export default StyledTriSection

TriSection.propTypes = {
  /**
   * Emotion classname
   */
  children: PropTypes.object,
  /**
   * Emotion classname
   */
  className: PropTypes.string,
  /**
   * Title of info section.
   */
  title: PropTypes.string,
}

TriSection.defaultProps = {
  className: '',
  title: 'Example Header',
  children: [
    {
      icon: 'icon-question',
      header: 'Disrupt',
      text:
        'Take action and be accountable for building positive habits to achieve your goals.',
      className: '',
    },
    {
      icon: 'icon-question',
      header: 'Disrupt',
      text:
        'Take action and be accountable for building positive habits to achieve your goals.',
      className: '',
    },
    {
      icon: 'icon-question',
      header: 'Disrupt',
      text:
        'Take action and be accountable for building positive habits to achieve your goals.',
      className: '',
    },
  ],
}
