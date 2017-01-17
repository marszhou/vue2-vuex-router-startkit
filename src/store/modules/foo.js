import {foo as types} from '../mutation-types'
import {resourceMapping} from 'utils/func'

const prefix = 'foo/'
const state = {
  items: []
}

const getters = {
  ...resourceMapping({
    items: state => state.items
  }, prefix)
}

console.log(getters)

const actions = {

}

const mutations = {

}

export default {
  state, getters, actions, mutations
}
