<template>
  <div class="loanProcess-wrapper">
    <nav-bar :title=title :useClientBack=useClientBack v-if=!isRelease></nav-bar>
    <div class="scroll-view">
      <cube-scroll>
        <div class="header"></div>
        <div class="middle">
          <div class="tit">您的资料仅供申请贷款使用，所有信息将受到严格保护</div>
          <div class="content-wrapper">
            <ul>
              <li v-if="custInfo.idCardStatus">
                <div class="name">
                  <img src="~images/loanProcess/icon-identity.png" alt="">
                  <span>身份认证</span>
                </div>
                <div class="status finish">已完成</div>
              </li>
              <router-link v-else tag="li" :to="{ name: 'realName', params: { fromRouterName: 'loanProcess' } }">
                <div class="name">
                  <img src="~images/loanProcess/icon-identity.png" alt="">
                  <span>身份认证</span>
                </div>
                <div class="status todo">请补充&nbsp;></div>
              </router-link>
              <li v-if="custInfo.informStatus">
                <div class="name">
                  <img src="~images/loanProcess/icon-application.png" alt="">
                  <span>申请信息</span>
                </div>
                <div class="status finish">已完成</div>
              </li>
              <router-link v-else tag="li" to="applicationInfo" append>
                <div class="name">
                  <img src="~images/loanProcess/icon-application.png" alt="">
                  <span>申请信息</span>
                </div>
                <div class="status todo">请补充&nbsp;></div>
              </router-link>
              <li v-if="custInfo.optStatus">
                <div class="name">
                  <img src="~images/loanProcess/icon-operator.png" alt="">
                  <span>运营商认证</span>
                </div>
                <div class="status finish">已完成</div>
              </li>
              <li v-else @click="_goToOperator">
                <div class="name">
                  <img src="~images/loanProcess/icon-operator.png" alt="">
                  <span>运营商认证</span>
                </div>
                <div class="status todo">请补充&nbsp;></div>
              </li>
            </ul>
          </div>
          <div class="submit" @click="_submitLoanApplication">提交</div>
        </div>
        <div class="bottom" v-if="isRelease">
          <div class="tit">同时申请下列产品，贷款通过率将提升至95%</div>
          <div class="report-loan-list">
            <ul>
              <li v-for="(product, index) in loanProductList"
                  :key="index"
                  :activable="product.activable"
                  :productId="product.id"
                  :url="product.url"
                  :title="product.name"
                  @click="_goToLoanProduct($event)">
                <div class="dv-top">
                  <img :src="product.icon" alt="" class="avatar">
                  <div class="name">{{product.name}}</div>
                </div>
                <div class="dv-middle">
                  <span class="amount">{{product.limitDisplay}}</span>
                </div>
                <div class="dv-bottom">
                  <div>{{product.periodDisplay}}</div>
                  <div>{{product.rateName}}{{product.rateDisplay}}</div>
                </div>
                <ul class="tag">
                  <li v-for="(label, idx) in product.label" :key="idx">
                    <span>{{ label }}</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </cube-scroll>
    </div>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import { getLoanProductList } from 'api/loanProduct'
import { getCustInfoPro, submitLoanApplication } from 'api/cust'
import { getUserInfoApp, gotoAuditPage, isReleaseApp, showBuyReportPopView } from 'common/js/utils-app'
import { setCustInfo } from 'common/js/utils'

export default {
  data () {
    return {
      loanProductList: '',
      custInfo: '',
      title: '贷款申请',
      useClientBack: true,
      isRelease: isReleaseApp()
    }
  },
  created () {
    if (this.isRelease) this._getLoanProductList()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm._getCustInfoPro()
    })
  },
  beforeRouteUpdate (to, from, next) {
    this._getCustInfoPro()
    next()
  },
  methods: {
    _getLoanProductList () {
      getLoanProductList().then((res) => {
        this.loanProductList = res.data
      })
    },
    _goToLoanProduct: function (e) {
      const activable = Number(e.currentTarget.getAttribute('activable'))
      const productId = Number(e.currentTarget.getAttribute('productId'))
      const title = e.currentTarget.getAttribute('title')
      const url = e.currentTarget.getAttribute('url')
      if (activable === 0) {
        this.$router.push({
          name: 'externalPage',
          params: {
            title: title,
            url: url
          }
        })
      } else if (activable === 1 && this.custInfo.optId !== undefined) {
        this.$router.push({
          name: 'externalPage',
          params: {
            title: title,
            url: url
          }
        })
      } else if (activable === 2 && this.custInfo.reportId !== undefined) {
        this.$router.push({
          name: 'externalPage',
          params: {
            title: title,
            url: url
          }
        })
      } else {
        showBuyReportPopView(productId, activable)
      }
    },
    _getCustInfoPro () {
      const cust = getUserInfoApp()
      if (cust !== null) {
        getCustInfoPro().then((res) => {
          setCustInfo(Object.assign(cust, {
            reportStatus: res.data.reportId ? 1 : 0,
            reportId: res.data.reportId,
            wxOpenId: res.data.wxOpenId,
            idCardStatus: res.data.idCardStatus,
            informStatus: res.data.informStatus,
            optStatus: res.data.optStatus,
            optId: res.data.optId,
            vip: res.data.vip,
            vipExpTime: res.data.vipExpTime
          }))
          this.custInfo = getUserInfoApp()
        })
      }
    },
    _submitLoanApplication () {
      submitLoanApplication().then(res => {
        gotoAuditPage()
      })
    },
    _goToOperator () {
      if (!this.custInfo.idCardStatus) {
        this.$createToast({
          txt: '请先完成身份认证！',
          type: 'warning',
          time: 2000
        }).show()
      } else {
        this.$router.push({ name: 'operator' })
      }
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
  .slide-enter-active,.slide-leave-active
    transition: all .3s
  .slide-enter, .slide-leave-to
    transform: translateX(100%)
  .scroll-view
    position: fixed
    top: 96px
    bottom: 0
    left: 0
    right: 0
  .loanProcess-wrapper
    .header
      width: 100%
      height: 256px
      background: url("~images/loanProcess/header.png") no-repeat
      background-size: cover
    .middle
      .tit
        height: 70px
        line-height: 70px
        padding-left: 30px
        background: rgba(245, 245, 250, 1)
        color: rgba(18, 33, 62, 1)
        font-size: 24px
      .content-wrapper
        padding: 30px 30px 0 30px
        li
          display: flex
          align-items: center
          justify-content: space-between
          height: 110px
          box-shadow: 0px 12px 20px 0px rgba(21, 21, 21, 0.03)
          border-radius: 8px
          border: 1px solid rgba(230, 230, 230, 1)
          margin-bottom: 18px
          padding: 0 30px 0 20px
          > .name
            flex: 1
            display: flex
            align-items: flex-end
            font-size: 30px
            font-family: PingFangSC-Medium
            font-weight: 500
            color: rgba(18, 33, 62, 1)
            > img
              width: 34px
              height: 36px
              margin-right: 12px
          > .status
            font-size: 28px
            font-family: PingFangSC-Regular
            font-weight: 400
            &.finish
              color: rgba(144, 151, 163, 1)
            &.todo
              color: rgba(240, 114, 63, 1)
      .submit
        width: 670px
        height: 90px
        background: linear-gradient(90deg, rgba(255, 134, 76, 1) 0%, rgba(252, 91, 48, 1) 100%)
        border-radius: 8px
        border: none
        margin: 60px auto 0
        font-size: 32px
        font-family: PingFangSC-Medium
        font-weight: 500
        color: rgba(255, 255, 255, 1)
        line-height: 90px
        text-align: center
    .bottom
      width: 670px
      margin: 60px auto
      .tit
        font-size: 28px
        font-family: PingFangSC-Regular
        font-weight: 400
        color: rgba(18, 33, 62, 1)
        margin-bottom: 34px
      .report-loan-list
        > ul
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          margin-bottom: 30px
          > li
            margin-bottom: 20px
            flex: 0 0 324px
            background: rgba(255, 255, 255, 1)
            box-shadow: 0px 4px 10px 0px rgba(21, 21, 21, 0.06)
            border-radius: 8px
            border: 1px solid rgba(238, 238, 238, 1)
            padding: 20px
            box-sizing: border-box
        .dv-top
          .avatar
            width: 40px
            height: 40px
            border-radius: 18px;
            inline-block-direction()
          .name
            font-size: 26px
            margin-left: 14px
            inline-block-direction()
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            width: 116px
        .dv-middle
          margin: 10px 0 20px
          color: #EF6826
          > span
            font-size: 32px
            display: inline-block
            vertical-align: text-bottom
            white-space: nowrap;
        .dv-bottom
          color: rgba(18,33,62,1)
          font-size: 24px
          > div
            inline-block-direction()
          > div:nth-child(2)
            margin-left: 14px
        .tag
          display: block
          margin-top: 14px
          display: flex
          align-items: center
          > li
            padding: 5px 10px
            margin-right: 12px
            font-size:20px
            font-family:PingFangSC-Regular
            font-weight:400
            color:rgba(40,107,245,1)
            line-height:28px
            background:rgba(233,241,255,1)
            border-radius:4px
</style>
