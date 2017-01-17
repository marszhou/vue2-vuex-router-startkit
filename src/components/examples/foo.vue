<template>
<div>
<ul>
  <li v-for='item of items'>{{item}}</li>
</ul>
<button @click='foo_add(Math.random())'>add</button>
<button @click='removeAll'>remove all</button>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { resourceUnpack } from 'utils/func'
const {prefix} = require('store/modules/foo')

export default {
  name: 'foo',
  computed: {
    ...mapGetters(resourceUnpack({
      items: 'items'
    }, prefix))
  },

  methods: {
    ...mapActions(resourceUnpack([
      'add'
    ], prefix)),

    removeAll() {
      this.$store.dispatch('foo_removeAll', 1)
    }
  }
}
</script>

<style lang="css" scoped>
</style>