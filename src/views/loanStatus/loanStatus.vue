<template>
  <div class="loanStatus-wrapper">
    <nav-bar :title="title"></nav-bar>
    <div class="scroll-wrapper">
      <cube-scroll>
        <div class="loanStatus">
          <img :src="statusText.imgUrl" alt />
          <div class="status-text">{{statusText.text}}</div>
          <div class="status-tip">{{statusText.tip}}</div>
          <router-link tag="button" :to="{name: 'creditAnalysis'}">
            <span>查看我的综合信用分</span>
            <img src="~images/loanStatus/right-arrow.png" alt />
          </router-link>
        </div>
        <div class="loan-comment">
          <loan-comment weight="3"></loan-comment>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import loanComment from 'components/loanComment/loanComment'

export default {
  data () {
    return {
      title: '贷款申请',
      statusTextGroup: [{
        imgUrl: require('@/assets/images/loanStatus/failed.png'),
        text: '审核未通过',
        tip: '审核不通过，快来看看是不是信用分出了问题'
      }, {
        imgUrl: require('@/assets/images/loanStatus/applying.png'),
        text: '正在审核中...',
        tip: '申请成功，请耐心等待'
      }],
      statusText: {}
    }
  },
  created () {
    // 根据url传入的status，顶部显示不同状态
    const status = this.$route.query.s
    status && (this.statusText = this.statusTextGroup[status])
  },
  methods: {},
  components: {
    navBar: navBar,
    loanComment: loanComment
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.loanStatus-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(243, 243, 246, 1);
  z-index: 2;

  .scroll-wrapper {
    position: fixed;
    top: 98px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .loanStatus {
    margin: 44px 32px 50px 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    padding: 30px 30px 46px 30px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 21px 0px rgba(152, 165, 209, 0.3);
    border-radius: 24px;
    text-align: center;

    > img {
      width: 176px;
      height: 158px;
    }

    >.status-text {
      font-size: 36px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(18, 33, 62, 1);
    }

    >.status-tip {
      font-size: 28px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(144, 151, 163, 1);
    }

    > button {
      width: 420px;
      height: 80px;
      border-radius: 48px;
      border: 2px solid rgba(254, 110, 61, 1);

      > span {
        margin-right: 10px;
        font-size: 34px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(254, 110, 61, 1);
      }

      > img {
        width: 24px;
        height: 24px;
      }
    }
  }

  .loan-comment {
    margin: 44px 32px 50px 32px;
  }
}
</style>
