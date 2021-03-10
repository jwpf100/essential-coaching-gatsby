import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import ContentBlock from '../components/ContentBlock'
import FeaturedBlogPost from '../components/FeaturedBlogPost'
import BlogPostContainer from '../components/BlogPostContainer'
import TextHeader from '../components/TextHeader'
import inputData from '../pagesInput/the-essential-career-blog'

const { blogArray } = inputData

const BlogHomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [blogPosts, setBlogPosts] = useState([])

  const imageUrl = 'images/blog/'

  // Arrange items by date - most recent first
  const sortPostsMostRecent = array =>
    array.sort((a, b) => {
      const c = new Date(a.post_date)
      const d = new Date(b.post_date)
      return d - c
    })

  useEffect(() => {
    const allBlogPostsURL = `https://josephfletcher.co.uk/blog-backend/api/blogposts`
    fetch(allBlogPostsURL, {})
      .then(res => res.json())
      .then(response => {
        setBlogPosts(sortPostsMostRecent(response))
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Layout>
      <TextHeader mainHeader="The Essential Blog" size="Large" />
      {!isLoading ? (
        <ContentBlock>
          <BlogPostContainer xtraWide cards={3}>
            {blogPosts.map(blog => (
              <FeaturedBlogPost
                key={blog._id}
                blogInfo={blog}
                imageUrl={imageUrl}
              />
            ))}
          </BlogPostContainer>
        </ContentBlock>
      ) : (
        <ContentBlock>
          {blogArray.map(blog => (
            <div className="col-md-6 p-0">
              <FeaturedBlogPost
                key={blog._id}
                blogInfo={blog}
                imageUrl={imageUrl}
              />
            </div>
          ))}
        </ContentBlock>
      )}
    </Layout>
  )
}

export default BlogHomePage
