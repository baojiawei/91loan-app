<template>
  <div class="external-page-wrapper">
    <nav-bar :title="title"></nav-bar>
    <div class="frame">
      <iframe
        ref="myFrame"
        class="frame"
        :src="url"
        frameborder="0"
        width="100%"
        height="100%"
        scrolling="auto"
      ></iframe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { showAppTabBar } from 'common/js/utils-app'
export default {
  data () {
    return {
      title: '贷款产品',
      url: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    const SHOW_BOTTOM_TAB_BAR = to.params.showBottomTabBar
    showAppTabBar(SHOW_BOTTOM_TAB_BAR)
    next()
  },
  created () {
    const title = this.$route.params.title
    if (title !== undefined) {
      this.title = this.$route.params.title
    }
    this.url = this.$route.params.url
  },
  mounted () {
    var _self = this
    if (this.url.indexOf('51loan-common-web') > -1) {
      this.$refs.myFrame.style.fontSize = 14 + 'px'
    }
    _self.$createToast().show()
    this.$refs.myFrame.onload = function () {
      _self.$createToast().hide()
    }
  },
  components: {
    navBar: navBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.external-page-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  background: #fff;

  .frame {
    -webkit-overflow-scrolling: touch;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
}
</style>
