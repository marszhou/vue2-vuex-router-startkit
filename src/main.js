// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/js/bootstrap.js')

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import store from './store/store'

Vue.filter('translate', (v) => `translate(${v})`)
Vue.filter('embrace', (v, func, ...params) => `${func}(${v}${params.length > 0 ? ',' + params.join(',') : ''})`)

Vue.mixin({
  methods: {
    $$dispatch(eventName, args) {
      var argsCopy = Array.prototype.slice.call(args)
      argsCopy.unshift(eventName)
      this.$dispatch.apply(this, argsCopy)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  store,
  el: 'app',
  template: '<App/>',
  components: { App }
})
