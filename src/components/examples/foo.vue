<template>
<div>
<ul>
  <li v-for='item of items'>{{item}}</li>
</ul>
<button @click='foo_add(Math.random())'>add</button>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  name: 'component_name',

  computed: {
    ...mapGetters({
      items: 'foo_items'
    })
  },

  methods: {
    ...mapActions([
      'foo_add'
    ])
  }
}
</script>

<style lang="css" scoped>
</style>