import {sprintf} from 'sprintf-js'
import { mapGetters, mapActions } from 'vuex'

export function genCursorUrlData(code, fontSize) {
  let canvas = document.createElement('canvas')
  canvas.width = fontSize
  canvas.height = fontSize
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = '#000000'
  ctx.font = fontSize + 'px FontAwesome'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(code, fontSize/2, fontSize/2)
  var dataURL = canvas.toDataURL('image/png')

  return dataURL
}

export function percent(val) {
  return sprintf('%0.1f%%', val * 100)
}

export function uniqueKey() {
  return Math.random().toString(36).substring(7)
}

export function resourceMaker(asyncResources = [], syncResources = [], prefix = '') {
  let ret = _.reduce(asyncResources, (ret, val) => {
    ret[`${val}`] = `${prefix}${val}`
    ret[`${val}_request`] = `${prefix}${val}_request`
    ret[`${val}_failed`] = `${prefix}${val}_failed`
    return ret
  }, {})

  ret = _.reduce(syncResources, (ret, val) => {
    ret[`${val}`] = `${prefix}${val}`
    return ret
  }, ret)

  return ret
}

export function resourceMapping(resource, prefix = '') {
  let keys = _.keys(resource)
  return _.reduce(keys, (ret, key) => {
    ret[prefix + key] = resource[key]
    return ret
  }, {})
}

export function resourceUnpack(resource, prefix = '') {
  if (_.isArray(resource)) {
    return _.reduce(resource, (ret, r) => {
      ret[r] = prefix + r
      return ret
    }, {})
  }
  return _.reduce(resource, (ret, key, value) => {
    ret[key] = prefix + value
    return ret
  }, {})
}

export function resourceMapGetters(resource, prefix) {
  return mapGetters(resourceUnpack(resource, prefix))
}

export function resourceMapActions(resource, prefix) {
  return mapActions(resourceUnpack(resource, prefix))
}

export function generateGetterCluster(state) {
  return _.reduce(_.keys(state), (ret, key) => {
    ret[key] = state => {
      console.log(state)
      return state[key]
    }
    return ret
  }, {})
}

