import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tops: {}
  },
  mutations: {
    UPDATE_STORE (state, payload) {
      state.tops = payload
    }
  },
  actions: {
    async UPDATE_STORE ({ commit }, payload) {
      await axios
        .get('http://localhost:4000/api/films')
        .then(response => {
          commit('UPDATE_STORE', response.data.tops)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    GET_TOP_FILMS: state => state.tops
  },
  modules: {
  }
})
