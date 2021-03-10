import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import BlogPostImage from '../BlogPostImage'
import BlogPostFooter from '../BlogPostFooter'
import TextHeader from '../TextHeader'
import TextParagraph from '../TextParagraph'

const FeaturedPost = ({ blogInfo, imageUrl }) => {
  const blogData = blogInfo
  const tagList = blogData.tags.map(tag => tag.name).join(' / ')

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blog1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image1 = data.placeholderImage.childImageSharp.fluid

  return (
    <div className="h-100 border-rounded shadow-sm d-flex flex-wrap px-3 pb-3">
      <div className="w-100">
        <BlogPostImage image={image1} />
        <TextHeader
          size="medium"
          mainHeader={blogData.title}
          alignHeader="center"
        />
        <TextParagraph paragraphs={blogData.summary} small />
        <Link className="">Read More...</Link>
      </div>
      <div className="w-100 d-flex align-items-end">
        <BlogPostFooter tagList={tagList} post_date={blogData.post_date} />
      </div>
    </div>
  )
}

const StyledBlogPost = styled(FeaturedPost)``

FeaturedPost.propTypes = {
  blogInfo: PropTypes.array,
  imageUrl: PropTypes.string,
}

FeaturedPost.defaultProps = {
  blogInfo: {
    post_date: '2021-01-23T09:50:12.472Z',
    tags: [
      {
        _id: '600af59cf3ac8621ebb6abe8',
        name: 'Testing',
        __v: 0,
      },
    ],
    status: 'Published',
    _id: '600af5ddf3ac8621ebb6abeb',
    title: 'A test blogpost',
    author: {
      _id: '600af5a8f3ac8621ebb6abe9',
      first_name: 'Joseph',
      family_name: 'Fletcher',
      date_of_birth: '1983-09-01T00:00:00.000Z',
      date_of_death: null,
      __v: 0,
    },
    summary: 'A test blogpost',
    body:
      '<p>CHANGING ROUTES</p><p><br></p><p><em>A test blogpost</em></p><p><br></p><p><u>A test blogpost</u></p><p><br></p><p><strong>A test blogpost</strong></p>',
    body_delta:
      '{"ops":[{"insert":"CHANGING ROUTES\\n\\n"},{"attributes":{"italic":true},"insert":"A test blogpost"},{"insert":"\\n\\n"},{"attributes":{"underline":true},"insert":"A test blogpost"},{"insert":"\\n\\n"},{"attributes":{"bold":true},"insert":"A test blogpost"},{"insert":"\\n"}]}',
    image_filename: 'blog1.png',
    __v: 0,
  },
  imageUrl: 'src/images/blog/',
}

export default StyledBlogPost
