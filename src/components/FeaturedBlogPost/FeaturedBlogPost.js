import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { DateTime } from 'luxon'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const FeaturedPost = ({ blogInfo, imageUrl }) => {
  const blogData = blogInfo
  const tagList = blogData.tags.map(tag => tag.name)

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
    <div className="mb-4 mx-0 mx-2 h-100 g-0 border-rounded overflow-auto flex-column shadow-sm h-md-250 justify-content-center align-items-center">
      <div className="p-3 d-flex flex-column">
        <Img
          className="w-75 rounded-circle bg-white align-self-center mb-3"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
        <h3 className="m-0 pb-2 text-center">{blogData.title}</h3>
        <p className="m-0 pb-2">{blogData.summary}</p>
        <Link className="m-0 pb-2">Read More...</Link>
        <div className="mt-auto d-flex flex-row justify-content-between">
          <i className="">{tagList.join(' / ')}</i>
          <i className="">
            {DateTime.fromISO(blogData.post_date).toLocaleString(
              DateTime.DATE_MED
            )}
          </i>
        </div>
      </div>
    </div>
  )
}

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

export default FeaturedPost
