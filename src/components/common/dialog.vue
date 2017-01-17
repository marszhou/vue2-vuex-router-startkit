<template>
  <span>
    <span class='dialog-trigger'>
      <slot name='trigger'></slot>
    </span>

    <div class="modal" :id="dialogId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">{{title}}</h4>
          </div>
          <div class="modal-body">
            <slot name='dialog-body'></slot>
          </div>
          <div class="modal-footer">
            <button v-for='button of buttons'
                    type="button"
                    :class="'btn btn-' + button.type"
                    data-dismiss="modal"
                    @click='handleButtonClick(button, $event)'>
              {{button.label}}
            </button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import {DialogEvents} from './consts'

export default {

  name: 'dialog',

  props: {
    title: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: () => [
        {label: '关闭', type: 'default', close: true, name: 'cancel'},
        {label: '保存', type: 'primary', name: 'save'},
      ]
    },
    dialogId: {
      type: String,
      required: true
    },

    autoShow: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {

    }
  },

  methods: {
    $dialog() {
      return $('#' + this.dialogId)
    },
    show() {
      this.$dialog().modal()
    },
    toggle() {
      this.$dialog().modal('toggle')
    },
    close() {
      this.$dialog().modal('hide')
    },
    hide() {
      this.close()
    },

    handleShow() {
      // console.log('dialog show')
      this.$emit(DialogEvents.Show)
    },
    handleShown() {
      // console.log('dialog shown')
      this.$emit(DialogEvents.Shown)
    },
    handleHide() {
      // console.log('dialog hide')
      this.$emit(DialogEvents.Hide)
    },
    handleHidden() {
      // console.log('dialog hidden')
      this.$emit(DialogEvents.Hidden)
    },
    handleButtonClick(button, e) {
      e.preventDefault()
      e.stopPropagation()
      if (button.close) {
        this.close()
      }
      let args = Array.prototype.slice.call(arguments) // button, event, dialog
      args.push(this)
      this.$$emit(DialogEvents.ButtonClick, args)
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$dialog().on('show.bs.modal', this.handleShow)
                    .on('shown.bs.modal', this.handleShown)
                    .on('hide.bs.modal', this.handleHide)
                    .on('hidden.bs.modal', this.handleHidden)

      // console.log('created', this.$el, jQuery(this.$el).children('.dialog-trigger').children())
      $(this.$el).children('.dialog-trigger')
                 .children()
                 .attr('data-toggle', 'modal')
                 .attr('data-target', `#${this.dialogId}`)
      if (this.autoShow) {
        this.show()
      }
    })
  },

  beforeDestroy() {
    this.$dialog().off('show.bs.modal')
                  .off('shown.bs.modal')
                  .off('hide.bs.modal')
                  .off('hidden.bs.modal')
  }
}
</script>

<style lang="css" scoped>
</style>