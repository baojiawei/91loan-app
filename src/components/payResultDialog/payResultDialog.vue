<template>
  <transition name="pay-result-dialog-fade">
    <div class="pay-result-dialog" v-show="isPayResultDialogShow" @click.self="toggleShow">
      <div class="pay-result-wrapper">
        <div>
          <img src="./payResult.png" alt="" class="pay-result-img">
        </div>
        <div class="tit">
          <span>请确认支付是否完成</span>
        </div>
        <button
          class="pay-success"
          @click.self.stop="_getOrderStatus($event)"
          eventId="getreport_query"
          v-track-event="{category:'确定弹窗组件', action:'click',opt_label: '查询支付结果'}">查询支付结果</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { queryPayResult02 } from 'api/report'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  props: {
    isPayResultDialogShow: {
      type: Boolean,
      default: false
    },
    payData: {
      type: Object
    }
  },
  methods: {
    toggleShow () {
      this.isPayResultDialogShow = !this.isPayResultDialogShow
      this.$emit('toggleShowPayResultDialog')
    },
    _getOrderStatus (e) {
      const _self = this
      const id = this.payData.id
      _self.setOrderData('')
      queryPayResult02({
        id: id
      }).then(res => {
        this.toggleShow()
        window.location.reload()
      })
    },
    ...mapMutations({
      setOrderData: 'ORDER_DATA'
    })
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .animation-wrapper-enter, .animation-wrapper-leave-active
    opacity 0
  .animation-wrapper-enter-active, .animation-wrapper-leave-active
    transition all .3s ease-in-out
  .pay-result-dialog
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 99
    background-color: rgba(0, 0, 0, 0.3)
    display: flex
    align-items: center
    justify-content: center
    &.pay-result-dialog-fade-enter-active
      animation: dialog-fadein 0.3s
      .pay-result-wrapper
        animation: dialog-zoom 0.3s
    .pay-result-wrapper
      width: 540px
      background: #ffffff
      padding: 50px 0
      border-radius:24px
      text-align: center
      box-sizing: border-box
      .tit
        font-size: 36px
        font-family: PingFangSC-Regular
        font-weight: 400
        color:rgba(18,33,62,1)
        margin: 50px auto
      .pay-result-img
        width: 540px
        height: 200px
        margin: 0 auto
      .pay-success
        width:360px
        height:80px
        background:linear-gradient(90deg,rgba(255,134,76,1) 0%,rgba(252,91,48,1) 100%)
        box-shadow:0px 6px 20px 0px rgba(253,103,56,0.46)
        border-radius:48px
        font-size: 32px
        font-family: PingFangSC-Regular
        font-weight: 400
        color: #ffffff
        margin-top: 8px
      .pay-fail
        width: 400px
        height: 72px
        border-radius: 48px
        border: 1px solid rgba(255,134,76,1)
        font-size: 30px
        font-family: PingFangSC-Regular
        font-weight: 400
        color:rgba(255,134,76,1)
        margin-top: 24px

  .animationWrapper
    background #FFFFFF
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    > div:first-child
      width 750px
      height 532px
      > img[lazy=loading]
        transform: scale(0.2)
        margin: 0 auto
      > img[lazy=loaded]
        width: 100%
        height: 100%
    .desc
      font-size: 36px
      text-align: center
  @keyframes dialog-fadein
    0%
      opacity: 0
    100%
      opacity: 1

  @keyframes dialog-zoom
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)
</style>
