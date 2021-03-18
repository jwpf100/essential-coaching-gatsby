import { React } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { PopupWidget } from 'react-calendly'

const CalendlyWidget = () => (
  <PopupWidget
    url="https://calendly.com/nikki-essentialcoaching/20min?primary_color=f7882f"
    text="Book your free discovery call"
    color="#f7882f"
  />
)

const StyledCalendlyWidget = styled(CalendlyWidget)``

export default StyledCalendlyWidget

CalendlyWidget.propTypes = {}

CalendlyWidget.defaultProps = {}
