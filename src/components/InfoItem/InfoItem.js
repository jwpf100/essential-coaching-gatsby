import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const InfoItem = ({ className, icon, header, text }) => (
  <div className="col-md-4 text-center">
    <div className={['d-flex', className].join(' ')}>
      <i className={[icon, 'm-auto text-highlight'].join(' ')} />
    </div>
    <h3 className="">{header}</h3>
    <p className="">{text}</p>
  </div>
)

const StyledInfoItem = styled(InfoItem)`
  height: 7rem;
  i {
    font-size: 4.5rem;
    &:hover {
      font-size: 5rem;
    }
  }
`

export default StyledInfoItem

InfoItem.propTypes = {
  /**
   * Content to go in container
   */
  icon: PropTypes.string,
  /**
   * Emotion classname
   */
  className: PropTypes.string,
  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  header: PropTypes.string,

  /**
   * Set background color of container.  Use either props.color or leave blank.
   */
  text: PropTypes.string,
}

InfoItem.defaultProps = {
  icon: 'icon-question',
  header: 'Disrupt',
  text:
    'Take action and be accountable for building positive habits to achieve your goals.',
  className: '',
}
