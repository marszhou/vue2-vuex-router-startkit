import Vue from 'vue'
import App from './App'

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/js/bootstrap.js')

import store from './store/store'
const router = require('./routes')(store)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: 'app',
  template: '<App/>',
  components: { App }
})
