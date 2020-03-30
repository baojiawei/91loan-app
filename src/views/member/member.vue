<template>
  <div class="member">
    <cube-scroll>
      <div class="header">
        <img v-if="custInfo.vip" class="login" src="./member.png" alt="">
        <img v-else class="loginOut" src="./banner-desc.png" alt="">
      </div>
      <div v-if="custInfo.vip" class="user-info">
        <div class="user-info-left">
          <img src="./user-icon.png" alt="">
        </div>
        <div class="user-info-right">
          <div class="tel">{{ custInfo.telNo }}</div>
          <div class="due-time">会员于{{ custInfo.vipExpTime | formatTime}}到期</div>
        </div>
      </div>
      <div v-else class="user-level">
        <div class="level-left">
          <div class="level-name">黑钻会员</div>
          <div class="level-intro">开通会员每月预计可省168.32元</div>
        </div>
        <div class="level-right" @click="_fastPay">立即开通</div>
      </div>
      <div class="new-flash-warpper">
        <i class="icon-new-flash"></i>
        <div class="slide-loan-list">
          <cube-slide :data="loanCustList" direction="vertical" :showDots="false" :interval="2000">
            <cube-slide-item v-for="(item, index) in loanCustList" :key="index">
              <div class="slide-item">{{item.name}}{{item.telNo}}开通黑钻会员</div>
            </cube-slide-item>
          </cube-slide>
        </div>
      </div>
      <div class="user-equity">
        <div class="tit1"></div>
        <ul class="equity-list">
          <li>
            <img src="./icon1.png" alt="">
            <div class="name">专属产品</div>
            <div class="desc">新口子通过率高</div>
          </li>
          <li>
            <img src="./icon2.png" alt="">
            <div class="name">加速审核</div>
            <div class="desc">专属通道审核快</div>
          </li>
          <li @click="goToThirdPage($event)" :url="novel.url" :title="novel.title">
            <img src="./icon3.png" alt="">
            <div class="name">小说优惠</div>
            <div class="desc">专属渠道8折</div>
          </li>
          <li>
            <img src="./icon4.png" alt="" @click="showWaitAlert">
            <div class="name">信用分析</div>
            <div class="desc">网贷分析省128元</div>
          </li>
          <li>
            <img src="./icon5.png" alt="" @click="showWaitAlert">
            <div class="name">8折话费</div>
            <div class="desc">充就立减10元</div>
          </li>
        </ul>
      </div>
      <div class="user-exclusive">
        <div class="tit2"></div>
        <ul class="user-exclusive-list">
          <li @click="showWaitAlert">
            <img src="./intro1.png" alt="">
          </li>
          <li @click="showWaitAlert">
            <img src="./intro2.png" alt="">
          </li>
        </ul>
      </div>
    </cube-scroll>
    <div class="bottom-btn" v-if="!custInfo.vip">
      <div class="btn-left">
        <div>
          <div class="price" v-if="tradeGoods.length > 0">
            <span class="discount">￥{{tradeGoods[2].discount | formatMoney}}<span>/月</span></span>
            <span class="original">原价￥{{tradeGoods[2].amount | formatMoney}}</span>
          </div>
          <div class="protocol">
            <i class="icon-check" @click="chooseProtocol"></i>
            <router-link :to="{ name: 'memberProtocol', params: { showBottomTabBar: false } }" tag="span">我已阅读并同意《会员协议》</router-link>
          </div>
        </div>
      </div>
      <div class="btn-right" @click="_getReportResult">立即开通</div>
    </div>
    <report-pay v-if="tradeGoods.length > 0"
                :isPayWrapperShow="isPayWrapperShow"
                :reportData="tradeGoods[2]"
                ref="reportPay"
                @toggleShowPayWrapper="_getReportResult"
                @payCallBack="_payCallBack"></report-pay>
    <pay-result-dialog
      :isPayResultDialogShow="isPayResultDialogShow"
      :payData="payData"
      @toggleShowPayResultDialog="_toggleShowPayResultDialog"></pay-result-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import reportPay from 'components/reportPay/reportPay'
import payResultDialog from 'components/payResultDialog/payResultDialogForMember'
import { getLoanCustList } from 'api/loanProduct'
import { getUserInfoApp, showAppTabBar } from 'common/js/utils-app'
import { dateToStr } from 'common/js/utils'
import { getTradeGoodsList } from 'api/report'
import { mapGetters } from 'vuex'

export default {
  components: {
    reportPay: reportPay,
    payResultDialog: payResultDialog
  },
  data () {
    return {
      loanCustList: [],
      chooseProtocolFlag: true,
      custInfo: '',
      tradeGoods: [],
      isPayWrapperShow: false,
      isPayResultDialogShow: false,
      goodsId: 4,
      novel: {
        url: 'http://qbqcu456696.hojmta.cn/index.php/cms/document/detail/id/7248226.html?t=3926',
        title: '小说'
      }
    }
  },
  filters: {
    formatMoney (item) {
      return item / 100
    },
    formatTime (item) {
      return dateToStr(item, 'yyyy/MM/dd')
    }
  },
  beforeRouteEnter (to, from, next) {
    showAppTabBar(true)
    next()
  },
  computed: {
    ...mapGetters([
      'orderData'
    ])
  },
  created () {
    this._getLoanCustList()
    this._getTradeGoods()
    if (this.orderData.id !== undefined) {
      this.payData = this.orderData
      this._toggleShowPayResultDialog()
    }
  },
  mounted () {
    if (getUserInfoApp()) {
      this.custInfo = getUserInfoApp()
    } else {
      this.custInfo = {}
    }
  },
  methods: {
    _getLoanCustList () {
      getLoanCustList().then((res) => {
        this.loanCustList = res.data
      })
    },
    goToThirdPage (e) {
      const url = e.currentTarget.getAttribute('url')
      const title = e.currentTarget.getAttribute('title')
      if (this.custInfo.vip) {
        this.$router.push({
          name: 'externalPage',
          params: {
            title: title,
            url: url,
            showBottomTabBar: false
          }
        })
      } else {
        this._getReportResult()
      }
    },
    showWaitAlert () {
      this.$createToast({
        txt: '即将上线',
        type: 'warn',
        time: 2000
      }).show()
    },
    chooseProtocol (e) {
      if (e.target.className.indexOf('icon-check') > -1) {
        e.target.classList.remove('icon-check')
        e.target.classList.add('icon-uncheck')
        this.chooseProtocolFlag = false
      } else {
        e.target.classList.remove('icon-uncheck')
        e.target.classList.add('icon-check')
        this.chooseProtocolFlag = true
      }
    },
    _fastPay () {
      if (getUserInfoApp()) {
        this.$refs.reportPay.payMoney('', {
          telNo: getUserInfoApp().telNo,
          goodsId: this.goodsId,
          redirectUrl: '/market/#/member'
        })
      } else {
        getUserInfoApp(true)
      }
    },
    _getTradeGoods () {
      getTradeGoodsList().then((res) => {
        this.tradeGoods = res.data
      })
    },
    _getReportResult () {
      if (!this.chooseProtocolFlag) {
        this.$createToast({
          txt: '请勾选会员协议',
          time: 2000,
          type: 'warn'
        }).show()
        return
      }
      if (getUserInfoApp()) {
        this.tradeGoods.map((item) => {
          item.reqParams = {
            telNo: getUserInfoApp().telNo,
            goodsId: this.goodsId,
            redirectUrl: '/market/#/member'
          }
        })
        this.isPayWrapperShow = !this.isPayWrapperShow
      } else {
        getUserInfoApp(true)
      }
    },
    _payCallBack (payData) {
      this.payData = payData
      this._toggleShowPayResultDialog()
    },
    _toggleShowPayResultDialog () {
      this.isPayResultDialogShow = !this.isPayResultDialogShow
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .member
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    .header
      width: 750px
      height: 371px
      background: url('./bg-banner.png') no-repeat
      background-size: cover
      padding-top: 142px
      box-sizing: border-box
      > .loginOut
        width: 626px
        height: 45px
        display: block
        margin: 0 auto
      > .login
        width: 415px
        height: 42px
        display: block
        margin: 0 auto
    .user-level
      width: 690px
      height: 201px
      background: url('./bg-member.png') no-repeat
      background-size: cover
      border: 1px solid transparent
      margin: -130px auto 30px
      display: flex
      align-items: center
      justify-content: space-evenly
      > .level-left
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: flex-start
        height: 100px
        > .level-name
          font-size: 42px
          font-family: PingFangSC-Semibold, PingFang SC
          font-weight: 600
          color: rgba(51, 49, 46, 1)
        > .level-intro
          font-size: 24px
          font-family: PingFangSC-Medium, PingFang SC
          font-weight: 500
          color: rgba(84, 84, 84, 1)
      > .level-right
        width: 180px
        height: 66px
        background: rgba(23, 25, 29, 1)
        border-radius: 33px
        display: flex
        align-items: center
        justify-content: center
        font-size: 26px
        font-family: PingFangSC-Semibold, PingFang SC
        font-weight: 600
        color: rgba(233, 214, 186, 1)
    .user-info
      width: 690px
      height: 201px
      background: url('./bg-member.png') no-repeat
      background-size: cover
      border: 1px solid transparent
      margin: -130px auto 30px
      display: flex
      align-items: center
      justify-content: space-between
      padding: 0 45px
      box-sizing: border-box
      > .user-info-left
        width: 120px
        height: 120px
        background: url("./user.png") no-repeat
        background-size: cover
        position: relative
        > img
          display: block
          width: 32px
          height: 32px
          position: absolute
          bottom: 0
          right: 0
      > .user-info-right
        flex: 1
        display: flex
        flex-direction: column
        align-items: flex-start
        justify-content: space-evenly
        height: 120px
        margin-left: 40px
        > .tel
          font-size: 42px
          font-family: PingFangSC-Semibold, PingFang SC
          font-weight: 600
          color: rgba(51, 49, 46, 1)
        > .due-time
          font-size: 24px
          font-family: PingFangSC-Medium, PingFang SC
          font-weight: 500
          color: rgba(84, 84, 84, 1)
    .new-flash-warpper
      width: 670px
      height: 80px
      margin: 0 auto 30px
      padding-left: 40px
      background: rgba(245, 245, 250, 1)
      border-radius: 40px
      box-sizing: border-box
      .icon-new-flash
        width: 36px
        height: 37px
        background-image: url('./broadcast.png')
        background-size: 100% 100%
        display: inline-block
        vertical-align: middle
      .slide-loan-list
        width: 480px
        display: inline-block
        vertical-align: middle
        font-size: $font-size-28
        color: #4a4a4a
        margin-left: 30px
        height: 80px
        line-height: 80px

    .user-equity
      border-top: 12px solid #F4F6F8
      border-bottom: 12px solid #F4F6F8
      .tit1
        width: 440px
        height: 34px
        background: url('./tit1.png') no-repeat
        background-size: cover
        margin: 30px auto 40px
      .equity-list
        margin: 0 40px 40px
        display: flex
        align-items: center
        flex-wrap: wrap
        > li
          display: flex
          flex-direction: column
          align-items: center
          margin: 20px 0
          width: 220px
          > img
            width: 96px
            height: 96px
          > .name
            font-size: 26px
            font-family: PingFangSC-Medium, PingFang SC
            font-weight: 500
            color: rgba(18, 33, 62, 1)
            line-height: 26px
            margin-top: 22px
          > .desc
            font-size: 20px
            font-family: PingFangSC-Regular, PingFang SC
            font-weight: 400
            color: rgba(153, 153, 153, 1)
            line-height: 20px
            margin-top: 10px
    .user-exclusive
      .tit2
        width: 440px
        height: 34px
        background: url('./tit2.png') no-repeat
        background-size: cover
        margin: 40px auto
      .user-exclusive-list
        margin: 0 30px 308px
        display: flex
        align-items: center
        justify-content: space-between
        > li
          > img
            width: 333px
            height: 174px

  .bottom-btn
    width: 690px
    height: 110px
    position: fixed
    bottom: 60px
    left: 50%
    transform: translateX(-50%)
    border-radius: 100px
    z-index: 1
    display: flex
    > .btn-left
      width: 450px
      height: 110px
      display: inline-block
      vertical-align: middle
      background: rgba(51, 51, 51, 1)
      border-radius: 100px 0px 0px 100px
      display: flex
      flex-direction: column
      align-items: center
      > div
        height: 110px
        display: flex
        flex-direction: column
        justify-content: space-evenly
        > .price
          font-family: PingFangSC-Medium, PingFang SC
          font-weight: 500
          color: rgba(242, 227, 204, 1)
          display: flex
          align-items: baseline
          > .discount
            font-size: 50px
            > span
              font-size: 24px
          > .original
            font-size: 24px
            font-family: PingFangSC-Regular, PingFang SC
            font-weight: 400
            color: rgba(204, 173, 128, 1)
            text-decoration: line-through
            margin-left: 16px
        > .protocol
          font-size: 24px
          font-family: PingFangSC-Regular, PingFang SC
          font-weight: 400
          color: rgba(204, 173, 128, 1)
          display: flex
          margin-left: 12px
          > .icon-check
            width: 24px
            height: 25px
            background: url("./check.png") no-repeat
            background-size: cover
            display: block
          > .icon-uncheck
            width: 24px
            height: 25px
            background: url("./uncheck.png") no-repeat
            background-size: cover
            display: block
          > span
            margin-left: 12px
    > .btn-right
      width: 240px
      height: 110px
      display: inline-block
      vertical-align: middle
      background: linear-gradient(270deg, rgba(240, 222, 197, 1) 0%, rgba(223, 190, 164, 1) 100%)
      border-radius: 0px 100px 100px 0px
      font-size: 32px
      font-family: PingFangSC-Medium, PingFang SC
      font-weight: 500
      color: rgba(51, 49, 46, 1)
      display: flex
      align-items: center
      justify-content: center
</style>
