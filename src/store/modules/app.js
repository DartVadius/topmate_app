import { ApiService } from '@/api/ApiService'
import {
  SET_ERROR,
  SET_FAQ,
  ADD_FAQ,
  EDIT_FAQ,
  DELETE_FAQ,
  SET_MODELS,
  SET_PARTS,
  EDIT_MODEL,
  EDIT_PART,
  ADD_MODEL,
  ADD_PART,
  DELETE_MODEL,
  DELETE_PART
} from '../mutationsType'

const state = {
  errors: null,
  faq: [],
  models: [],
  parts: []
}

const getters = {
  faq (state) {
    return state.faq
  },
  models (state) {
    return state.models
  },
  parts (state) {
    return state.parts
  }
}

const actions = {
  getModels ({ commit }) {
    return new Promise((resolve, reject) => {
      ApiService.get('/api/calculator/models').then(response => {
        commit(SET_MODELS, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  getParts ({ commit }) {
    return new Promise((resolve, reject) => {
      ApiService.get('/api/calculator/parts').then(response => {
        commit(SET_PARTS, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  createModel ({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post('/api/calculator/models', credentials).then(response => {
        commit(ADD_MODEL, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  editModel ({ commit }, [id, credentials]) {
    return new Promise((resolve, reject) => {
      ApiService.patch(`/api/calculator/models/${id}`, credentials).then(response => {
        commit(EDIT_MODEL, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  deleteModel ({ commit }, id) {
    return new Promise((resolve, reject) => {
      ApiService.delete(`/api/calculator/models/${id}`).then(() => {
        commit(DELETE_MODEL, id)
        resolve(true)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  createPart ({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post('/api/calculator/parts', credentials).then(response => {
        commit(ADD_PART, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  editPart ({ commit }, [id, credentials]) {
    return new Promise((resolve, reject) => {
      ApiService.patch(`/api/calculator/parts/${id}`, credentials).then(response => {
        commit(EDIT_PART, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  deletePart ({ commit }, id) {
    return new Promise((resolve, reject) => {
      ApiService.delete(`/api/calculator/parts/${id}`).then(() => {
        commit(DELETE_PART, id)
        resolve(true)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  attachPart ({ commit }, [modelId, partId, credentials]) { // calculator/models/{car_model_id}/parts/{car_part_id}
    return new Promise((resolve, reject) => {
      ApiService.post(`/api/calculator/models/${modelId}/parts/${partId}`, credentials).then(response => {
        // commit(ADD_PART, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  detachPart ({ commit }, [modelId, partId]) { // calculator/models/{car_model_id}/parts/{car_part_id}
    return new Promise((resolve, reject) => {
      ApiService.delete(`/api/calculator/models/${modelId}/parts/${partId}`).then(response => {
        // commit(ADD_PART, response.data)
        resolve(true)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  getFaq ({ commit }) {
    return new Promise((resolve, reject) => {
      ApiService.get('/api/faq').then(response => {
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
      ApiService.post('/api/faq', credentials).then(response => {
        commit(ADD_FAQ, response.data)
        resolve(response.data)
      }).catch(error => {
        commit(SET_ERROR, error)
        reject(error)
      })
    })
  },
  editFaq ({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.patch(`/api/faq/${credentials.id}`, credentials.data).then(response => {
        commit(EDIT_FAQ, response.data)
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
  [EDIT_FAQ] (state, value) {
    const index = state.faq.map(e => e.id).indexOf(value.id)
    state.faq[index] = value
    state.errors = null
  },
  [DELETE_FAQ] (state, value) {
    const index = state.faq.map(e => e.id).indexOf(value.id)
    delete state.faq[index]
    state.errors = null
  },
  [SET_MODELS] (state, value) {
    state.models = value
    state.errors = null
  },
  [ADD_MODEL] (state, value) {
    state.models.push(value)
    state.errors = null
  },
  [EDIT_MODEL] (state, value) {
    const index = state.models.map(e => e.id).indexOf(value.id)
    state.models[index] = value
    state.errors = null
  },
  [DELETE_MODEL] (state, value) {
    const index = state.models.map(e => e.id).indexOf(value.id)
    delete state.models[index]
    state.errors = null
  },
  [SET_PARTS] (state, value) {
    state.parts = value
    state.errors = null
  },
  [ADD_PART] (state, value) {
    state.parts.push(value)
    state.errors = null
  },
  [EDIT_PART] (state, value) {
    const index = state.parts.map(e => e.id).indexOf(value.id)
    state.parts[index] = value
    state.errors = null
  },
  [DELETE_PART] (state, value) {
    const index = state.partial.map(e => e.id).indexOf(value.id)
    delete state.partial[index]
    state.errors = null
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
