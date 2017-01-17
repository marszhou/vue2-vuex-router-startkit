import {resourceMaker} from 'utils/func'

export const foo = resourceMaker([], [
  'add', 'get', 'list', 'remove', 'removeAll'
], 'foo/')
