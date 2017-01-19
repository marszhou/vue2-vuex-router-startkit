import Vue from 'vue'
import App from './App'

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/js/bootstrap.js')

import store from './store/store'
const router = require('./routes')(store)

Vue.mixin({
  methods: {
    $$emit(eventName, args) {
      var argsCopy = Array.prototype.slice.call(args)
      argsCopy.unshift(eventName)
      this.$emit.apply(this, argsCopy)
    },
    $fire(eventName, ...args) {
      eventHub.$emit(eventName, ...args)
    },
    $listen(eventName, func) {
      eventHub.$on(eventName, func)
      if (!this.$eventStack) {
        this.$eventStack = []
        this.$eventStack.push({name: eventName, handler: func})
      }
    }
  },
  beforeDestroy() {
    if (this.$eventStack && _.isArray(this.$eventStack)) {
      this.$eventStack.forEach((event) => {
        eventHub.$off(event.name, event.handler)
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: 'app',
  template: '<App/>',
  components: { App }
})
