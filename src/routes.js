import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from 'pages/home'

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: true,
  linkActiveClass: 'current',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})

export default router
