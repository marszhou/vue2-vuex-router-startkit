<template>
<div>
<ul>
  <li v-for='item of items'>{{item}}</li>
</ul>
<button @click='add(Math.random())'>add</button>
<button @click='removeAll'>remove all</button>
</div>
</template>

<script>
import { resourceMapGetters, resourceMapActions } from 'utils/func'
const {prefix, state} = require('store/modules/foo')

export default {
  name: 'foo',
  computed: {
    ...resourceMapGetters(_.keys(state), prefix)
  },

  methods: {
    ...resourceMapActions([
      'add'
    ], prefix),

    removeAll() {
      this.$store.dispatch('foo_removeAll', 1)
    }
  }
}
</script>

<style lang="css" scoped>
</style>