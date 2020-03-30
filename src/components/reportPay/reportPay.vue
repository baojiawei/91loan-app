<template>
  <transition name="slideUp">
    <div class="black" v-show="isPayWrapperShow" @click.stop.self="toggleShowPayWrapper" ref="black">
      <div class="report-pay-wrapper">
        <div class="order-info">
          <div class="tit">订单内容：</div>
          <div class="info">
            <img :src="orderAvatar" alt="" class="order-avatar">
            <span class="report-name">{{reportData.name}}</span>
            <div class="price-detail">
              <img src="./priceTip.png" alt="">
              <div class="discount"><span>¥</span><span>{{reportData.discount | formatMoney}}</span></div>
              <div class="origin-pirce">¥{{reportData.amount | formatMoney}}</div>
            </div>
          </div>
          <div class="pay-way">
            <div class="tit">支付方式：</div>
            <ul class="way_ul">
              <li
                v-for="(item, index) in payWay"
                :key="index"
                :class="{checked: item.isActive}"
                @click="setActive(index)">
                <img :src=item.imgUrl alt="">
                <span>{{item.name}}</span>
                <i></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="pay-tool-wrapper">
          <div class="final-price">
            付款金额:<span>¥{{reportData.discount | formatMoney}}</span>
          </div>
          <button
            class="pay-submit-btn"
            @click="payMoney($event)"
            eventId="getreport_pay"
            v-track-event="{category:'提额支付-' + reportData.name, action:'click',opt_label: '立即支付'}">立即支付
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { isWx, addBd } from 'common/js/utils-app'
import { checkClientPlatform } from 'common/js/utils'
import { addReportForWx } from 'api/report'
import { mapMutations } from 'vuex'

const ORDER_TYPE_H5 = 1
const ORDER_TYPE_WX = 2
export default {
  data () {
    return {
      usePoints: false,
      payWay: [
        {
          name: '微信',
          imgUrl: require('./icon-weChat.png'),
          isActive: true
        }
      ],
      isJumiApp: '',
      orderAvatar: '',
      aliPayHtml: ''
    }
  },
  props: {
    isPayWrapperShow: {
      type: Boolean,
      default: false
    },
    reportData: {
      type: Object
    }
  },
  watch: {
    isPayWrapperShow (newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$refs.black.style = 'background: rgba(0, 0, 0, 0.1)'
        }, 200)
      } else {
        this.$refs.black.style = ''
      }
    }
  },
  filters: {
    formatMoney (item) {
      return item / 100
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.isJumiApp = isWx()
      this.orderAvatar = require('./icon4.png')
    },
    toggleShowPayWrapper () {
      this.isPayWrapperShow = !this.isPayWrapperShow
      this.$emit('toggleShowPayWrapper')
    },
    setActive (index) {
      this.payWay.map((item, i) => {
        i === index ? item.isActive = true : item.isActive = false
      })
    },
    payMoney (e, reqParams) {
      if (e) {
        addBd('event', e.target.getAttribute('eventId'))
      }
      if (reqParams) {
        this.reportData.reqParams = reqParams
      }
      const choosePayWay = this.payWay.some((item, index) => {
        return item.isActive === true
      })
      if (!choosePayWay) {
        this.$createToast({
          txt: '请选择支付方式',
          time: 2000,
          type: 'error'
        }).show()
        return
      }
      if (checkClientPlatform().weixin) {
        this._weixinPayForPub()
      } else {
        this._weixinPayForH5()
      }
    },
    _weixinPayForH5 () {
      const _self = this
      let redirectUrl
      if (this.reportData.reqParams.redirectUrl) {
        redirectUrl = this.reportData.reqParams.redirectUrl
      } else {
        redirectUrl = '/market/#/multiHeadQuery'
      }
      addReportForWx(Object.assign(this.reportData.reqParams, {
        payType: ORDER_TYPE_H5
      })).then((res) => {
        _self.toggleShowPayWrapper()
        _self.$emit('payCallBack', res.data)
        _self.setOrderData(res.data)
        window.location.href = res.data.mwebUrl +
            '&redirect_url=' +
            encodeURIComponent(process.env.VUE_APP_APP_URL + redirectUrl)
      })
    },
    _weixinPayForPub () {
      const _self = this
      addReportForWx(Object.assign(this.reportData.reqParams, {
        payType: ORDER_TYPE_WX
      })).then((res) => {
        _self.toggleShowPayWrapper()
        _self.$emit('payCallBack', res.data)
        // eslint-disable-next-line
          WeixinJSBridge.invoke(
          'getBrandWCPayRequest',
          res.data.jsRequest,
          function (res) {
          })
      })
    },
    ...mapMutations({
      setOrderData: 'ORDER_DATA'
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  .slideUp-enter, .slideUp-leave-to
    transform: translate3d(0, 100%, 0)

  .slideUp-enter-active, .slideUp-leave-active
    transition: all 0.3s

  .hidden
    display: none

  .black
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    .report-pay-wrapper
      position: fixed
      bottom: 0
      left: 0
      right: 0
      background: #fff
      z-index: 2
      .order-info
        padding: 26px 32px 0 32px
        font-size: 34px
        font-family: PingFangSC-Regular
        font-weight: 400
        color: #333333
        .info
          padding: 26px 0 14px
          border-1px(#dcdcdc, solid, bottom)
          display: flex
          align-items: center
          justify-content: space-between
          .order-avatar
            width: 100px
            height: 100px
          .report-name
            flex: 1
            margin-left: 24px
          .price-detail
            text-align: right
            > img
              width: 132px
              height: 38px
            .discount
              font-size: 48px
              font-family: PingFangSC-Regular
              font-weight: 400
              color: #FF4C4C
              line-height: 50px
              > span:first-child
                font-size: 30px
            .origin-pirce
              font-size: 28px
              font-family: PingFangSC-Regular
              font-weight: 400
              color: #777777
              line-height: 40px
              text-decoration: line-through
      .pay-way
        padding: 26px 0 0 0
        .way_ul
          width: 100%
          padding: 20px 0
          border-1px(#dcdcdc, solid, bottom)
          font-size: 32px
          color: #4A4A4A
          > li
            height: 80px
            line-height: 80px
            display: flex
            align-items: center
            justify-content: space-between
            padding: 0 32px 0 16px
            > img
              width: 44px
              height: 44px
            > span
              flex: 1
              margin-left: 20px
            > i
              width: 40px
              height: 40px
              background: url("./icon-unchoose.png") no-repeat
              background-size: cover
          > .checked
            background: rgba(255, 238, 210, 0.6)
            border-radius: 8px
            border: 1px solid rgba(246, 154, 2, 1)
            > i
              width: 40px
              height: 40px
              background: url("./icon-choose.png") no-repeat
              background-size: cover
        .way_midian
          padding: 0
          > li
            height: 100px
            .pointsEqual
              color: #ff4c4c
              margin-left: 10px
      .pay-tool-wrapper
        padding-left: 32px
        height: 110px
        display: flex
        align-items: center
        justify-content: space-between
        border-top-1px(#dcdcdc, solid)
        .final-price
          font-size: 32px
          font-family: PingFangSC-Regular
          font-weight: 400
          color: #4a4a4a
          > span
            color: #FF4C4C
        .pay-submit-btn
          width: 270px
          height: 110px
          background-image: linear-gradient(-90deg, #FF864C 0%, #FC5B30 100%)
          text-align: center
          font-size: 32px
          font-family: PingFangSC-Regular
          font-weight: 400
          color: #ffffff
</style>
