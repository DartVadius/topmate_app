import { Auth, ApiService } from '@/api/ApiService'
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH } from '../actionsType'
import { SET_AUTH, PURGE_AUTH, SET_ERROR, SET_CURRENT_USER, SET_USER_ROLE } from '../mutationsType'
import Vue from 'vue'

const state = {
  errors: null,
  currentUser: {},
  isAuthenticated: false,
  userRole: null
}

const getters = {
  currentUser (state) {
    return state.currentUser
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  },
  userRole (state) {
    return state.userRole
  }
}

const actions = {
  [LOGIN] ({ commit }, credentials) {
    return new Promise(resolve => {
      Auth.login(credentials).then(response => {
        commit(SET_AUTH)
        resolve(response)
      }).catch(error => {
        commit(SET_ERROR, error)
      })
    })
  },
  [LOGOUT] ({ commit }) {
    commit(PURGE_AUTH)
  },
  [REGISTER] ({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      Auth.register(credentials).then((response) => {
        commit(SET_AUTH)
        resolve(response)
      }).catch((error) => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  [CHECK_AUTH] ({ commit }) {
    return new Promise((resolve, reject) => {
      let token = localStorage.getItem('access_token')
      if (token) {
        ApiService.setToken(token)
        Auth.user().then(response => {
          commit(SET_AUTH)
          commit(SET_CURRENT_USER, response)
          commit(SET_USER_ROLE, response)
          resolve(true)
        }).catch(error => {
          commit(SET_ERROR, error)
          commit(PURGE_AUTH)
          reject(error)
        })
      } else {
        commit(PURGE_AUTH)
        resolve(false)
      }
    })
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error.response
  },
  [SET_AUTH] (state) {
    state.isAuthenticated = true
    state.errors = {}
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.currentUser = {}
    state.errors = null
    state.userRole = null
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    Vue.axios.defaults.headers.common['Authorization'] = null
  },
  [SET_CURRENT_USER] (state, response) {
    state.currentUser = response.data
  },
  [SET_USER_ROLE] (state, response) {
    state.userRole = response.data.role
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
