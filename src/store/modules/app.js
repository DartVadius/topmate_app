import { ApiService } from '@/api/ApiService'
import { SET_ERROR, SET_FAQ, ADD_FAQ, DELETE_FAQ } from '../mutationsType'

const state = {
  errors: null,
  faq: []
}

const getters = {
  faq (state) {
    return state.faq
  }
}

const actions = {
  getFaq ({ commit }) {
    return new Promise((resolve, reject) => {
      ApiService.get('/api/faq').then(response => {
        console.log(response)
        commit(SET_FAQ, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  createFaq ({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post('/api/faq').then(response => {
        commit(ADD_FAQ, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  deleteFaq ({ commit }, faqId) {
    return new Promise((resolve, reject) => {
      ApiService.delete(`/api/faq/${faqId}`).then(() => {
        commit(DELETE_FAQ, faqId)
        resolve(true)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error.response
  },
  [SET_FAQ] (state, value) {
    state.faq = value
    state.errors = null
  },
  [ADD_FAQ] (state, value) {
    state.faq.push(value)
    state.errors = null
  },
  [DELETE_FAQ] (state, value) {
    const index = state.faq.map(e => e.id).indexOf(value)
    delete state.faq[index]
    state.errors = null
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
