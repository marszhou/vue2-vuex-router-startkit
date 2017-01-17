<template>
  <div id="app">
    <counter/>
  </div>
</template>

<script>
import Counter from 'components/counter'

export default {
  name: 'app',
  components: {
    Counter
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
