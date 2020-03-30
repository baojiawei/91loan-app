<template>
  <div class="feedback-wrapper">
    <nav-bar :title=title></nav-bar>
    <cube-textarea
      v-model="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :autofocus="autofocus"
      :autoExpand="autoExpand"
      indicator="indicator"
    ></cube-textarea>
    <cube-validator v-model="valid[0]" :model="value" :rules="rules"
                    ref="validator0"></cube-validator>
    <cube-input
      v-model="inputProps.text"
      :placeholder="inputProps.placeholder"
      :type="inputProps.type"
      :maxlength="inputProps.maxlength"
    ></cube-input>
    <cube-validator v-model="valid[1]" :model="inputProps.text" :rules="inputProps.rules"
                    :messages="inputProps.messages" ref="validator1"></cube-validator>
    <div class="feedback-btn-dv">
      <button class="feedback-btn" @click="submit">提交</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { addFeedback } from 'api/cust'

export default {
  data () {
    return {
      title: '反馈管理',
      valid: [undefined, undefined],
      value: '',
      placeholder: '留下您的意见...',
      maxlength: 100,
      indicator: true,
      autofocus: true,
      autoExpand: true,
      rules: {
        required: true
      },
      inputProps: {
        placeholder: '手机号码',
        type: 'text',
        maxlength: 11,
        text: '',
        rules: {
          required: true,
          type: 'string',
          pattern: /^1[3,5,7,4,8]\d{9}$/
        },
        messages: {
          pattern: '请输入正确的手机号码'
        }
      }
    }
  },
  methods: {
    submit () {
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      Promise.all([p1, p2]).then(() => {
        if (this.valid.every(item => item)) {
          this._addFeedback()
        }
      })
    },
    _addFeedback () {
      var _self = this
      addFeedback({
        telNo: this.inputProps.text,
        content: this.value
      }).then((res) => {
        _self.$createToast({
          txt: res.reqResult.msg,
          type: 'correct',
          time: 2000,
          $events: {
            timeout: () => {
              _self.$router.push('/index/userInfo')
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
  .feedback-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #f4f6f8
    .cube-textarea-wrapper
      width: 686px
      margin: 32px auto 0
    .cube-textarea_expanded
      height: 320px
    .cube-input
      width: 686px
      margin: 32px auto 0
    .cube-validator-msg
      width: 686px
      margin: 0 auto
    .feedback-btn-dv
      width: 360px
      height: 80px
      margin: 32px auto 0
      .feedback-btn
        width: 360px
        height: 80px
        line-height 80px
        background-image: linear-gradient(-90deg, #FF864C 0%, #FC5B30 100%)
        border-radius: 48px
        color: #fff
        border: none
        font-size: $font-size-32
</style>
