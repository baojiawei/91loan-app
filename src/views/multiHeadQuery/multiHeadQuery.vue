<template>
  <div class="multiHead-wrapper">
    <nav-bar :title=title :useClientBack=useClientBack :showQuitAlert="showQuitAlert"></nav-bar>
    <div class="report-wrapper">
      <div class="report-content">
        <cube-scroll>
          <router-link :to="{name: 'reportRecord'}" @click.stop.prevent append tag="div" class="report-banner" v-lazy:background-image="reportBanner">
            <div class="query-report">我的报告</div>
          </router-link>
          <div class="write-report-data">
            <div class="input-wrapper">
              <cube-input
                v-model="inputProps[0].text"
                :placeholder="inputProps[0].placeholder"
                :type="inputProps[0].type"
                :maxlength="inputProps[0].maxlength"
                :clearable=true
                :disabled="inputProps[0].disabled"
                @blur="fixIosBug"
                @focus="fixAndroidBug($event, 'custName')"
                ref='custName'
                eventId='getreport_inputname'
              >
              </cube-input>
              <cube-input
                v-model="inputProps[1].text"
                :placeholder="inputProps[1].placeholder"
                :type="inputProps[1].type"
                :maxlength="inputProps[1].maxlength"
                :clearable=true
                :disabled="inputProps[1].disabled"
                @blur="fixIosBug"
                @focus="fixAndroidBug($event, 'idCardCode')"
                ref='idCardCode'
                eventId='getreport_inputidcard'
              >
              </cube-input>
              <cube-input
                v-model="inputProps[3].text"
                :placeholder="inputProps[3].placeholder"
                :type="inputProps[3].type"
                :maxlength="inputProps[3].maxlength"
                :clearable=true
                @blur="fixIosBug"
                @focus="fixAndroidBug($event, 'imageCode')"
                ref='imageCode'
                v-if="isShowStaticPic"
                eventId='getreport_inputcode1'
              >
                <template slot="append">
                  <img :src=imageBase64 alt="图形验证码" class="img-code" ref='getImageCode'
                       @click="_getImageCode('getImageCode')" eventId='getreport_getcode1'>
                </template>
              </cube-input>
              <cube-input
                v-model="inputProps[2].text"
                :placeholder="inputProps[2].placeholder"
                :type="inputProps[2].type"
                :maxlength="inputProps[2].maxlength"
                :clearable=true
                :disabled="inputProps[2].disabled"
                @blur="fixIosBug"
                @focus="fixAndroidBug($event, 'smsCode')"
                ref='smsCode'
                eventId='getreport_inputcode'
              >
                <template slot="append">
                  <button
                    class="get-sms-code"
                    ref="smsCodeBtn"
                    @click.stop="_sendSmsCode('smsCodeBtn')"
                    eventId='getreport_getcode'>{{ smsBtnMsg }}
                  </button>
                </template>
              </cube-input>
              <div class="choose-protocol">
                <i class="icon icon-dagou" @click="chooseProtocol"></i>
                <div>我已阅读并同意
                  <router-link tag="span" :to="{ name: 'reportProtocol' }">《信息收集授权协议》</router-link>
                </div>
              </div>
            </div>
            <div :class="[ 'bg-bottom', isNormal ? 'bg-bottom-01' : 'bg-bottom-02' ]">
              <div class="prod-group">
                <button :class="[ 'prod', isNormal ? 'prod-active' : 'prod-noActive' ]" @click="_chooseDiffReport"><div :class="[ isNormal ? 'i-prod-active' : 'i-prod' ]"></div><span v-if="tradeGoods.length > 0">普通版 ￥{{ tradeGoods[0].amount/100 }}</span></button>
                <button :class="[ 'prod', !isNormal ? 'prod-active' : 'prod-noActive' ]" @click="_chooseDiffReport"><div :class="[ !isNormal ? 'i-prod-active' : 'i-prod' ]"></div><span v-if="tradeGoods.length > 0">高级版 ￥{{ tradeGoods[1].amount/100 }}</span></button>
              </div>
            </div>
          </div>
        </cube-scroll>
        <div class="report-footer">
          <button v-if="tradeGoods.length > 0" class="get-report-result" @click="_getReportResult($event)" eventId='getreport_getreport'>
            {{ isNormal ? tradeGoods[0].displayText : tradeGoods[1].displayText }}
          </button>
        </div>
      </div>
    </div>
    <report-pay v-if="tradeGoods.length > 0"
      :isPayWrapperShow="isPayWrapperShow"
      :reportData="isNormal ? tradeGoods[0] : tradeGoods[1]"
      @toggleShowPayWrapper="_getReportResult"
      @payCallBack="_payCallBack"></report-pay>
    <pay-result-dialog
      :isPayResultDialogShow="isPayResultDialogShow"
      :payData="payData"
      @toggleShowPayResultDialog="_toggleShowPayResultDialog"></pay-result-dialog>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import reportPay from 'components/reportPay/reportPay'
import payResultDialog from 'components/payResultDialog/payResultDialog'
import navBar from 'components/navBar/navBar'
import { getImageCode, getSmsCode } from 'api/cust'
import { getTradeGoodsList } from 'api/report'
import { checkSMSCode, checkCustName, checkIdCardCode, checkImageCode } from 'common/js/validator'
import { getUserInfoApp, addBd, checkEnvironmentIn91 } from 'common/js/utils-app'
import { mapGetters } from 'vuex'

const REPORT_SMS = 3
const DEVICE_TYPE = 4
export default {
  data () {
    return {
      title: '网贷检测',
      goodsId: '',
      isNormal: '',
      amount1: '',
      amount2: '',
      useClientBack: true,
      showQuitAlert: checkEnvironmentIn91(),
      smsBtnMsg: '获取验证码',
      code: '',
      timer: null,
      tradeGoods: [],
      codeFlag: '',
      imageBase64: '',
      isShowStaticPic: true,
      chooseProtocolFlag: true,
      isPayWrapperShow: false,
      isPayResultDialogShow: false,
      reportBanner: require('./bg-report-query.png'),
      bgBottom01Img: require('./bg-bottom-01.png'),
      bgBottom02Img: require('./bg-bottom-02.png'),
      inputProps: [
        {
          placeholder: '请输入本人姓名',
          type: 'text',
          maxlength: 11,
          text: '',
          disabled: false
        },
        {
          placeholder: '请输入本人身份证号',
          type: 'text',
          maxlength: 18,
          text: '',
          disabled: false
        },
        {
          placeholder: '请输入短信验证码',
          type: 'text',
          maxlength: 4,
          text: '',
          disabled: false
        },
        {
          placeholder: '请输入图形验证码',
          type: 'text',
          maxlength: 4,
          text: ''
        }
      ]
    }
  },
  filters: {
    formatMoney (item) {
      return item / 100
    }
  },
  computed: {
    ...mapGetters([
      'orderData'
    ])
  },
  created () {
    this.init()
  },
  beforeRouteEnter (to, from, next) {
    // 进入路由设置百度统计
    if (to.meta.bdPageName) {
      addBd('start', to.meta.bdPageName)
    }
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 离开路由设置百度统计
    if (from.meta.bdPageName) {
      addBd('end', from.meta.bdPageName)
    }
    next()
  },
  methods: {
    init () {
      this._getImageCode()
      this._getTradeGoods()
      const cust = getUserInfoApp()
      if (cust && cust.idCardCodeHide) {
        this.inputProps[0].text = cust.idCardName
        this.inputProps[1].text = cust.idCardCodeHide
        this.inputProps[0].disabled = true
        this.inputProps[1].disabled = true
      }
      if (this.orderData.id !== undefined) {
        this.payData = this.orderData
        this._toggleShowPayResultDialog()
      }
      if (this.$route.params.goodsId !== undefined) {
        this.goodsId = this.$route.params.goodsId
        this.isNormal = this.$route.params.goodsId === 2
      } else if (this.$route.query.goodsId !== undefined) {
        this.goodsId = this.$route.query.goodsId
        this.isNormal = this.$route.query.goodsId === '2'
      }
    },
    fixIosBug () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    },
    fixAndroidBug (e, tagName) {
      addBd('event', this.$refs[tagName].$attrs.eventId)
      setTimeout(function () {
        e.target.scrollIntoViewIfNeeded()
      }, 400)
    },
    chooseProtocol (e) {
      if (e.target.className.indexOf('icon-dagou') > -1) {
        e.target.classList.remove('icon-dagou')
        e.target.classList.add('icon-undagou')
        this.chooseProtocolFlag = false
      } else {
        e.target.classList.remove('icon-undagou')
        e.target.classList.add('icon-dagou')
        this.chooseProtocolFlag = true
      }
    },
    _getImageCode (tagName) {
      if (tagName) addBd('event', this.$refs[tagName].getAttribute('eventId'))
      this.codeFlag = new Date().getTime()
      getImageCode({
        codeFlag: this.codeFlag,
        deviceType: DEVICE_TYPE
      }).then(res => {
        if (res.data) {
          this.imageBase64 = 'data:image/jpg;base64,' + res.data
          this.isShowStaticPic = true
        } else {
          this.isShowStaticPic = false
        }
      })
    },
    _timeCount (envCount) {
      this.$refs.smsCodeBtn.setAttribute('disabled', true)
      this.$refs.smsCodeBtn.classList.add('disable')
      this.smsBtnMsg = envCount + 's后重新获取'
      if (!this.timer) {
        let timeCount = envCount
        this.timer = setInterval(() => {
          if (timeCount > 0 && timeCount <= envCount) {
            timeCount--
            this.smsBtnMsg = timeCount + 's后重新获取'
          } else {
            clearInterval(this.timer)
            this.timer = null
            this.smsBtnMsg = '获取验证码'
            this.$refs.smsCodeBtn.removeAttribute('disabled')
            this.$refs.smsCodeBtn.classList.remove('disable')
          }
        }, 1000)
      }
    },
    _sendSmsCode (tagName) {
      addBd('event', this.$refs[tagName].getAttribute('eventId'))
      let reqParams = {}
      if (this.isShowStaticPic) {
        reqParams = {
          telNo: getUserInfoApp().telNo,
          realSend: process.env.VUE_APP_ENV === 'production',
          deviceType: DEVICE_TYPE,
          type: REPORT_SMS,
          codeFlag: this.codeFlag,
          picCode: this.inputProps[3].text
        }
      } else {
        reqParams = {
          telNo: getUserInfoApp().telNo,
          realSend: process.env.VUE_APP_ENV === 'production',
          deviceType: DEVICE_TYPE,
          type: REPORT_SMS
        }
      }
      getSmsCode(reqParams).then(res => {
        this.$createToast({
          txt: process.env.VUE_APP_ENV === 'production' ? res.reqResult.msg : '短信验证码为' + res.data,
          time: 2000,
          type: 'correct',
          $events: {
            timeout: () => {
              if (!(process.env.VUE_APP_ENV === 'production')) {
                this.inputProps[2].text = res.data
                this._timeCount(process.env.VUE_APP_SMS_TIME_COUNT)
              } else {
                this._timeCount(process.env.VUE_APP_SMS_TIME_COUNT)
              }
            }
          }
        }).show()
      })
    },
    _getTradeGoods () {
      getTradeGoodsList().then((res) => {
        this.tradeGoods = res.data
      })
    },
    _getReportResult (e) {
      addBd('event', e.currentTarget.getAttribute('eventId'))
      const cust = getUserInfoApp()
      let reqParams = {}
      if (!cust.idCardName && !checkCustName(this.inputProps[0].text, this.$refs.custName)) {
        return
      }
      if (!cust.idCardCodeHide && !checkIdCardCode(this.inputProps[1].text, this.$refs.icCardCode)) {
        return
      }
      if (this.isShowStaticPic && !checkImageCode(this.inputProps[3].text, this.$refs.imageCode)) {
        return
      }
      if (!checkSMSCode(this.inputProps[2].text, this.$refs.smsCode)) {
        return
      }
      if (!this.chooseProtocolFlag) {
        this.$createToast({
          txt: '请勾选服务协议',
          time: 2000,
          type: 'warn'
        }).show()
        return
      }
      if (!cust.idCardCodeHide) {
        reqParams = {
          idCardName: this.inputProps[0].text,
          idCardCode: this.inputProps[1].text,
          verfCode: this.inputProps[2].text,
          telNo: getUserInfoApp().telNo,
          goodsId: this.goodsId
        }
      } else {
        reqParams = {
          verfCode: this.inputProps[2].text,
          telNo: getUserInfoApp().telNo,
          goodsId: this.goodsId
        }
      }
      this.tradeGoods.map((item) => {
        item.reqParams = reqParams
      })
      this.isPayWrapperShow = !this.isPayWrapperShow
    },
    _payCallBack (payData) {
      this.payData = payData
      this._toggleShowPayResultDialog()
    },
    _toggleShowPayResultDialog () {
      this.isPayResultDialogShow = !this.isPayResultDialogShow
    },
    _chooseDiffReport () {
      this.isNormal = !this.isNormal
    }
  },
  components: {
    reportPay: reportPay,
    payResultDialog: payResultDialog,
    navBar: navBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all .3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .multiHead-wrapper
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #fff
    .report-wrapper
      .report-content
        position: fixed
        top: 96px
        left: 0
        right: 0
        bottom: 0
        display: flex
        flex-direction: column
        div[lazy=loading]
          transform: scale(0.2)
          margin: 0 auto
        .report-banner
          width: 100%
          height: 500px
          background-size: 100% 100%
          color: #ffffff
          text-align: center
          box-sizing: border-box
          position: relative
          z-index: 1
          .query-report
            width:154px
            height:68px
            line-height:68px
            text-align: center
            background:linear-gradient(150deg,rgba(255,134,76,1) 0%,rgba(252,91,48,1) 100%)
            box-shadow:0px 7px 9px 0px rgba(255,244,218,0.19)
            border-radius:100px 0px 0px 100px
            position: absolute
            top: 20px
            right: 0
            font-size:26px
            color:rgba(255,255,255,1)
        .write-report-data
          padding: 0 30px
          background:linear-gradient(128deg,rgba(94,195,236,1) 0%,rgba(136,121,220,1) 7%,rgba(65,153,224,1) 69%,rgba(167,83,222,1) 100%,rgba(44,34,211,1) 100%)
          position: relative
          z-index:9
          > h2
            padding: 22px 0
            text-align: center
            font-family: PingFangSC-Regular
            font-size: $font-size-28
            color: #4A4A4A
          .input-wrapper
            padding: 52px 30px
            background: rgba(255,255,255,1)
            box-shadow: 0px 2px 40px 0px rgba(16,90,191,0.83)
            border-radius: 20px
            margin-top: -104px
            .cube-input
              margin-bottom: 20px
              .img-code
                width: 148px
                height: 76px
                box-sizing: border-box
              .get-sms-code
                padding: 0 24px
                box-sizing: border-box
                border: none
                border-left: 1px solid #F0723F
                font-size: $font-size-30
                background: #fff
                color: #F0723F
                &.disable
                  border-left: 1px solid #ccc
                  color: #ccc
            .choose-protocol
              font-family: PingFangSC-Regular
              color: #5D5D77
              font-size: 0
              > i
                inline-block-direction()
                font-size: $font-size-32
              > div
                inline-block-direction()
                margin-left: 12px
                font-size: $font-size-24
          .bg-bottom
            width: 100%
            height: 2190px
            position: relative
            background-repeat: no-repeat
            background-position: center center
            background-size: cover
            &.bg-bottom-01
              background-image: url("./bg-bottom-01.png")
            &.bg-bottom-02
              background-image: url("./bg-bottom-02.png")
            .prod-group
              position: absolute
              top: 50px
              width: 100%
              display: flex
              justify-content: space-evenly
              .prod-noActive
                background:rgba(143,149,154,0.2)
                border-radius:8px
                color:rgba(74,74,74,1)
              .prod
                width:305px
                height:84px
                font-size: 0
                > span
                  margin-left: 10px
                  font-size:32px
                  inline-block-direction()
                .i-prod
                  width: 40px
                  height: 40px
                  background: url("icon-prod.png") no-repeat
                  background-size: cover
                  inline-block-direction()
                .i-prod-active
                  width: 30px
                  height: 34px
                  background: url("icon-prod-active.png") no-repeat
                  background-size: cover
                  inline-block-direction()
      .report-footer
        padding: 25px 40px
        flex: 1
        text-align: center
        .get-report-result
          width: 100%
          height: 90px
          background:linear-gradient(90deg,rgba(41,175,253,1) 0%,rgba(115,90,241,1) 100%)
          box-shadow:0px 6px 20px 0px rgba(97,115,218,0.43)
          border-radius:100px
          font-size: $font-size-32
          font-weight:500;
          color: #FFFFFF
          letter-spacing: -0.77px
          text-align: center
      .prod-active:after
        content: ""
        position: absolute
        border-style: dashed dashed solid dashed
        line-height: 1
        display: inline-block
      .prod-active:after
        left: 150px
        border-color: #FF864C transparent transparent
        border-width: 18px
        z-index: 1080
        bottom: -33px
      .prod-active
        width:305px
        height:84px
        color:rgba(255,255,255,1)
        background:linear-gradient(90deg,rgba(255,134,76,1) 0%,rgba(252,91,48,1) 100%)
        box-shadow:0px 6px 12px 0px rgba(253,103,56,0.46)
        border-radius:8px 8px 8px 8px
        font-size: 32px
        display: block
        text-align: center
        position: relative
</style>
