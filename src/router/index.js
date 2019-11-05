import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { isPublic: true },
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: { isPublic: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/adminio/register',
    name: 'register',
    meta: { isPublic: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/adminio/Register')
  },
  {
    path: '/adminio/login',
    name: 'login',
    meta: { isPublic: true },
    component: () => import(/* webpackChunkName: "login" */ '@/views/adminio/Login')
  },
  {
    path: '/adminio/panel',
    name: 'adminPanel',
    meta: { isPublic: false },
    component: () => import(/* webpackChunkName: "panel" */ '@/views/adminio/AdminPanel')
  },
  {
    path: '/adminio/welcome',
    name: 'welcome',
    meta: { isPublic: false },
    component: () => import(/* webpackChunkName: "welcome" */ '@/views/adminio/Welcome')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
