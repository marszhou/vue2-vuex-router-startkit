import {foo as types} from '../mutation-types'
import {resourceMapping} from 'utils/func'

const prefix = 'foo_'
const state = {
  items: []
}

const getters = {
  items: state => state.items
}

const actions = {}

const mutations = {}

// -- add item
actions.add = ({ commit }, item) => {
  commit(types.add, item)
}
mutations[types.add] = (state, item) => {
  state.items.push(item)
}
//

// -- remove all
actions.removeAll = ({ commit }) => {
  commit(types.removeAll)
}
mutations[types.removeAll] = (state) => {
  state.items = []
}
//

module.exports = {
  state,
  getters: resourceMapping(getters, prefix),
  actions: resourceMapping(actions, prefix),
  mutations,
  prefix
}
