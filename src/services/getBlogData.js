const getBlogData = () => {
  const allBlogPostsURL = `https://josephfletcher.co.uk/blog-backend/api/blogposts`
  fetch(allBlogPostsURL, {}).then(res => res.json())
}

export default getBlogData
