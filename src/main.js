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

Vue.use(BootstrapVue)
Vue.use(VeeValidate)
Vue.config.productionTip = false

ApiService.init()

console.log(process.env.VUE_APP_TITLE)

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !store.state.auth.isAuthenticated) {
    router.push('adminio/login')
    if (store.state.auth.userRole === 'user') {
      router.push('adminio/welcome')
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
