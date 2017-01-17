import {resourceMaker} from 'utils/func'

export const foo = resourceMaker([], [
  'add', 'get', 'list', 'delete'
], 'foo/')
