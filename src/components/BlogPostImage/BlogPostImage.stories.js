/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import BlogPostImage from './BlogPostImage'

export default {
  title: 'Essential-Coaching/BlogPostImage',
  component: BlogPostImage,
}

const Template = args => <BlogPostImage {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Book a free discovery call',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Read more...',
}

export const Large = Template.bind({})
Large.args = {
  bs: 'btn-lg',
  label: 'Large Button',
}

export const Small = Template.bind({})
Small.args = {
  bs: 'btn-sm',
  label: 'Small Button',
}