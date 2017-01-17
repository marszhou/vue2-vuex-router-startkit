import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import {sync} from 'vuex-router-sync'

import Home from 'pages/home'
import Foo from 'pages/foo'
import Bar from 'pages/bar'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/foo',
    component: Foo,
    name: 'foo',
    children: [
      {
        path: 'bar',
        component: Bar,
        name: 'bar'
      }
    ]
  }
]

module.exports = (store) => {
  const router = new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      return {x: 0, y: 0}
    },
    linkActiveClass: 'current',
    routes: routes
  })

  router.beforeEach((to, from, next) => {
    next()
  })

  router.afterEach(route => {
  })

  window.router = router
  sync(store, router)

  return router
}
