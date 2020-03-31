<template>
  <div class="member-pay">
    <nav-bar :title=title></nav-bar>
    <cube-scroll>
      <div class="header">
        <div class="header-top" />
        <div class="header-bottom">
          <span>开通黑钻会员 畅享</span>
          <span class="red">8</span>
          <span>大权益</span>
        </div>
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
      <div class="middle-content-wrapper">
        <div class="title"></div>
        <ul class="equity-list">
          <li>
            <img src="~images/memberPay/icon1.png" alt />
            <div class="name">专属产品</div>
          </li>
          <li>
            <img src="~images/memberPay/icon2.png" alt />
            <div class="name">加速审核</div>
          </li>
          <li>
            <img src="~images/memberPay/icon3.png" alt />
            <div class="name">信用卡代偿</div>
          </li>
          <li>
            <img src="~images/memberPay/icon4.png" alt />
            <div class="name">信用分析</div>
          </li>
          <li>
            <img src="~images/memberPay/icon5.png" alt />
            <div class="name">话费立减</div>
          </li>
          <li>
            <img src="~images/memberPay/icon6.png" alt />
            <div class="name">视频会员立减</div>
          </li>
          <li>
            <img src="~images/memberPay/icon7.png" alt />
            <div class="name">三折小说</div>
          </li>
          <li>
            <img src="~images/memberPay/icon8.png" alt />
            <div class="name">信用卡申请</div>
          </li>
        </ul>
      </div>
      <div class="pay-wrapper">
        <div class="coupon">
          <div class="coupon-title">优惠券</div>
          <div class="select-coupon">
            <label>优惠券</label>
            <div>暂无优惠券</div>
          </div>
        </div>
        <div class="pay-way">
          <div class="pay-way-title">支付方式</div>
          <div class="pay-way-btn">
            <i class="icon-wx"></i>
            <span>微信支付</span>
            <i class="icon-wx-check"></i>
          </div>
        </div>
      </div>
      <div style="height:120px;"></div>
    </cube-scroll>
    <div class="bottom-btn">
      <div class="btn-left">
        <div>
          <div class="price" v-if="tradeGood.id">
            <span class="discount">
              <b>￥{{tradeGood.discount | formatMoney}}</b>
              <span>/月</span>
            </span>
            <img src="~images/member/corner.png" alt />
            <span class="original">原价￥{{tradeGood.amount | formatMoney}}</span>
          </div>
          <div class="protocol">
            <i class="icon-check" @click="chooseProtocol"></i>
            <router-link
              :to="{ name: 'memberProtocol', params: { showBottomTabBar: false } }"
              tag="span"
            >我已阅读并同意《会员协议》</router-link>
          </div>
        </div>
      </div>
      <div class="btn-right" @click="_fastPay">立即开通</div>
    </div>
    <pay-result-dialog
      :isPayResultDialogShow="isPayResultDialogShow"
      :payData="payData"
      @toggleShowPayResultDialog="_toggleShowPayResultDialog"></pay-result-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import payResultDialog from 'components/payResultDialog/payResultDialog'
import { getLoanCustList } from 'api/loanProduct'
import { getTradeGoodsList, addReportForWx } from 'api/report'
import { dateToStr } from 'common/js/utils'
import { getUserInfoApp, showAppTabBar } from 'common/js/utils-app'
import { mapGetters, mapMutations } from 'vuex'
const ORDER_TYPE_H5 = 1
export default {
  components: {
    navBar: navBar,
    payResultDialog: payResultDialog
  },
  data () {
    return {
      loanCustList: [],
      title: '黑钻会员',
      chooseProtocolFlag: true,
      payData: '',
      tradeGood: ''
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
    showAppTabBar(false)
    next()
  },
  computed: {
    ...mapGetters([
      'orderData'
    ])
  },
  created () {
    this._getLoanCustList()
    if (this.orderData.id !== undefined) {
      this.payData = this.orderData
      this._toggleShowPayResultDialog()
    }
  },
  mounted () {
    this.tradeGood = this.$route.params.tradeGood
    if (getUserInfoApp()) {
      this.custInfo = getUserInfoApp()
    } else {
      this.custInfo = {}
    }
  },
  methods: {
    _getLoanCustList () {
      getLoanCustList().then(res => {
        this.loanCustList = res.data
      })
    },
    _getTradeGoods () {
      getTradeGoodsList().then(res => {
        this.tradeGoods = res.data
      })
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
      if (!this.chooseProtocolFlag) {
        this.$createToast({
          txt: '请勾选会员协议',
          time: 2000,
          type: 'warn'
        }).show()
        return
      }
      if (getUserInfoApp()) {
        this._weixinPayForH5()
      } else {
        getUserInfoApp(true)
      }
    },
    _weixinPayForH5 () {
      const _self = this
      addReportForWx({
        payType: ORDER_TYPE_H5,
        telNo: getUserInfoApp().telNo,
        goodsId: this.tradeGood.id
      }).then((res) => {
        this.payData = res.data
        this._toggleShowPayResultDialog()
        _self.setOrderData(res.data)
        window.location.href = res.data.mwebUrl +
            '&redirect_url=' +
            encodeURIComponent(process.env.VUE_APP_APP_URL + '/market/#/member')
      })
    },
    _toggleShowPayResultDialog () {
      this.isPayResultDialogShow = !this.isPayResultDialogShow
    },
    ...mapMutations({
      setOrderData: 'ORDER_DATA'
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.member-pay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 2;

  .header {
    width: 750px;
    height: 338px;
    background: url('~images/member/bg-banner-open.png') no-repeat;
    background-size: cover;
    padding-top: 142px;
    box-sizing: border-box;
    position: relative;

    .header-top {
      width: 206px;
      height: 44px;
      background: url('~images/memberPay/bg-banner-top.png') no-repeat;
      background-size: cover;
      position: absolute;
      bottom: 112px;
      left: 50%;
      transform: translateX(-50%);
    }

    .header-bottom {
      width: 480px;
      height: 50px;
      line-height: 50px;
      background: rgba(23, 25, 29, 1);
      border-radius: 26px;
      text-align: center;
      position: absolute;
      bottom: 36px;
      left: 50%;
      transform: translateX(-50%);

      span {
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(223, 191, 169, 1);
      }

      .red {
        font-weight: 600;
        color: rgba(236, 89, 48, 1);
        font-size: 38px;
        vertical-align: bottom;
      }
    }
  }

  .new-flash-warpper {
    width: 100%;
    height: 80px;
    padding-left: 40px;
    background: #ffffff f;
    box-sizing: border-box;

    .icon-new-flash {
      width: 36px;
      height: 37px;
      background-image: url('~images/member/broadcast.png');
      background-size: 100% 100%;
      display: inline-block;
      vertical-align: middle;
    }

    .slide-loan-list {
      width: 480px;
      display: inline-block;
      vertical-align: middle;
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(43, 45, 48, 1);
      margin-left: 30px;
      height: 80px;
      line-height: 80px;
    }
  }

  .middle-content-wrapper {
    border-top: 12px solid #F4F6F8;

    .title {
      width: 440px;
      height: 34px;
      margin: 24px auto 24px;
      background: url('~images/memberPay/title.png') center center no-repeat;
      background-size: cover;
    }

    .equity-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-around;

      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
        width: 25%;

        > img {
          width: 96px;
          height: 96px;
        }

        > .name {
          font-size: 26px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 400;
          color: rgba(58, 58, 58, 1);
          line-height: 26px;
          margin-top: 24px;
        }
      }
    }
  }

  .pay-wrapper {
    border-top: 12px solid #F4F6F8;

    .coupon {
      padding: 30px 36px 48px 36px;
      box-sizing: border-box;

      .coupon-title {
        font-size: 36px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(46, 46, 46, 1);
        margin-bottom: 30px;
      }

      .select-coupon {
        width: 100%;
        height: 72px;
        background: rgba(245, 237, 232, 1);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        box-sizing: border-box;

        label {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(57, 57, 57, 1);
        }

        >div {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(182, 133, 104, 1);
        }
      }
    }

    .pay-way {
      padding: 0 36px 40px 36px;
      box-sizing: border-box;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(55, 55, 55, 1);

      .pay-way-title {
        font-size: 34px;
        margin-bottom: 30px;
      }

      .pay-way-btn {
        width: 320px;
        height: 96px;
        line-height: 96px;
        text-align: center;
        border-radius: 2px;
        border: 3px solid rgba(228, 200, 174, 1);
        font-size: 30px;
        position: relative;

        >.icon-wx {
          position: absolute;
          top: 30px;
          left: 40px;
          width: 44px;
          height: 36px;
          background: url('~images/memberPay/icon-wx.png') no-repeat;
          background-size: cover;
        }

        >.icon-wx-check {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 54px;
          height: 54px;
          background: url('~images/memberPay/icon-wx-check.png') no-repeat;
          background-size: cover;
        }
      }
    }
  }

  .bottom-btn {
    width: 100%;
    height: 110px;
    position: fixed;
    bottom: 0;
    z-index: 1;
    display: flex;
    background: rgba(51, 51, 51, 1);
    padding-left: 20px;
    box-sizing: border-box;

    > .btn-left {
      height: 110px;
      display: inline-block;
      vertical-align: middle;
      display: flex;
      flex-direction: column;
      align-items: center;

      > div {
        height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        > .price {
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(242, 227, 204, 1);
          display: flex;
          align-items: center;

          > img {
            width: 119px;
            height: 36px;
          }

          > .discount {
            font-size: 34px;

            > b {
              font-size: 50px !important;
              vertical-align: text-bottom;
            }
          }

          > .original {
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(204, 173, 128, 1);
            text-decoration: line-through;
            margin-left: 16px;
          }
        }

        > .protocol {
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(204, 173, 128, 1);
          display: flex;
          margin-left: 12px;

          > .icon-check {
            width: 24px;
            height: 25px;
            background: url('~images/memberPay/check.png') no-repeat;
            background-size: cover;
            display: block;
          }

          > .icon-uncheck {
            width: 24px;
            height: 25px;
            background: url('~images/memberPay/uncheck.png') no-repeat;
            background-size: cover;
            display: block;
          }

          > span {
            margin-left: 12px;
          }
        }
      }
    }

    > .btn-right {
      width: 220px;
      height: 82px;
      background: linear-gradient(270deg, rgba(240, 222, 197, 1) 0%, rgba(223, 190, 164, 1) 100%);
      border-radius: 52px;
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 49, 46, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 20px;
      bottom: 15px;
    }
  }
}
</style>
