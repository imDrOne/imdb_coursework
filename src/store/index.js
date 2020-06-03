import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tops: {},
    actersAtTopFilms: [],
    actersAndAwards: []
  },
  mutations: {
    UPDATE_STORE (state, payload) {
      state.tops = payload
    },
    UPDATE_ACTERS_AT_TOP_FILMS (state, payload) {
      state.actersAtTopFilms = payload
    },
    UPDATE_ACTERS_AWARDS (state, payload) {
      state.actersAndAwards = payload
    }
  },
  actions: {
    async UPDATE_STORE ({ commit }) {
      await axios
        .get('http://localhost:4000/api/films')
        .then(response => {
          commit('UPDATE_STORE', response.data.tops)
          commit('UPDATE_ACTERS_AT_TOP_FILMS', response.data.actersAtTopFilms)
          commit('UPDATE_ACTERS_AWARDS', response.data.actersInformation)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    GET_TOP_FILMS: state => state.tops,
    GET_ACTERS_AT_TOP_FILMS: state => state.actersAtTopFilms,
    GET_INFO_ABOUT_ACTER: state => id => {
      for (const obj of state.actersAndAwards) {
        if (obj.id === id) {
          return obj
        }
      }
    }
  },
  modules: {
  }
})
