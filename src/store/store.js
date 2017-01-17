import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// -- sample state/mutation/action/getter
const state = {
  count: 0
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
// -- end

import foo from './modules/foo'

export default new Vuex.Store({
  state, mutations, actions, getters,
  modules: {
    foo
  },
  strict: debug,
  plugins: debug ? [
    createLogger({
      collapsed: false,
      // transformer(state) {
      //   return state.count
      // },
      ignored(type) {
        return [
          'router/ROUTE_CHANGED'
        ].indexOf(type) > -1
      }
    })
  ] : []
})
