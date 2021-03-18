/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import CalendlyWidget from './CalendlyWidget'

export default {
  title: 'Essential-Coaching/CalendlyWidget',
  component: CalendlyWidget,
}

const Template = args => <CalendlyWidget {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Book a free discovery call',
}