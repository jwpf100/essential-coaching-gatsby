import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import InfoItem from '../InfoItem'
import MainButton from '../MainButton'

const InfoSection = ({ className, title, items }) => (
  <>
    <div className="row">
      <h2 className=" text-center ">{title}</h2>
    </div>
    <div className="row justify-content-center">
      {items.map(item => (
        <InfoItem icon={item.icon} header={item.header} text={item.text} />
      ))}
    </div>
    <div className="d-flex justify-content-center">
      <MainButton primary label="How I can help" href="" bs="mt-3" />
    </div>
  </>
)

const StyledInfoSection = styled(InfoSection)``

export default StyledInfoSection

InfoSection.propTypes = {
  /**
   * Emotion classname
   */
  className: PropTypes.string,
  /**
   * Title of info section.
   */
  title: PropTypes.string,

  /**
   * Array of items to populate info items.
   */
  items: PropTypes.array,
}

InfoSection.defaultProps = {
  className: '',
  title: 'Example Header',
  items: [
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
