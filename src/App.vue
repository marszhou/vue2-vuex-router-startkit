<template>
  <div id="app">
    <counter/>
    <foo/>
    <bs-dialog title='hey' dialog-id='dialogId' @dialog:btn-click='handleDialogBtnClick'>
      <button slot='trigger'
              type="button"
              class="btn btn-primary">dialog</button>
      <div slot='dialog-body'>
        <span>hello world</span>
        <photoshop-picker v-model="colors" @change-color="onChange"></photoshop-picker>
        <material-picker v-model="colors" @change-color="onChange"></material-picker>
        <compact-picker v-model="colors" @change-color="onChange"></compact-picker>
        <swatches-picker v-model="colors" @change-color="onChange"></swatches-picker>
        <slider-picker v-model="colors" @change-color="onChange"></slider-picker>
        <sketch-picker v-model="colors" @change-color="onChange"></sketch-picker>
        <chrome-picker v-model="colors" @change-color="onChange"></chrome-picker>
      </div>

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
import { Photoshop, Material, Compact, Swatches, Slider, Sketch, Chrome } from 'vue-color'

export default {
  name: 'app',
  components: {
    Counter, Foo, 'bs-dialog': Dialog,
    'photoshop-picker': Photoshop,
    'material-picker': Material,
    'compact-picker': Compact,
    'swatches-picker': Swatches,
    'slider-picker': Slider,
    'sketch-picker': Sketch,
    'chrome-picker': Chrome
  },
  data: function() {
    return {
      colors: {}
    }
  },
  methods: {
    handleDialogBtnClick(e) {
      console.log(arguments)
    },
    onChange() {
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
