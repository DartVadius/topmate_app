import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ApiService } from './api/ApiService'
import VeeValidate from 'vee-validate'
import './plugins/element'
import 'bootstrap/dist/js/bootstrap.bundle.min'

Vue.use(BootstrapVue)
const config = {
  errorBagName: 'errorBags',
  fieldsBagName: 'fieldBags'
}
Vue.use(VeeValidate, config)
Vue.config.productionTip = false

ApiService.init(store).then(() => {
  router.beforeEach((to, from, next) => {
    if (to.meta.isPublic) {
      next()
    }
    if (!to.meta.isPublic && store.state.auth.isAuthenticated) {
      if (to.meta.restricted.includes(store.state.auth.userRole)) {
        next(false)
      } else {
        next()
      }
    }
    if (!to.meta.isPublic && !localStorage.getItem('access_token')) {
      router.push('/').catch(() => {})
    }
    if (!to.meta.isPublic && localStorage.getItem('access_token')) {
      store.dispatch('checkAuth').then(() => {
        if (store.state.auth.isAuthenticated) {
          if (to.meta.restricted.includes(store.state.auth.userRole)) {
            router.push('/adminio/welcome').catch(() => {})
          } else {
            next()
          }
        } else {
          router.push('/adminio/login').catch(() => {})
        }
      }).catch(err => {
        console.log(err)
      })
    }
    next()
  })

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
