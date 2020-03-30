<template>
  <transition name="login-fade">
    <div class="login" v-show="showFlag" @click.stop>
      <div class="login-wrapper">
        <div class="login-tit">
          <span>登录</span>
          <i @click="hide" class="cubeic-close"/>
        </div>
        <div class="login-content">
          <div class="validator-item">
            <cube-input
              v-model="inputProps[0].text"
              :placeholder="inputProps[0].placeholder"
              :type="inputProps[0].type"
              :maxlength="inputProps[0].maxlength"
              :clearable=true
              @blur="fixIosBug"
              ref='phone'
            >
              <template slot="prepend">
                <i class="icon icon-phone"></i>
              </template>
            </cube-input>
          </div>
          <div class="validator-item" v-if="isShowStaticPic">
            <cube-input
              v-model="inputProps[1].text"
              :placeholder="inputProps[1].placeholder"
              :type="inputProps[1].type"
              :maxlength="inputProps[1].maxlength"
              :clearable=true
              @blur="fixIosBug"
              ref='imageCode'
            >
              <template slot="prepend">
                <i class="icon icon-captcha"></i>
              </template>
              <template slot="append">
                <img :src=imageBase64 alt="图形验证码" class="img-code" @click="_getImageCode">
              </template>
            </cube-input>
          </div>
          <div class="validator-item">
            <cube-input
              v-model="inputProps[2].text"
              :placeholder="inputProps[2].placeholder"
              :type="inputProps[2].type"
              :maxlength="inputProps[2].maxlength"
              :clearable=true
              @blur="fixIosBug"
              ref='smsCode'
            >
              <template slot="prepend">
                <i class="icon icon-sms-code"></i>
              </template>
              <template slot="append">
                <button
                  class="get-sms-code disable"
                  ref="smsCodeBtn"
                  @click.stop="sendSmsCode"
                  disabled="true">{{ smsBtnMsg }}
                </button>
              </template>
            </cube-input>
          </div>
          <div class="login-btn-dv">
            <button class="login-btn" @click="submit">登录</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import { login, getImageCode, getSmsCode, getCustInfoPro } from 'api/cust'
import { setCustInfo } from 'common/js/utils'
import { checkPhone, checkImageCode, checkSMSCode } from 'common/js/validator'
import { getUserInfoApp } from 'common/js/utils-app'
import { mapGetters } from 'vuex'

const LOGIN_SMS = 2
const DEVICE_TYPE = 4
export default {
  name: 'login-dialog',
  data () {
    return {
      codeFlag: '',
      imageBase64: '',
      isShowStaticPic: true,
      showFlag: false,
      smsBtnMsg: '获取验证码',
      timer: null,
      inputProps: [
        {
          placeholder: '手机号码',
          type: 'text',
          maxlength: 11,
          text: ''
        },
        {
          placeholder: '图形验证码',
          type: 'text',
          maxlength: 4,
          text: ''
        },
        {
          placeholder: '短信验证码',
          type: 'text',
          maxlength: 4,
          text: ''
        }
      ]
    }
  },
  computed: {
    existVal: function () {
      const phoneInput = Number(Boolean(this.inputProps[0].text))
      const imageInput = Number(Boolean(this.inputProps[1].text))
      return phoneInput + imageInput
    },
    ...mapGetters([
      'wxCode'
    ])
  },
  watch: {
    existVal (newVal) {
      if (Number(newVal) === 2 && this.isShowStaticPic) {
        this.$refs.smsCodeBtn.classList.remove('disable')
        this.$refs.smsCodeBtn.removeAttribute('disabled')
      } else if (Number(newVal) === 1 && !this.isShowStaticPic) {
        this.$refs.smsCodeBtn.classList.remove('disable')
        this.$refs.smsCodeBtn.removeAttribute('disabled')
      }
    },
    showFlag (newVal) {
      this.toggleContainerTouchAction(newVal)
      if (newVal) {
        document.body.addEventListener('touchmove', this.stopTouch, { passive: false, capture: true })
      } else {
        document.body.removeEventListener('touchmove', this.stopTouch, { capture: true })
      }
    }
  },
  created () {
    this._getImageCode()
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    toggleContainerTouchAction (v) {
      const container = document.querySelector('.container')
      if (!container) {
        return
      }
      container.style['touch-action'] = v ? 'none' : 'auto'
    },
    stopTouch (e) {
      e.preventDefault()
    },
    submit () {
      if (!checkPhone(this.inputProps[0].text, this.$refs.phone)) {
        return
      }
      if (this.isShowStaticPic && !checkImageCode(this.inputProps[1].text, this.$refs.imageCode)) {
        return
      }
      if (!checkSMSCode(this.inputProps[2].text, this.$refs.smsCode)) {
        return
      }
      login({
        telNo: this.inputProps[0].text,
        verfCode: this.inputProps[2].text,
        channelId: 1,
        wxCode: this.wxCode,
        deviceType: DEVICE_TYPE
      }).then((res) => {
        setCustInfo({
          token: res.data.userToken,
          id: res.data.cust.id,
          telNo: res.data.cust.telNo,
          name: res.data.cust.name,
          idCardName: res.data.cust.idCardName,
          idCardNameHide: res.data.cust.idCardNameHide,
          idCardCodeHide: res.data.cust.idCardCodeHide,
          vip: res.data.vip,
          vipExpTime: res.data.vipExpTime
        })
        this._getCustInfoPro()
      })
    },
    sendSmsCode () {
      let reqParams = {}
      if (!checkPhone(this.inputProps[0].text, this.$refs.phone)) {
        return
      }
      if (this.isShowStaticPic) {
        if (!checkImageCode(this.inputProps[1].text, this.$refs.imageCode)) {
          return
        }
        reqParams = {
          telNo: this.inputProps[0].text,
          realSend: process.env.VUE_APP_ENV === 'production',
          deviceType: DEVICE_TYPE,
          codeFlag: this.codeFlag,
          type: LOGIN_SMS,
          picCode: this.inputProps[1].text
        }
      } else {
        reqParams = {
          telNo: this.inputProps[0].text,
          realSend: process.env.VUE_APP_ENV === 'production',
          deviceType: DEVICE_TYPE,
          type: LOGIN_SMS
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
    clickHandler (e) {
      this.$emit('click', e)
    },
    fixIosBug () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    },
    _getImageCode () {
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
    _getCustInfoPro () {
      const _self = this
      getCustInfoPro().then((res) => {
        this.$createToast({
          txt: res.reqResult.msg,
          time: 2000,
          type: 'correct',
          $events: {
            timeout: () => {
              const cust = getUserInfoApp()
              setCustInfo(Object.assign(cust, {
                reportStatus: res.data.reportId ? 1 : 0,
                reportId: res.data.reportId,
                wxOpenId: res.data.wxOpenId,
                idCardStatus: res.data.idCardStatus,
                informStatus: res.data.informStatus,
                optStatus: res.data.optStatus,
                optId: res.data.optId,
                idCardCode: res.data.idCardCode,
                vip: res.data.vip,
                vipExpTime: res.data.vipExpTime
              }))
              if (_self.timer !== null) {
                clearInterval(_self.timer)
                _self.timer = null
              }
              _self.clickHandler()
            }
          }
        }).show()
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .login
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 99
    background-color: rgba(0, 0, 0, 0.3)
    &.login-fade-enter-active
      animation: login-fadein 0.3s
      .login-content
        animation: login-zoom 0.3s
    .login-wrapper
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index: 999
      width: 670px
      height: 580px
      border-radius: 13px
      background: #fff
      .login-tit
        margin: 30px auto 38px
        font-size: $font-size-36
        color: #000000
        text-align: center
        position: relative
        .cubeic-close
          position: absolute
          top: -10px
          right: 20px
          font-size: $font-size-44
          color: #9b9b9b
          display: block

      .validator-item
        min-height: 112px
      .cube-input
        width: 590px
        margin: 0 auto
        border-radius: 8px
        .icon
          font-size: $font-size-44
          color: #F0723F
          margin-left: 24px
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
      .cube-validator, .cube-validator_invalid
        width: 590px
        margin: 0 auto
      .login-btn-dv
        width: 400px
        height: 80px
        margin: 0 auto
        .login-btn
          width: 400px
          height: 80px
          line-height 80px
          background-image: linear-gradient(-90deg, #FF864C 0%, #FC5B30 100%)
          border-radius: 48px
          color: #fff
          border: none
          font-size: $font-size-32

  @keyframes login-fadein
    0%
      opacity: 0
    100%
      opacity: 1

  @keyframes login-zoom
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)
</style>
