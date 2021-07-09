import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://jsonplaceholder.typicode.com/posts";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    title: '',
    content: '',
    author: '',
    posts: []
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    async getPosts(state) {
      const posts = await fetch(url, { headers });
      const response = await posts.json();
      state.commit("setPosts", response);
    }
  },
  getters: {
    getAllPosts: state => state.posts
  }
});