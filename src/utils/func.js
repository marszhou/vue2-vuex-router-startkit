import {sprintf} from 'sprintf-js'

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
