import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tops: {},
    actersAtTopFilms: [],
    actersAndAwards: [],
    filmsInformation: []
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
    },
    UPDATE_FILMS_INFORMATION (state, payload) {
      state.filmsInformation = payload
    }
  },
  actions: {
    async UPDATE_STORE ({ commit }) {
      await axios
        .get('https://pure-waters-67784.herokuapp.com/api/films')
        .then(response => {
          commit('UPDATE_STORE', response.data.tops)
          commit('UPDATE_ACTERS_AT_TOP_FILMS', response.data.actersAtTopFilms)
          commit('UPDATE_ACTERS_AWARDS', response.data.actersInformation)
          commit('UPDATE_FILMS_INFORMATION', response.data.filmsAndTags)
        })
        .catch()
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
    },
    GET_INFO_ABOUT_FILM: state => id => {
      const filmsInfo = state.filmsInformation
      const filmById = filmsInfo.find(el => el.id === id)
      const acters = state.actersAndAwards
      const actersAtFilm = []

      for (let j = 0; j <= acters.length - 1; j++) {
        for (let k = 0; k <= acters[j].filmInfo.length - 1; k++) {
          if (filmById.id === acters[j].filmInfo[k].id_film) {
            const { filmInfo, ...acterInfo } = acters[j]
            actersAtFilm.push(acterInfo)
          }
        }
      }

      return [filmById, actersAtFilm]
    }
  },
  modules: {
  }
})
