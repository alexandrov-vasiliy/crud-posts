export const postService = () => {
  const getPosts = () => {
    return require('../mock/posts.json').posts
  }

  return {
    getPosts
  }
}
