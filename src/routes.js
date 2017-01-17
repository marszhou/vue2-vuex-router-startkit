import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from 'pages/home'
import Foo from 'pages/foo'
import Bar from 'pages/bar'

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: true,
  linkActiveClass: 'current',
  routes: [
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
})

export default router
