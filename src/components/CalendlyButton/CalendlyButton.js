import { React } from 'react'
import { openPopupWidget } from 'react-calendly'
import styled from '@emotion/styled'
import MainButton from '../MainButton'
import inputData from '../../pagesInput/calendly'

const { url } = inputData
const path = url

const CalendlyButton = ({ url, prefill, pageSettings, utm, className }) => {
  const onClick = () =>
    openPopupWidget({
      url: path,
      prefill,
      pageSettings,
      utm,
    })

  return (
    <button
      type="button"
      className={[
        'btn btn-outline-highlight mainbutton mx-auto d-block',
        className,
      ].join(' ')}
      onClick={onClick}
    >
      Book a free discovery call
    </button>
  )
}

const StyledCalendlyButton = styled(CalendlyButton)`
  font-size: ${props => (props.small ? '1rem' : '1.25rem')};
`

export default StyledCalendlyButton

CalendlyButton.propTypes = {}

CalendlyButton.defaultProps = {}
