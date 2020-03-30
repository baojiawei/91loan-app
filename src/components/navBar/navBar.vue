<template>
  <div class="navBar">
    <i class="icon icon-back-arrow" @click="goBack"></i>
    <div class="title">{{title}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import { checkEnvironmentIn91, back, showQuitAlert } from 'common/js/utils-app'

export default {
  props: {
    title: {
      type: String
    },
    routerBackName: {
      type: String,
      default: ''
    },
    useClientBack: {
      type: Boolean,
      default: false
    },
    showQuitAlert: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack: function () {
      if (this.routerBackName === '') {
        if (this.showQuitAlert) {
          showQuitAlert()
        } else if (checkEnvironmentIn91() && this.useClientBack) {
          back()
        } else {
          this.$router.back()
        }
      } else {
        this.$router.push({ name: this.routerBackName })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .navBar
    width: 100%
    height: 96px
    line-height: 96px
    text-align: center
    position: relative
    border-bottom-1px();
    background: #fff
    .icon-back-arrow
      font-size: $font-size-44
      position: absolute
      top: 26px
      left: 24px
    .title
      font-size: $font-size-34
</style>
