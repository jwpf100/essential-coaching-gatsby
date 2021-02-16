import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { DateTime } from 'luxon'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const BlogHeader = ({ blogArray, imageUrl }) => {
  const blogData = blogArray

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

  return (
    <div className="position-relative p-4 p-md-5 mb-4 text-white rounded bg-light d-flex flex-column flex-md-row">
      <div className="order-md-1 col-md-6 d-flex justify-content-center align-items-center">
        <Img
          className="w-75 h-auto bg-light rounded"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </div>
      <div className="h-100 order-md-0 col-md-6 py-mid-4 d-flex flex-column align-items-start">
        <h1 className="display-5 font-italic text-dark">{blogData.title}</h1>
        <p className="lead text-dark my-3">{blogData.summary}</p>
        <Link>Read More...</Link>
        <i className="text-muted mb-0">
          {DateTime.fromISO(blogData.post_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </i>
      </div>
    </div>
  )
}

BlogHeader.propTypes = {
  blogArray: PropTypes.array,
  imageUrl: PropTypes.string,
}

BlogHeader.defaultProps = {
  blogArray: {
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

export default BlogHeader
