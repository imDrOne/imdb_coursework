import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temp: []
  },
  mutations: {
    UPDATE_STORE (state, payload) {
      state.temp.push(payload)
    }
  },
  actions: {
    async UPDATE_STORE (ctx, payload) {
      await axios
        .get('http://localhost:4000/index')
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }
  },
  modules: {
  }
})
