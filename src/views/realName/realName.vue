<template>
  <div class="realName-wrapper">
    <nav-bar :title=title></nav-bar>
    <div class="header">
      为了确保账户安全，请先完成实名认证！信息一经认证便不可修改，请正确填写本人信息！
    </div>
    <div class="content">
      <cube-input
        v-model="inputProps[0].text"
        :placeholder="inputProps[0].placeholder"
        :type="inputProps[0].type"
        :maxlength="inputProps[0].maxlength"
        :clearable=true
        :disabled="inputProps[0].disabled"
        @blur="fixIosBug"
        ref='custName'
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
        ref='idCardCode'
      >
      </cube-input>
      <div class="report-footer" v-if="isShowBtn">
        <button class="get-report-result" @click="_realName()">提交</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { addAndAuthPro, getCustInfoPro } from 'api/cust'
import { checkCustName, checkIdCardCode } from 'common/js/validator'
import { setCustInfo } from 'common/js/utils'
import { getUserInfoApp } from 'common/js/utils-app'
export default {
  data () {
    return {
      title: '实名认证',
      inputProps: [
        {
          placeholder: '请输入姓名',
          type: 'text',
          maxlength: 11,
          text: '',
          disabled: false
        },
        {
          placeholder: '请输入身份证号',
          type: 'text',
          maxlength: 18,
          text: '',
          disabled: false
        }
      ],
      isShowBtn: true
    }
  },
  created () {
    const cust = getUserInfoApp()
    if (cust && cust.idCardStatus) {
      this.inputProps[0].text = cust.idCardName
      this.inputProps[1].text = cust.idCardCodeHide
      this.inputProps[0].disabled = true
      this.inputProps[1].disabled = true
      this.isShowBtn = false
    }
  },
  methods: {
    _realName () {
      const _self = this
      if (!checkCustName(this.inputProps[0].text, this.$refs.custName)) {
        return
      }
      if (!checkIdCardCode(this.inputProps[1].text, this.$refs.icCardCode)) {
        return
      }
      addAndAuthPro({
        idCardName: this.inputProps[0].text,
        idCardCode: this.inputProps[1].text
      }).then((res) => {
        _self._getCustInfoPro()
      })
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
              setCustInfo(Object.assign({}, cust, {
                id: res.data.id,
                telNo: res.data.telNo,
                name: res.data.name,
                idCardName: res.data.idCardName,
                idCardNameHide: res.data.idCardNameHide,
                idCardCodeHide: res.data.idCardCodeHide,
                idCardCode: res.data.idCardCode,
                reportStatus: res.data.reportId ? 1 : 0,
                reportId: res.data.reportId,
                optId: res.data.optId,
                wxOpenId: res.data.wxOpenId,
                vip: res.data.vip,
                vipExpTime: res.data.vipExpTime
              }))
              if (this.$route.params.fromRouterName === 'loanProcess') {
                _self.$router.push({
                  name: 'loanProcess'
                })
              } else {
                _self.$router.push({
                  name: 'userInfo'
                })
              }
            }
          }
        }).show()
      })
    }
  },
  components: {
    navBar: navBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .realName-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #fff
    .header
      padding: 22px 44px
      background:rgba(254,126,70,1)
      opacity:0.8491
      font-size:24px
      font-family:PingFangSC-Regular
      font-weight:400
      color:rgba(255,255,255,1)
      line-height:33px
    .content
      padding: 32px 48px
      .cube-input
        margin-bottom: 36px
      .report-footer
        text-align: center
        .get-report-result
          width: 100%
          height: 96px
          background-image: linear-gradient(-90deg, #FF864C 0%, #FC5B30 100%)
          border-radius: 48px
          font-size: $font-size-32
          color: #FFFFFF
          letter-spacing: -0.77px
          text-align: center
</style>
