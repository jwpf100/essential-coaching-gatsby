import { React } from 'react'
import { openPopupWidget } from 'react-calendly'
import MainButton from '../MainButton'
import inputData from '../../pagesInput/calendly'

const { url } = inputData
const path = url

const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
  const onClick = () =>
    openPopupWidget({
      url: path,
      prefill,
      pageSettings,
      utm,
    })

  return (
    <MainButton label="Book a free discovery call" onClick={onClick} primary />
  )
}

export default CalendlyButton

CalendlyButton.propTypes = {}

CalendlyButton.defaultProps = {}
