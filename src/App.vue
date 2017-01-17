<template>
  <div id="app">
    <counter/>
    <foo/>
    <router-view/>
    <router-link :to='{name: "foo"}'>foo</router-link>
    <router-link :to='{name: "bar"}'>bar</router-link>
    <router-link :to='{name: "home"}'>home</router-link>
  </div>
</template>

<script>
import Counter from 'components/counter'
import Foo from 'components/examples/foo'

export default {
  name: 'app',
  components: {
    Counter, Foo
  },
  mounted() {
    let loadingEle = document.querySelector('#landing_loading')
    if (loadingEle) {
      loadingEle.classList.add('done')
      setTimeout(function(el) {
        el.parentNode.removeChild(el)
      }, 1500, loadingEle)
    }
  }
}
</script>

<style>
</style>
