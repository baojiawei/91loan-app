<template>
  <div class="operator-wrapper">
    <nav-bar :title=title></nav-bar>
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
      <cube-input
        v-model="inputProps[2].text"
        :placeholder="inputProps[2].placeholder"
        :type="inputProps[2].type"
        :maxlength="inputProps[2].maxlength"
        :clearable=true
        :disabled="inputProps[2].disabled"
        @blur="fixIosBug"
        ref='telNo'
      >
      </cube-input>
      <div class="report-footer">
        <button class="get-report-result" @click="_realName()">提交</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { getUserInfoApp } from 'common/js/utils-app'
export default {
  data () {
    return {
      title: '运营商认证',
      desc: '',
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
        },
        {
          placeholder: '请输入手机号',
          type: 'text',
          maxlength: 11,
          text: '',
          disabled: false
        }
      ]
    }
  },
  created () {
    const cust = getUserInfoApp()
    if (cust.idCardStatus) {
      this.inputProps[0].text = cust.idCardName
      this.inputProps[1].text = cust.idCardCodeHide
      this.inputProps[2].text = cust.telNo
      this.inputProps[0].disabled = true
      this.inputProps[1].disabled = true
      this.inputProps[2].disabled = true
    }
  },
  methods: {
    _realName () {}
  },
  components: {
    navBar: navBar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .animation-wrapper-enter, .animation-wrapper-leave-active
    opacity 0
  .animation-wrapper-enter-active, .animation-wrapper-leave-active
    transition all .3s ease-in-out
  .operator-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #fff
    .animationWrapper
      background #FFFFFF
      position: fixed
      top: 96px
      left: 0
      bottom: 0
      right: 0
      > div:first-child
        width 750px
        height 532px
        img
          width 100%
          height 100%
      .desc
        font-size: 36px
        text-align: center
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
