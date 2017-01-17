<template>
  <div id="app">
    <counter/>
    <foo/>
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
