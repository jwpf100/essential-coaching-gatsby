import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import ContentBlock from '../components/ContentBlock'
import FeaturedBlogPost from '../components/FeaturedBlogPost'
import BlogPostContainer from '../components/BlogPostContainer'
import TextHeader from '../components/TextHeader'
import inputData from '../pagesInput/the-essential-career-blog'
import SEO from '../components/seo'

const { blogArray } = inputData

const BlogHomePage = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [blogPosts, setBlogPosts] = useState(blogArray)

  const blogImage1 = data.blogImage1.childImageSharp.fluid
  const blogImage2 = data.blogImage2.childImageSharp.fluid
  const blogImage3 = data.blogImage3.childImageSharp.fluid
  const blogImage4 = data.blogImage3.childImageSharp.fluid

  const imageUrl = 'images/blog/'
  const blogImageArray = [blogImage1, blogImage2, blogImage3, blogImage4]

  // Arrange items by date - most recent first
  const sortPostsMostRecent = array =>
    array.sort((a, b) => {
      const c = new Date(a.post_date)
      const d = new Date(b.post_date)
      return d - c
    })

  // Currently using fixed date, will add either a source plugin https://www.gatsbyjs.com/docs/creating-a-source-plugin/ or reference API in future

  useEffect(() => {
    /*  
    const allBlogPostsURL = `https://josephfletcher.co.uk/blog-backend/api/blogposts`
    fetch(allBlogPostsURL, {})
      .then(res => res.json())
      .then(response => {
        setBlogPosts(sortPostsMostRecent(response))
        setIsLoading(false)
      })
      .catch(error => console.log(error)) */
  }, [])

  return (
    <Layout>
      <SEO
        title="The Essential Career Blog"
        description="Everything you need to know about career coaching, and how to make your career the best it can be."
      />
      <TextHeader mainHeader="The Essential Blog" size="Large" />
      {!isLoading ? (
        <ContentBlock>
          <BlogPostContainer xtraWide cards={3}>
            {blogPosts.map((blog, index) => (
              <FeaturedBlogPost
                key={blog._id}
                blogInfo={blog}
                // src={`blog/${blog.image_filename}.png`}
                image={blogImageArray[index]}
              />
            ))}
          </BlogPostContainer>
        </ContentBlock>
      ) : (
        <ContentBlock>
          <BlogPostContainer xtraWide cards={3}>
            {blogPosts.map((blog, index) => (
              <FeaturedBlogPost
                key={blog._id}
                blogInfo={blog}
                // src={`blog/${blog.image_filename}.png`}
                image={blogImageArray[index]}
              />
            ))}
          </BlogPostContainer>
        </ContentBlock>
      )}
    </Layout>
  )
}

export default BlogHomePage

export const blogImageMainFragment = graphql`
  fragment blogImageMain on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`

// Select Images using pagequery below.

export const pageQuery = graphql`
  query {
    projectHero: file(relativePath: { eq: "hero/shoots.jpg" }) {
      ...fluidImage
    }
    blogImage2: file(relativePath: { eq: "blog/blog1.png" }) {
      ...blogImageMain
    }
    blogImage3: file(relativePath: { eq: "blog/blog2.png" }) {
      ...blogImageMain
    }
    blogImage4: file(relativePath: { eq: "blog/blog3.png" }) {
      ...blogImageMain
    }
    blogImage1: file(relativePath: { eq: "blog/blogwebinar.png" }) {
      ...blogImageMain
    }
  }
`
BlogHomePage.propTypes = { data: PropTypes.object }

BlogHomePage.defaultProps = { data: {} }
