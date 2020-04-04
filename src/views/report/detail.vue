<template>
  <div class="report-detail-wrapper">
    <nav-bar :title="title"></nav-bar>
    <div class="detail-wrapper">
      <cube-scroll>
        <div class="header animated bounceIn">
          <div class="user-info-wrapper">
            <div class="avatar"></div>
            <div class="info">
              <div class="name">**梅</div>
              <div class="additional">
                <div>
                  <label>手机号码</label>
                  <span>135****8888</span>
                </div>
                <div>
                  <label>身份证号</label>
                  <span>320*************88</span>
                </div>
                <div>
                  <label>评估时间</label>
                  <span>2019-06-24 00:00:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <report-wrapper
          :title="reportWrapperTextArr[0].title"
          :advice="reportWrapperTextArr[0].advice"
        >
          <div class="credit-wrapper">
            <circle-progress
              :width="circleProgressInitData.width"
              :radius="circleProgressInitData.radius"
              :count="circleProgressInitData.count"
              :barColor="circleProgressInitData.barColor"
              :backgroundColor="circleProgressInitData.backgroundColor"
            ></circle-progress>
            <div class="line"></div>
            <div class="level">
              <div>你的信用等级为</div>
              <div class="animated fadeInRight">优秀</div>
            </div>
          </div>
        </report-wrapper>
        <report-wrapper
          :title="reportWrapperTextArr[1].title"
          :advice="reportWrapperTextArr[1].advice"
        >
          <div class="blackList-wrapper">
            <div class="module animated fadeInLeft delay-1s">
              <img src="~images/detail/icon-idCardCode.png" alt />
              <div>身份证</div>
              <div>未上黑名单</div>
            </div>
            <div class="module animated fadeInRight delay-1s">
              <img src="~images/detail/icon-telNo.png" alt />
              <div>手机号</div>
              <div class="active">命中黑名单</div>
            </div>
          </div>
        </report-wrapper>
        <report-wrapper
          :title="reportWrapperTextArr[2].title"
          :advice="reportWrapperTextArr[2].advice"
        >
          <ul class="common-list">
            <li>
              <span class="circle"></span>
              <span>运营商认证：</span>
              <span>验证一致</span>
            </li>
            <li>
              <span class="circle"></span>
              <span>在网时长：</span>
              <span>3～6个月</span>
            </li>
            <li>
              <span class="circle"></span>
              <span>在网状态：</span>
              <span>正常</span>
            </li>
          </ul>
        </report-wrapper>
        <report-wrapper
          :title="reportWrapperTextArr[3].title"
          :advice="reportWrapperTextArr[3].advice"
        >
          <ul class="common-list">
            <li>
              <span class="circle"></span>
              <span>查询主体是否命中失信黑名单：</span>
              <span>否</span>
            </li>
            <li>
              <span class="circle"></span>
              <span>查询主体是否命中法院执行：</span>
              <span>否</span>
            </li>
          </ul>
        </report-wrapper>
        <div class="loan-comment">
          <loan-comment weight="3"></loan-comment>
        </div>
        <div class="fill"></div>
      </cube-scroll>
      <button class="bottom-btn animated slideInUp delay-2s" @click="queryReport">立即查询</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'components/navBar/navBar'
import reportWrapper from 'components/reportDetail/reportWrapper'
import circleProgress from 'components/reportDetail/circleProgress'
import loanComment from 'components/loanComment/loanComment'

export default {
  data () {
    return {
      title: '报告详情',
      imgUrl:
        'http://rest.91loaning.com/loanProduct/20190826224147399_mirong.png',
      reportWrapperTextArr: [
        {
          title: '信用分',
          advice: '信用分越高，代表信用越好，贷款成功率越高。'
        },
        {
          title: '黑名单',
          advice:
            '高风险关注名单从身份证、手机号两个维度在我们的源高风险关注名单匹配。用户命中黑名单，贷款通过率低。'
        },
        {
          title: '运营商认证',
          advice:
            '贷款申请运营商认证必须验证一致，且在网状态正常，时常在12个月以上为佳。'
        },
        {
          title: '法院信息',
          advice:
            '若主体命中失信黑名单或命中法院执行，需要积极的与法院和借款方进行沟通协商，及时将所需的欠款还清，方可成功借款。'
        }
      ],
      circleProgressInitData: {
        width: 90,
        radius: 10,
        count: 600,
        barColor: '#F2AE57',
        backgroundColor: 'rgba(152,165,209,0.3)'
      }
    }
  },
  created () {},
  methods: {},
  components: {
    navBar: navBar,
    reportWrapper: reportWrapper,
    circleProgress: circleProgress,
    loanComment: loanComment
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.report-detail-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 2;

  .detail-wrapper {
    position: fixed;
    top: 96px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .header {
    width: 100%;
    height: 408px;
    background: url('~images/detail/bg-top.png') no-repeat;
    background-size: cover;
    position: relative;

    .user-info-wrapper {
      position: absolute;
      top: 76px;
      left: 64px;
      display: flex;

      .avatar {
        width: 80px;
        height: 80px;
        background: url('~images/detail/avatar.png') no-repeat;
        background-size: cover;
      }

      .info {
        margin-left: 32px;

        .name {
          font-size: 44px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(43, 45, 48, 1);
          margin-bottom: 42px;
        }

        .additional {
          font-size: 28px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;

          >div {
            margin-bottom: 28px;
          }

          label {
            color: rgba(102, 102, 102, 1);
          }

          span {
            margin-left: 24px;
            color: rgba(43, 45, 48, 1);
          }
        }
      }
    }
  }

  .credit-wrapper {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 6px 24px 0px rgba(152, 165, 209, 0.3);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 40px 0;

    >.line {
      height: 98px;
      background: #CCCDCE;
      width: 1px;
    }

    >.level {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color:rgba(123,123,123,1);

      >div:nth-child(2) {
        font-size: 50px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color:rgba(240,114,63,1);
        margin-top: 32px;
      }
    }
  }

  .common-list {
    > li {
      margin-bottom: 20px;

      >.circle {
        width: 10px;
        height: 10px;
        background: rgba(240, 114, 63, 1);
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        margin-right: 16px;
      }

      > span:nth-child(2) {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #9097A3;
      }

      > span:nth-child(3) {
        font-size: 28px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(43, 45, 48, 1);
      }
    }

    > li:last-child {
      margin-bottom: 0;
    }
  }

  .blackList-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.module {
      width: 322px;
      height: 240px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 6px 24px 0px rgba(152, 165, 209, 0.3);
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      > img {
        width: 78px;
        height: 78px;
      }

      > div:nth-child(2) {
        font-size: 28px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(184, 185, 187, 1);
      }

      > div:nth-child(3) {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(43, 45, 48, 1);
      }

      >.active {
        font-size: 32px !important;
        font-weight: 500 !important;
        color: rgba(236, 89, 48, 1) !important;
      }
    }
  }

  .fill {
    height: 98px;
  }

  .loan-comment {
    margin: 44px 32px 50px 32px;
  }

  .bottom-btn {
    width: 100%;
    height: 98px;
    background: linear-gradient(90deg, rgba(57, 157, 250, 1) 0%, rgba(105, 102, 243, 1) 100%);
    position: fixed;
    bottom: 0;
    z-index: 1;
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
