<template>
  <div id="app">
    <counter/>
    <foo/>
    <bs-dialog title='hey' dialog-id='dialogId' @dialog:btn-click='handleDialogBtnClick'>
      <button slot='trigger'
              type="button"
              class="btn btn-primary">dialog</button>
      <div slot='dialog-body'>hello world</div>

    </bs-dialog>
    <router-view/>
    <router-link :to='{name: "foo"}'>foo</router-link>
    <router-link :to='{name: "bar"}'>bar</router-link>
    <router-link :to='{name: "home"}'>home</router-link>
  </div>
</template>

<script>
import Counter from 'components/counter'
import Foo from 'components/examples/foo'
import Dialog from 'components/common/dialog'

export default {
  name: 'app',
  components: {
    Counter, Foo, 'bs-dialog': Dialog
  },
  methods: {
    handleDialogBtnClick(e) {
      console.log(arguments)
    }
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
