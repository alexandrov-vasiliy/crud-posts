import { postService } from '@/services/postService'

export const PostsStore = {
  state: {
    posts: []
  },
  getters: {
    posts: (state) => state.posts
  },
  mutations: {
    setPosts (state, posts) {
      state.posts = posts
    },
    addPost (state, post) {
      state.posts.push(post)
    },
    removePost (state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId)
    },
    editPost (state, { postId, newName }) {
      const editedPost = state.posts.find((post) => post.id === postId)
      const postIndex = state.posts.indexOf(editedPost)
      state.posts[postIndex].name = newName
    }
  },
  actions: {
    fetchPosts ({ commit }) {
      const { getPosts } = postService()
      commit('setPosts', getPosts())
    }
  }
}
