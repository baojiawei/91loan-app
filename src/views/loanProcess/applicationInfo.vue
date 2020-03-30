<template>
  <div class="application-wrapper">
    <nav-bar :title=title></nav-bar>
    <div class="content-wrapper">
      <cube-scroll>
        <div class="content-list">
          <div class="tit">借多少</div>
          <cube-checker
            v-model="moneyValue"
            :options="money"
            type="radio">
          </cube-checker>
        </div>
        <div class="content-list">
          <div class="tit">借多久（月）</div>
          <cube-checker
            v-model="timeValue"
            :options="options"
            type="radio">
            <cube-checker-item
              v-for="item in time"
              :key="item.value"
              :option="item">
              <div>{{item.text}}</div>
            </cube-checker-item>
          </cube-checker>
        </div>
        <div class="content-list">
          <div class="tit">您的学历</div>
          <cube-checker
            v-model="eduValue"
            :options="options"
            type="radio">
            <cube-checker-item
              v-for="item in edu"
              :key="item.value"
              :option="item">
              <div>{{item.text}}</div>
            </cube-checker-item>
          </cube-checker>
        </div>
        <div class="content-list">
          <div class="tit">您的职业</div>
          <cube-checker
            v-model="jobValue"
            :options="options"
            type="radio">
            <cube-checker-item
              v-for="item in job"
              :key="item.value"
              :option="item">
              <div>{{item.text}}</div>
            </cube-checker-item>
          </cube-checker>
        </div>
      </cube-scroll>
    </div>
    <div class="submit">
      <button @click="addLoanApplication">提交</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { addLoanApplication } from 'api/cust'
export default {
  data () {
    return {
      title: '申请信息',
      moneyValue: [],
      timeValue: [],
      eduValue: [],
      jobValue: [],
      money: [
        {
          value: 1,
          text: '1000'
        },
        {
          value: 2,
          text: '3000'
        },
        {
          value: 3,
          text: '5000'
        },
        {
          value: 4,
          text: '8000'
        },
        {
          value: 5,
          text: '10000+'
        }
      ],
      time: [
        {
          value: 1,
          text: '1'
        },
        {
          value: 2,
          text: '3'
        },
        {
          value: 3,
          text: '6'
        },
        {
          value: 4,
          text: '12'
        },
        {
          value: 5,
          text: '24'
        }
      ],
      edu: [
        {
          value: 1,
          text: '初中及以下'
        },
        {
          value: 2,
          text: '高中/职中/中专'
        },
        {
          value: 3,
          text: '大专学科'
        },
        {
          value: 4,
          text: '大学本科'
        },
        {
          value: 5,
          text: '硕士及以上'
        }
      ],
      job: [
        {
          value: 1,
          text: '待业'
        },
        {
          value: 2,
          text: '学生'
        },
        {
          value: 3,
          text: '制造业'
        },
        {
          value: 4,
          text: '国企/事业单位/公务员'
        },
        {
          value: 5,
          text: '娱乐餐饮等服务业'
        },
        {
          value: 6,
          text: '其他'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    addLoanApplication () {
      if (this.moneyValue.length === 0) {
        this.$createToast({
          type: 'warn',
          txt: '请选择借多少',
          time: 2000
        }).show()
        return
      }
      if (this.timeValue.length === 0) {
        this.$createToast({
          type: 'warn',
          txt: '请选择借多久',
          time: 2000
        }).show()
        return
      }
      if (this.eduValue.length === 0) {
        this.$createToast({
          type: 'warn',
          txt: '请选择您的学历',
          time: 2000
        }).show()
        return
      }
      if (this.jobValue.length === 0) {
        this.$createToast({
          type: 'warn',
          txt: '请选择您的职业',
          time: 2000
        }).show()
        return
      }
      addLoanApplication({
        loanAmount: this.moneyValue,
        loanPeriod: this.timeValue,
        education: this.eduValue,
        industry: this.jobValue
      }).then(res => {
        this.$createToast({
          type: 'correct',
          txt: res.reqResult.msg,
          time: 2000,
          $events: {
            timeout: () => {
              this.$router.back()
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
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
  .application-wrapper
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    z-index: 20
    background: #fff
    .cube-checker
      flex-wrap: wrap
      justify-content: flex-start
    .cube-checker-item
      padding: 0
      margin: 0
      padding: 18px 76px
      background: rgba(248, 248, 248, 1)
      border-radius: 8px
      font-size: 26px
      margin-top: 20px
      margin-right: 10px
    .cube-checker-item_active
      background: rgba(252, 91, 48, 0.1)
      color: rgba(252, 91, 48, 1)
      position: relative
    .content-wrapper
      padding: 40px 40px 0 40px
      position: absolute
      bottom: 140px
      top: 96px
      .content-list
        margin-bottom: 50px
        .tit
          font-size: 36px
          font-family: PingFangSC-Medium
          font-weight: 500
          color: rgba(18, 33, 62, 1)
          padding-bottom: 10px
    .submit
      width: 100%
      height: 140px
      line-height: 140px
      background: rgba(255, 255, 255, 1)
      position: fixed !important
      bottom: 0
      text-align: center
      border-top-1px(#e6e6e6, solid)
      > button
        width: 670px
        height: 90px
        background: linear-gradient(90deg, rgba(255, 134, 76, 1) 0%, rgba(252, 91, 48, 1) 100%)
        border-radius: 8px
        font-size: 32px;
        font-family: PingFangSC-Medium
        font-weight: 500
        color: rgba(255, 255, 255, 1)
</style>
