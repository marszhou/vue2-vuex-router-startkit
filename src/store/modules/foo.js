import {foo as types} from '../mutation-types'
import {resourceMapping} from 'utils/func'

const prefix = 'foo_'
const state = {
  items: []
}

const getters = {
  ...resourceMapping({
    items: state => state.items
  }, prefix)
}

const actions = {
  ...resourceMapping({
    add({ commit }, item) {
      commit(types.add, item)
    }
  }, prefix)
}

const mutations = {
  [types.add] (state, item) {
    state.items.push(item)
  }
}

export default {
  state, getters, actions, mutations
}
