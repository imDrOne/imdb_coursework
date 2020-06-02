import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tops: {},
    actersWithOscars: []
  },
  mutations: {
    UPDATE_STORE (state, payload) {
      state.tops = payload
    },
    UPDATE_ACTERS_WITH_OSCARS (state, payload) {
      state.actersWithOscars = payload
    }
  },
  actions: {
    async UPDATE_STORE ({ commit }, payload) {
      await axios
        .get('http://localhost:4000/api/films')
        .then(response => {
          commit('UPDATE_STORE', response.data.tops)
          commit('UPDATE_ACTERS_WITH_OSCARS', response.data.actersWithOscars)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    GET_TOP_FILMS: state => state.tops,
    GET_ACTERS_WITH_OSCARS: state => state.actersWithOscars
  },
  modules: {
  }
})
