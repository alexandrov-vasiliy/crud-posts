import Vue from 'vue'
import Vuex from 'vuex'
import { PostsStore } from '@/store/postsStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    postModule: PostsStore
  }
})
