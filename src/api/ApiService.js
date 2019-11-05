import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { CHECK_AUTH } from '@/store/actionsType'

export const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = process.env.VUE_APP_baseUrl
    Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'
    Vue.axios.defaults.headers.common['Cache-Control'] = 'no-cache'
    Vue.axios.defaults.headers.common['Accept'] = 'application/json'
    if (localStorage.getItem('access_token')) {
      console.log('init')
      this.$store.dispatch(CHECK_AUTH)
    }
  },
  setToken (token) {
    Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  },
  query (resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },
  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },
  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },
  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },
  put (resource, params) {
    return Vue.axios.put(`${resource}`, params)
  },
  delete (resource) {
    return Vue.axios.delete(resource)
  }
}

export const Auth = {
  login (credentials) {
    credentials['grant_type'] = process.env.VUE_APP_grant_type
    credentials['client_id'] = process.env.VUE_APP_client_id
    credentials['client_secret'] = process.env.VUE_APP_client_secret
    return ApiService.post('/oauth/token/', credentials).then(response => {
      localStorage.setItem('access_token', response.data['access_token'])
      localStorage.setItem('refresh_token', response.data['refresh_token'])
      ApiService.setToken(response.data['access_token'])
      return response.data
    })
  },
  register (registrationData) {
    return ApiService.post('/register/', registrationData).then(response => {
      Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data['access_token']
      return response.data
    })
  },
  user () {
    return ApiService.get('/user').then(response => {
      return response.data
    })
  }
}
