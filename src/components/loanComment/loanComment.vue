<template>
  <div class="loan-comment-wrapper">
    <div class="title">
      <span>智能</span>
      <span>推荐</span>
      <div class="line"></div>
    </div>
    <div class="comment-tip">根据您的综合情况及产品审核条件，为您推荐以下产品，通过率为90%。</div>
    <div class="product-intro">
      <img :src="loanProductList.icon" alt />
      <div class="name">{{loanProductList.name}}</div>
      <div class="msg">
        <div class="module">
          <span>{{loanProductList.limit}}</span>
          <span>最高额度(元)</span>
        </div>
        <div class="line"></div>
        <div class="module">
          <span>{{loanProductList.rateDisplay}}</span>
          <span>{{loanProductList.rateName}}</span>
        </div>
        <div class="line"></div>
        <div class="module">
          <span>{{loanProductList.periodDisplay}}</span>
          <span>借款期限</span>
        </div>
      </div>
    </div>
    <button @click="apply($event)" :url="loanProductList.url" :title="loanProductList.name">
      <span>立即领钱</span>
      <img src="~images/detail/right-arrow.png" alt />
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
import { getLoanProductList } from 'api/loanProduct'
export default {
  props: {
    weight: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      loanProductList: {}
    }
  },
  created () {
    this._getLoanProductList({
      weight: this.weight
    })
  },
  methods: {
    _getLoanProductList (params) {
      getLoanProductList(params).then(res => {
        this.loanProductList = res.data[0]
      })
    },
    apply: function (e) {
      const title = e.currentTarget.getAttribute('title')
      const url = e.currentTarget.getAttribute('url')
      this.$router.push({
        name: 'externalPage',
        params: {
          title: title,
          url: url
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.loan-comment-wrapper {
  padding: 30px 30px 46px 30px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 21px 0px rgba(152, 165, 209, 0.3);
  border-radius: 24px;
  text-align: center;

  >.title {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #2E2E2E;
    text-align: center;

    >span:nth-child(2) {
      color: #FF8048;
    }

    >.line {
      width: 48px;
      height: 8px;
      background: rgba(243, 243, 246, 1);
      margin: 16px auto 0;
    }
  }

  >.comment-tip {
    margin-top: 26px;
    padding: 12px 26px;
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(101, 79, 74, 1);
    line-height: 37px;
    background: rgba(255, 243, 230, 1);
    border-radius: 8px;
    text-align: left;
  }

  >.product-intro {
    margin: 36px auto 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;

    > img {
      width: 98px;
      height: 98px;
    }

    >.name {
      font-size: 46px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(46, 46, 46, 1);
    }

    >.msg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      >.line {
        width: 1px;
        height: 64px;
        background: #e4e4e4;
      }

      > .module {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(155, 161, 172, 1);

        >span:nth-child(1) {
          font-size: 40px;
          font-weight: 600;
          color: rgba(233, 86, 50, 1);
          margin-bottom: 20px;
        }
      }
    }
  }

  > button {
    width: 420px;
    height: 80px;
    background: linear-gradient(90deg, rgba(255, 185, 76, 1) 0%, rgba(252, 135, 48, 1) 100%);
    border-radius: 48px;
    margin: 0 auto;

    > span {
      font-size: 34px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      margin-right: 10px;
    }

    > img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
