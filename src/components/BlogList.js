import React from 'react'
import PropTypes from 'prop-types'
import FeaturedPost from './FeaturedPost'
import FeaturedBlogPost from './FeaturedBlogPost'

const BlogList = ({ blogArray, imageUrl, onClick }) => (
  <>
    <div className="container">
      <div className="row mb-2">
        {blogArray.map(blog => (
          <div className="col-md-6 p-0">
            <FeaturedBlogPost
              key={blog._id}
              blogInfo={blog}
              imageUrl={imageUrl}
              onClick={onClick}
            />
          </div>
        ))}
      </div>
    </div>
  </>
)

BlogList.propTypes = {
  blogArray: PropTypes.array,
  imageUrl: PropTypes.string,
  onClick: PropTypes.func,
}

BlogList.defaultProps = {
  blogArray: [
    {
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
    {
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
  ],
  imageUrl: 'src/images/blog/',
  onClick: () => '',
}

export default BlogList
