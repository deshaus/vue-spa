import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    post:''
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
      }
  },

  actions: {
    getPosts({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
      commit('SET_POSTS', response.data.slice(0,25))
      })
    }
  },

  // modules: {
  // }
})

