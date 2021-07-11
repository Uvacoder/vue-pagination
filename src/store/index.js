import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
const userUrl = "https://jsonplaceholder.typicode.com/users";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    authors: [],
    posts: [],
    expanded: {}
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setAuthors(state, payload) {
      state.authors = payload
    }
  },
  actions: {
    async getPosts(state) {
      const posts = await fetch(postsUrl, { headers });
      const response = await posts.json();
     
      //TODO consider
      await Promise.all(response.map(async post => {
        const author = await fetch (`${userUrl}/${post.userId}`, { headers })
        const authorJSON = await author.json()

        post.isExpanded = false; //tmp
        post.name = authorJSON.name; 
      }));
      state.commit("setPosts", response);
    },
    async getAuthors(state) {
      const authors = await fetch (userUrl, { headers })
      const authorsJSON = await authors.json()

      
      state.commit("setAuthors", authorsJSON);
    }
  },
  getters: {
    getAllPosts: state => state.posts,
  }
});