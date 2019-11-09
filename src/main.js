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
import Element from 'element-ui'

Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.use(Element)
Vue.config.productionTip = false

ApiService.init(store).then(() => {
  router.beforeEach((to, from, next) => {
    if (!to.meta.isPublic && !store.state.auth.isAuthenticated) {
      router.push('adminio/login')
    }
    if (!to.meta.isPublic && store.state.auth.isAuthenticated) {
      if (to.meta.restricted.includes(store.state.auth.userRole)) {
        router.push('adminio/welcome')
      }
    }
    console.log(store.state.auth.userRole)
    next()
  })

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
